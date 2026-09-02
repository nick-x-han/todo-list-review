import { Project } from "./project.js";
import { displayProject, displayTodo } from "./views.js";
import { todoModal, projectModal } from "./modal.js";

const sidebarDiv = document.querySelector("#sidebar");
const contentDiv = document.querySelector("#content");

//for the current call of renderSidebar, the project list and projectId values should always be the same since renderSidebar will trigger on new projects
function renderSidebar(projects, currentProjectIndex = 0) {
    sidebarDiv.textContent = "";
    projects.forEach((p, index) => {
        const projectDisplay = displayProject(p, index);
        projectDisplay.dataset.projectId = index;
        sidebarDiv.appendChild(projectDisplay);
    });

    renderAddProjectButton();
    renderTodos(projects[currentProjectIndex]);
}

function renderTodos(project) {
    renderProjectHeader(project.name);

    project.todos.forEach((todo) => {
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
    addTodoButton.commandForElement = todoModal.modalElement;

    contentDiv.appendChild(addTodoButton);
}

function renderAddProjectButton() {
    const addProjectButton = document.createElement("button");
    addProjectButton.textContent = "+ Add Project";
    addProjectButton.command = "show-modal";
    addProjectButton.commandForElement = projectModal.modalElement;

    sidebarDiv.appendChild(addProjectButton);
}

export { renderSidebar };
//double click to edit todo
//figure out how to do deletion with views.js removebutton 