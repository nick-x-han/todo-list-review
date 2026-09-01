import { ToDo } from "./todo.js";

class Project {
    todos = [];

    constructor(name = "Project") {
        this.name = name;
    }
}

export { Project }