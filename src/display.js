import { displayProject, displayRemoveButton, displayTodo } from "./views.js";
import { todoModal, projectModal } from "./modal.js";
import { getProjects, getCurrentProject } from "./projectManager.js";
import { removeProject, setCurrentProjectIndex } from "./projectManager.js";

const sidebarDiv = document.querySelector("#sidebar");
const contentDiv = document.querySelector("#content");

//for the current call of renderSidebar, the project list and projectId values should always be the same since renderSidebar will trigger on new projects
function renderSidebar() {
    sidebarDiv.textContent = "";
    getProjects().forEach((p, index) => {
        const projectDisplay = displayProject(p, index);
        const removeButton = displayRemoveButton(() => onRemoveProject(p));
        projectDisplay.dataset.projectId = index;
        projectDisplay.appendChild(removeButton);
        sidebarDiv.appendChild(projectDisplay);
    });

    renderAddProjectButton();
    renderTodos(getCurrentProject());
}

function renderTodos(project) {
    renderProjectHeader(project.name);

    project.todos.forEach((todo) => {
        const todoDisplay = displayTodo(todo);
        const removeButton = displayRemoveButton(() => {
            project.removeTodo(todo);
            renderSidebar();
        });
        todoDisplay.appendChild(removeButton);

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

function onRemoveProject(project) {
    removeProject(project);
    if (!getCurrentProject()) {
        setCurrentProjectIndex(0);
    }
    renderSidebar();
}

export { renderSidebar };
//double click to edit todo
//figure out how to do deletion with views.js removebutton
//when deleting a project that is currentproject, it still is displayed. fix this.
