function displayProject(p) {
  const projectButton = document.createElement("button");
  projectButton.textContent = p.name;
  return projectButton;
}

function displayTodo(todo) {
    const todoDiv = document.createElement("div");
    const todoTitle = document.createElement("h2");
    //should be display: none or something until event triggered
    const todoDescription = document.createElement("div");
    const todoDueDate = document.createElement("div");
    const todoNotes = document.createElement("div");

    todoTitle.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoDueDate.textContent = todo.dueDate;
    todoNotes.textContent = todo.notes;

    todoDiv.classList.add(todo.priority);

    if (todo.completed) {
        todoDiv.classList.add("completed");
    }

    expandDiv.appendChild(todoDescription);
    expandDiv.appendChild(todoNotes);

    todoDiv.append(todoTitle, todoDueDate, todoNotes);
}

export { displayProject, displayTodo };