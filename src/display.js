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
        contentDiv.textContent = "";
        const projectHeader = document.createElement("h1");
        projectHeader.textContent = projects[e.target.dataset.projectId].name;
        contentDiv.appendChild(projectHeader);
        renderTodos(projects[e.target.dataset.projectId]);
    }
  })
}

function renderTodos(project) {
    project.todos.forEach((todo, index) => {
        const todoDisplay = displayTodo(todo);
        contentDiv.appendChild(todoDisplay);
    })
    const addTodoButton = document.createElement("button");
    addTodoButton.textContent = "+ Add To Do";
    contentDiv.appendChild(addTodoButton);
}


export { renderSidebar, renderTodos };

//continue: was wondering how to handle current project id and also how to display current proejct name immediatley instaed fo after a click