import { Project } from "./project.js";
import "./styles.css";
import { renderSidebar } from "./display.js";
import { todoModal, projectModal } from "./modal.js";

const sidebarDiv = document.querySelector("#sidebar");

(function () {
    const projects = [];
    const defaultProject = new Project("Default");
    let currentProjectIndex = 0;

    projects.push(defaultProject);

    const testProject = new Project("test"); ///
    projects.push(testProject);
    let a = {
        title: "Pill",
        description: "Eat pill",
        dueDate: "March 17",
        priority: "high",
        notes: "x",
    };
    projects[currentProjectIndex].addTodo(a); ///

    renderSidebar(projects, currentProjectIndex);

    sidebarDiv.addEventListener("click", (e) => {
        if (e.target.dataset.projectId) {
            currentProjectIndex = e.target.dataset.projectId;
            sidebarDiv.textContent = "";
            renderSidebar(projects, currentProjectIndex);
        }
    });

    todoModal.modalElement.addEventListener("submit", () => {
        const data = todoModal.getData();
        projects[currentProjectIndex].addTodo(data);
        renderSidebar(projects, currentProjectIndex);
    });

    projectModal.modalElement.addEventListener("submit", () => {
        const newProject = new Project(projectModal.getName());
        projects.push(newProject);
        renderSidebar(projects, currentProjectIndex);
    });
})();

//flow: create new todo, then use addTodo to add it to the project by passing in the args

// SOME SHARED THING that uses composition to allwo both project and todo to easily get deleted (it auto adds the buttons and deletes its parent?)

// IDEA: what if there is a single todo list and a single project list. Projects have no idea todos exist, while todos keep track of their owner project, and just filter for project id wihtin todo list when a project is selected
