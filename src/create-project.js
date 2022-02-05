import createToDoContainer from "./create-todo";

export default function createProject() {
    const projectTitle = document.createElement('div');
    const toDoContainer = document.createElement('div');
    const addToDo = document.createElement('div');

    projectTitle.innerText = 'Project Title';
    addToDo.innerText = 'Add entry';


    const projectContainer = document.createElement('div');

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(toDoContainer);
    projectContainer.appendChild(addToDo);

    addToDo.onclick = createToDoContainer(projectContainer);

    return projectContainer;
}