const body = document.querySelector("body");

const todoModal = (function () {
    const modalElement = body.querySelector("dialog#add-todo-dialog");
    const getData = function () {
        let title = modalElement.querySelector("#title").value;
        let description = modalElement.querySelector("textarea").value;
        let dueDate = modalElement.querySelector("#dueDate").value;
        let priority = modalElement.querySelector("#priority").value;

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