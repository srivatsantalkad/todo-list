export default function createToDoContainer(projectContainer) {
    const toDoContainer = document.createElement('div');
    toDoContainer.innerText = 'This is the to do container.';
    toDoContainer.classList.add('to-do-style');

    (projectContainer.childNodes[1]).appendChild(toDoContainer);   
}