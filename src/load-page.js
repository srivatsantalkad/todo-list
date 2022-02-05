import createProject from "./create-project";

export default function loadPage() {
    const projectContainer = createProject();
    const content = document.querySelector('#content');

    content.appendChild(projectContainer);

    const addProjectButton = document.createElement('div');
    addProjectButton.innerText = 'Add new Project';
    addProjectButton.onclick = () => {
        content.appendChild(createProject());
    }
    content.appendChild(addProjectButton);      
}