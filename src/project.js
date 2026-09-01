import { ToDo } from "./todo.js";

class Project {
    #todos = [];

    constructor(name = "Project") {
        this.name = name;
    }

    //project 1 has the todo to remove, project2 doesn't
    static transferTodo(project1, project2, todo) {
        project2.addTodo(todo);
        project1.removeTodo(todo);
    }

    removeTodo(todo) {
        this.#todos.filter(t => t.id !== todo.id);
    }

    addTodo(todo) {
        this.#todos.push(todo);
    }

    getTodos() {
        return this.#todos;
    }
}

export { Project }