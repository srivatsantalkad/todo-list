import createToDoContainer from "./create-todo";

export default function createProject(projectTitle) {
    const projectTitleNode = document.createElement('div');
    projectTitleNode.classList.add('project-title-style');

    const projecttitlerapper = document.createElement('div');
    projecttitlerapper.appendChild(projectTitleNode);
    

    const toDoContainer = document.createElement('div');

    const addToDo = document.createElement('div');
    addToDo.classList.add('add-entry-style');

    projectTitleNode.innerText = projectTitle;
    addToDo.innerText = '+';


    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container-style');

    const deleteProject = document.createElement('div');
    deleteProject.innerText = "Remove project";
    deleteProject.classList.add('remove-entry-style');
    deleteProject.onclick = () => {
        (projectContainer.parentNode).removeChild(projectContainer);
    }



    projecttitlerapper.appendChild(deleteProject)
    projecttitlerapper.classList.add('projecttitlewrapper');

    projectContainer.appendChild(projecttitlerapper);
    projectContainer.appendChild(toDoContainer);
    projectContainer.appendChild(addToDo);
    createToDoContainer(projectContainer)
    addToDo.onclick = () => {
        createToDoContainer(projectContainer);
    }

    return projectContainer;
}