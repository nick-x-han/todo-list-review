import { Project } from "./project.js";

let projects = []
if (localStorage.getItem("projects"))
    projects = JSON.parse(localStorage.getItem('projects'));
let currentProjectIndex = 0;

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
