const body = document.querySelector("body");

const todoModal = (function () {
    const modalElement = body.querySelector("dialog#add-todo-dialog");
    let titleElement = modalElement.querySelector("#title");
    let descriptionElement = modalElement.querySelector("textarea");
    let dueDateElement = modalElement.querySelector("#dueDate");
    let priorityElement = modalElement.querySelector("#priority");

    const getData = function () {
        let title = titleElement.value;
        let description = descriptionElement.value;
        let dueDate = dueDateElement.value;
        let priority = priorityElement.value;

        return { title, description, dueDate, priority };
    };

    return { modalElement, getData };
})();

const projectModal = (function () {
    const modalElement = body.querySelector("dialog#add-project-dialog");

    const getName = function () {
        const name = modalElement.querySelector("#project-name");
        return name.value;
    };

    return { modalElement, getName };
})();

export { todoModal, projectModal };
