import { Project } from "./project.js";
import { displayProject, displayTodo } from "./views.js";

const sidebarDiv = document.querySelector("#sidebar");
const contentDiv = document.querySelector("#content");
const todoModal = document.querySelector("#add-todo-dialog");
const projectModal = document.querySelector("#add-project-dialog");

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
    addTodoButton.commandForElement = todoModal;

    contentDiv.appendChild(addTodoButton);
}

function renderAddProjectButton() {
    const addProjectButton = document.createElement("button");
    addProjectButton.textContent = "+ Add Project";
    addProjectButton.command = "show-modal";
    addProjectButton.commandForElement = projectModal;

    sidebarDiv.appendChild(addProjectButton);
}

export { renderSidebar };
//continue: was thinkinh about imlement attach listener to buttons to add todo/proj
