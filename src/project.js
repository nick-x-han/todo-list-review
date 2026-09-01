import { ToDo } from "./todo.js";

class Project {
    #todos = [];

    constructor(name = "Project") {
        this.name = name;
    }

    removeTodo(todo) {
        this.#todos.filter(t => t.id !== todo.id);
    }

    addTodo(todo) {
        this.#todos.push(todo);
    }

    getTodos() {
        return this.#todos.map(todo => todo.id);
    }
}

export { Project }