import createProject from "./create-project";

export default function loadPage() {
    const projectContainer = createProject("Default");
    const content = document.querySelector('#content');



    content.appendChild(projectContainer);

    const addProjectButton = document.createElement('div');
    addProjectButton.innerText = 'Add new Project';
    addProjectButton.classList.add('add-project-style');
    addProjectButton.onclick = () => {
        content.removeChild(addProjectButton);
        let projectTitle = prompt("Enter name of project:")
        content.appendChild(createProject(projectTitle));
        content.appendChild(addProjectButton);
        
    }


    content.appendChild(addProjectButton);
    
}