import deleteIcon from './assets/trash-can.svg'
import './todo_style.css';

function displayProject(p) {
  const projectButton = document.createElement("button");
  projectButton.textContent = p.name;
  return projectButton;
}

function displayTodo(todo) {
    const todoDiv = document.createElement("div");
    const todoTitle = document.createElement("h2");
    //should be display: none or something until event triggered
    const expandDiv = document.createElement("div");
    const todoDescription = document.createElement("div");
    const todoDueDate = document.createElement("div");
    const removeButton = displayRemoveButton();

    todoTitle.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoDueDate.textContent = todo.dueDate;

    todoDiv.classList.add(todo.priority);

    if (todo.completed) {
        todoDiv.classList.add("completed");
    }
    //will have other things like the dropdown for choosing project
        // actually with current + location this isn't possible
    expandDiv.appendChild(todoDescription);

    todoDiv.append(todoTitle, todoDueDate, expandDiv, removeButton );
    return todoDiv;
}

function displayRemoveButton() {
    const removeButton = document.createElement("img");
    removeButton.src = deleteIcon;
    removeButton.classList.add("icon");
    
    removeButton.addEventListener("click", (e) => {
        removeButton.parentElement.remove();
    })
    return removeButton;
}

export { displayProject, displayTodo };