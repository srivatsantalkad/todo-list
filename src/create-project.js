import createToDoContainer from "./create-todo";

export default function createProject(projectTitle) {
    const projectTitleNode = document.createElement('div');
    projectTitleNode.classList.add('project-title-style');

    const toDoContainer = document.createElement('div');

    const addToDo = document.createElement('div');
    addToDo.classList.add('add-entry-style');

    projectTitleNode.innerText = projectTitle;
    addToDo.innerText = 'Add entry';


    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container-style');

    projectContainer.appendChild(projectTitleNode);
    projectContainer.appendChild(toDoContainer);
    projectContainer.appendChild(addToDo);
    createToDoContainer(projectContainer)
    addToDo.onclick = () => {
        createToDoContainer(projectContainer);
    }

    return projectContainer;
}