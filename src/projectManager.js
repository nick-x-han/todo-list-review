import { Project } from "./project.js";

let projects = [];
if (localStorage.getItem("projects"))
    loadProjects();
let currentProjectIndex = 0;

function loadProjects() {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    projects = storedProjects.map((data) => {
        let project = new Project(data.name);
        data["todos"].forEach((todo) => {
            project.addTodo(todo);
        })
        return project
    });
}

export function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

export function addProject(name) {
    const project = new Project(name);
    projects.push(project);
}

export function getProjects() {
    return projects;
}

export function getCurrentProject() {
    return projects[currentProjectIndex];
}

export function setCurrentProjectIndex(index) {
    currentProjectIndex = index;
}

export function removeProject(project) {
    let removeIndex = projects.findIndex((p) => p.id === project.id);
    projects.splice(removeIndex, 1);
}
