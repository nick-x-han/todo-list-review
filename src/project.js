class Project {
    todos = [];

    constructor(name = "Project") {
        this.id = crypto.randomUUID();
        this.name = name;
    }

    //project 1 has the todo to remove, project2 doesn't
    static transferTodo(project1, project2, todo) {
        project2.addTodo(todo);
        project1.removeTodo(todo);
    }

    removeTodo(todo) {
        let removeIndex = this.todos.findIndex(t => t.id === todo.id);
        this.todos.splice(removeIndex, 1);
    }

    addTodo(data) {
        let newTodo = new ToDo(data);
        this.todos.push(newTodo);
    }
}

class ToDo {
    completed = false;

    constructor(data) {
        this.id = crypto.randomUUID();
        this.title = data.title;
        this.description = data.description;
        this.dueDate = data.dueDate;
        this.priority = data.priority;
    }

    toggleStatus() {
        this.completed = !this.completed;
    }
    

}

export { Project }