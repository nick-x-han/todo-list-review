import deleteIcon from "./assets/trash-can.svg";
import "./todo_style.css";
import { getCurrentProject, removeProject, setCurrentProjectIndex } from "./projectManager.js";

function displayProject(p) {
    const projectDiv = document.createElement("div");
    projectDiv.textContent = p.name;
    const removeButton = displayRemoveButton(() => {
        removeProject(p);
        if (p === getCurrentProject()) {
            setCurrentProjectIndex(0);
        }
    });

    projectDiv.classList.add("project");
    projectDiv.append(removeButton);
    return projectDiv;
}

function displayTodo(project, todo) {
    const todoDiv = document.createElement("div");
    const todoTitle = document.createElement("h2");
    //should be display: none or something until event triggered
    const expandDiv = document.createElement("div");
    const todoDescription = document.createElement("div");
    const todoDueDate = document.createElement("div");
    const removeButton = displayRemoveButton(() => project.removeTodo(todo));

    todoTitle.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoDueDate.textContent = todo.dueDate;

    todoDiv.classList.add(todo.priority);
    todoDiv.classList.add("todo");

    if (todo.completed) {
        todoDiv.classList.add("completed");
    }
    //will have other things like the dropdown for choosing project
    // actually with current + location this isn't possible
    expandDiv.appendChild(todoDescription);

    todoDiv.append(todoTitle, todoDueDate, expandDiv, removeButton);
    return todoDiv;
}

function displayRemoveButton(removeFunction) {
    const removeButton = document.createElement("img");
    removeButton.src = deleteIcon;
    removeButton.classList.add("icon");

    removeButton.addEventListener("click", (e) => {
        removeButton.parentElement.remove();
        removeFunction();
    });
    return removeButton;
}

export { displayProject, displayTodo };
