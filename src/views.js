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

    todoDiv.append(todoTitle, todoDueDate, expandDiv);
    return todoDiv;
}

export { displayProject, displayTodo };