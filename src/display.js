import { Project } from "./project.js";
import { displayProject, displayTodo } from "./views.js";

const sidebarDiv = document.querySelector("#sidebar");
const contentDiv = document.querySelector("#content");

//for the current call of renderSidebar, the project list and projectId values should always be the same since renderSidebar will trigger on new projects
function renderSidebar(projects, id=0) {
  projects.forEach((p, index) => {
    const projectDisplay = displayProject(p, index);
    projectDisplay.dataset.projectId = index;
    sidebarDiv.appendChild(projectDisplay);
  });

  sidebarDiv.addEventListener("click", (e) => {
    if (e.target.tagName === 'BUTTON') {
        const projectButton = e.target.closest("button");
        contentDiv.textContent = "";
        const projectHeader = document.createElement("h1");
        projectHeader.textContent = e.target.name;
        contentDiv.appendChild(projectHeader);
        renderTodos(projects[e.target.dataset.projectId]);
    }
  })
}

function renderTodos(project) {
    project.getTodos().forEach((todo, index) => {
        const todoDisplay = displayTodo(todo);
        contentDiv.appendChild(todoDisplay);
    })
}


export { renderSidebar, renderTodos };
