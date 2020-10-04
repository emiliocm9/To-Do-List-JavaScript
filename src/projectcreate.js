import {addProjectToList} from './projectmodules';

const uploadProject = () => {
  const saveProject = document.querySelector('#add-project-button');

  saveProject.addEventListener('click', () => {
    const name = document.querySelector('#project-name-text').value;
    const description = document.querySelector('#project-description-text').value;

    addProjectToList(name, description);
    saveProject.setAttribute('data-dismiss', 'modal');
    document.getElementById('projects-form').reset();
  });
}

export {uploadProject};