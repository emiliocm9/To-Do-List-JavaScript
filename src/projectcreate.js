import {addProjectToList} from './projectmodules';

const uploadProject = () => {
  const saveProject = document.querySelector('#add-project-button');

  saveProject.addEventListener('click', () => {
    const name = document.querySelector('#project-name-text').value;
    const description = document.querySelector('#project-description-text').value;

    addProjectToList(name, description);
  });
}

export {uploadProject};