import deleteIcon from "./assets/trash-can.svg";
import "./todo.css";
import { getCurrentProject } from "./projectManager.js";
import { editTodoModal } from "./modal.js";
import { formatDistanceToNow } from "date-fns";

function displayProject(p) {
    const projectDiv = document.createElement("div");
    projectDiv.textContent = p.name;

    // To style current project on the sidebar
    if (p === getCurrentProject()) {
        projectDiv.classList.add("current-project");
    } else {
        projectDiv.classList.remove("current-project");
    }
    projectDiv.classList.add("project");
    return projectDiv;
}

function displayTodo(todo) {
    const todoDiv = document.createElement("div");
    const todoTitle = document.createElement("h2");
    //should be display: none or something until event triggered
    const expandDiv = document.createElement("div");
    const todoDescription = document.createElement("div");
    const todoDueDate = document.createElement("div");
    const completedBox = document.createElement("input");

    completedBox.type = "checkbox";
    completedBox.name = "completed";
    completedBox.checked = todo.completed;

    completedBox.addEventListener("change", () => {
        todoDiv.classList.toggle("todo-completed");
        todo.completed = !todo.completed;
    })
    if (todo.completed) {
        todoDiv.classList.add("todo-completed");
    }

    todoTitle.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoDueDate.textContent = formatDistanceToNow(todo.dueDate);

    todoDiv.classList.add(todo.priority);
    todoDiv.classList.add("todo");

    todoDiv.addEventListener("click", (e) => {
        if (e.target.tagName !== "DIV") return;
        editTodoModal.update(todo);
        editTodoModal.modalElement.showModal();
    })

    //will have other things like the dropdown for choosing project
    // actually with current + location this isn't possible
    expandDiv.appendChild(todoDescription);
    expandDiv.style.display = "none";

    todoDiv.append(completedBox, todoTitle, todoDueDate, expandDiv);
    return todoDiv;
}

function displayRemoveButton(removeFunction) {
    const removeButton = document.createElement("img");
    removeButton.src = deleteIcon;
    removeButton.classList.add("icon");

    removeButton.addEventListener("click", (e) => {
        // removeButton.parentElement.remove();
        removeFunction();
    });
    return removeButton;
}

export { displayProject, displayTodo, displayRemoveButton };
