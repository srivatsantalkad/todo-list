export default function createToDoContainer(projectContainer) {
    const toDoWrapper = document.createElement('div');
    const toDoCheck = document.createElement('input');
    toDoCheck.setAttribute('type', 'checkbox');
    const toDoContainer = document.createElement('input');
    toDoContainer.innerText = 'This is the to do container.';
    toDoWrapper.classList.add('to-do-style');

    toDoWrapper.append(toDoCheck);
    toDoWrapper.append(toDoContainer);
    (projectContainer.childNodes[1]).appendChild(toDoWrapper);   
}