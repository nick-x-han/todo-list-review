
class ToDo {
    complete = false;

    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }

    toggleStatus() {
        complete = !complete
    }

    changePriority() {

    }
}

//make factory instead so closures?

export { ToDo };