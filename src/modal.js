import { format, startOfTomorrow } from "date-fns";

const body = document.querySelector("body");

const addTodoModal = (function () {
    const modalElement = body.querySelector("dialog#add-todo-dialog");
    let titleElement = modalElement.querySelector("#title");
    let descriptionElement = modalElement.querySelector("textarea");
    let dueDateElement = modalElement.querySelector("#dueDate");
    let priorityElement = modalElement.querySelector("#priority");

    dueDateElement.defaultValue = format(startOfTomorrow(), 'yyyy-MM-dd'); 

    const getData = function () {
        let title = titleElement.value;
        let description = descriptionElement.value;
        let dueDate = dueDateElement.value;
        let priority = priorityElement.value;
        return { title, description, dueDate, priority };
    };

    return { modalElement, getData };
})();

const editTodoModal = (function () {
    const modalElement = body.querySelector("dialog#edit-todo-dialog");
    let titleElement = modalElement.querySelector("#title");
    let descriptionElement = modalElement.querySelector("textarea");
    let dueDateElement = modalElement.querySelector("#dueDate");
    let priorityElement = modalElement.querySelector("#priority");

    let currentTodo = null;

    const getData = function () {
        let title = titleElement.value;
        let description = descriptionElement.value;
        let dueDate = dueDateElement.value;
        let priority = priorityElement.value;

        return { title, description, dueDate, priority };
    };

    const update = function (todo) {
        currentTodo = todo;
        titleElement.value = todo.title;
        descriptionElement.value = todo.description;
        dueDateElement.value = todo.dueDate;
        console.log(dueDateElement.value);
        priorityElement.value = todo.priority;
    };

    const getCurrentTodo = function() {
        return currentTodo;
    }

    modalElement.addEventListener("click", (e) => {
        if (e.target === modalElement) {
            modalElement.close();
        }
    });

    return { modalElement, getCurrentTodo, getData, update };
})();

const projectModal = (function () {
    const modalElement = body.querySelector("dialog#add-project-dialog");

    const getName = function () {
        const name = modalElement.querySelector("#project-name");
        return name.value;
    };

    return { modalElement, getName };
})();

class FieldSwitch {
    constructor(formInputType, inputType = false, displayElementType) {
        this.formElement = document.createElement(formInputType);
        if (inputType) formElement.type = inputType;
        this.displayElement = document.createElement(displayElementType);

        formElement.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                this.onConfirmEdit();
            }
        });
    }

    onConfirmEdit() {
        displayElement.value = formElement.value;
    }
}

export { addTodoModal, editTodoModal, projectModal };
