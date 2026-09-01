import { Project } from "./project.js";
import "./styles.css";
import { ToDo } from "./todo.js";

const projects = [];
const defaultProject = new Project("Default");

projects.push(defaultProject);

function render() {

}

render(projects);

//separate domcontroller that uses project and todos as source of truth to generate dom code
//import a renderer
