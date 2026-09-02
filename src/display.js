import { Project } from "./project.js";
import { displayProject, displayTodo } from "./views.js";

const sidebarDiv = document.querySelector("#sidebar");
const contentDiv = document.querySelector("#content");
const modal = document.querySelector("#add-todo-dialog");

//for the current call of renderSidebar, the project list and projectId values should always be the same since renderSidebar will trigger on new projects
function renderSidebar(projects, currentProjectIndex = 0) {
  projects.forEach((p, index) => {
    const projectDisplay = displayProject(p, index);
    projectDisplay.dataset.projectId = index;
    sidebarDiv.appendChild(projectDisplay);
  });

  renderTodos(projects[currentProjectIndex]);

  //remove almost everything, just change currentprojindex and also call rendertodos? move to index? it calls rendersidebar instead....
  //i guess move this to index.js
  sidebarDiv.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      renderTodos(projects[e.target.dataset.projectId]);
    }
  });
}

function renderTodos(project) {
  renderProjectHeader(project.name);

  project.todos.forEach((todo, index) => {
    const todoDisplay = displayTodo(todo);
    contentDiv.appendChild(todoDisplay);
  });

  renderAddTodoButton();
}

function renderProjectHeader(name) {
  contentDiv.textContent = "";
  const projectHeader = document.createElement("h1");
  projectHeader.textContent = name;
  contentDiv.appendChild(projectHeader);
}

function renderAddTodoButton() {
  const addTodoButton = document.createElement("button");
  addTodoButton.textContent = "+ Add To Do";
  addTodoButton.command = "show-modal";
  addTodoButton.commandForElement = modal;

  contentDiv.appendChild(addTodoButton);
}

export { renderSidebar };
