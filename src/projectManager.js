import { Project } from "./project.js";

const projects = [];

export function addProject(name) {
    const project = new Project(name);
    projects.push(project);
}

export function getProjects() {
    return projects;
}

export function removeProject(project) {
    let removeIndex = projects.findIndex((p) => p.id === project.id);
    projects.splice(removeIndex, 1);
}
