export default function createToDoContainer(projectContainer) {
    const toDoContainer = document.createElement('div');
    toDoContainer.innerText = 'This is the to do container.';

    (projectContainer.childNodes[1]).appendChild(toDoContainer);   
}