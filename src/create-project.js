import createToDoContainer from "./create-todo";

export default function createProject() {
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('project-title-style');

    const toDoContainer = document.createElement('div');
    const addToDo = document.createElement('div');

    projectTitle.innerText = 'Project Title';
    addToDo.innerText = 'Add entry';


    const projectContainer = document.createElement('div');
    projectContainer.classList.add('.project-container-style');

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(toDoContainer);
    projectContainer.appendChild(addToDo);
    addToDo.onclick = () => {
        createToDoContainer(projectContainer);
    }

    return projectContainer;
}