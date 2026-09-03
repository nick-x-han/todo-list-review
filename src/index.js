import { Project } from "./project.js";
import "./styles.css";
import { renderSidebar } from "./display.js";
import { addTodoModal, editTodoModal, projectModal } from "./modal.js";
import { getCurrentProject, addProject, getProjects, setCurrentProjectIndex } from "./projectManager.js";

const sidebarDiv = document.querySelector("#sidebar");

(function () {
   
    if (localStorage.length === 0)
        addProject("Default");

    renderSidebar();
     

    sidebarDiv.addEventListener("click", (e) => {
        if (e.target.dataset.projectId) {
            setCurrentProjectIndex(e.target.dataset.projectId);
            sidebarDiv.textContent = "";
            renderSidebar();
        }
    });

    addTodoModal.modalElement.onsubmit = () => {
        const data = addTodoModal.getData();
        getCurrentProject().addTodo(data);
        renderSidebar();
    };

    editTodoModal.modalElement.onsubmit = () => {
        const data = editTodoModal.getData();
        editTodoModal.getCurrentTodo().edit(data);
        renderSidebar();
    }

    projectModal.modalElement.onsubmit = () => {
        const newProject = new Project(projectModal.getName());
        getProjects().push(newProject);
        renderSidebar();
    };
})();

//flow: create new todo, then use addTodo to add it to the project by passing in the args

// SOME SHARED THING that uses composition to allwo both project and todo to easily get deleted (it auto adds the buttons and deletes its parent?)

// IDEA: what if there is a single todo list and a single project list. Projects have no idea todos exist, while todos keep track of their owner project, and just filter for project id wihtin todo list when a project is selected
