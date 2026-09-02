import { Project } from "./project.js";
import "./styles.css";
import { ToDo } from "./todo.js";
import { renderSidebar, renderTodos } from "./display.js";

const projects = [];
const defaultProject = new Project("Default");
let currentProject = 0;

projects.push(defaultProject);
let a = new ToDo("Pill", "Eat pill", "March 17", "high", "x");
projects[currentProject].addTodo(a);
renderSidebar(projects);


//flow: create new todo, then use addTodo to add it to the project selected in dropdown

// SOME SHARED THING that uses composition to allwo both project and todo to easily get deleted (it auto adds the buttons and deletes its parent?)


// IDEA: what if there is a single todo list and a single project list. Projects have no idea todos exist, while todos keep track of their owner project, and just filter for project id wihtin todo list when a project is selected