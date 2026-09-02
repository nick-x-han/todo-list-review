class Project {
    todos = [];

    constructor(name = "Project") {
        this.name = name;
    }

    //project 1 has the todo to remove, project2 doesn't
    static transferTodo(project1, project2, todo) {
        project2.addTodo(todo);
        project1.removeTodo(todo);
    }

    removeTodo(todo) {
        this.todos.filter(t => t.id !== todo.id);
    }

    addTodo(todo) {
        let newTodo = new ToDo(todo);
        this.todos.push(newTodo);
    }
}

class ToDo {
    completed = false;

    constructor(todo) {
        this.id = crypto.randomUUID();
        this.title = todo.title;
        this.description = todo.description;
        this.dueDate = todo.dueDate;
        this.priority = todo.priority;
    }

    toggleStatus() {
        this.completed = !this.completed;
    }
    

}

export { Project }