import {addProjectToList} from './projectmodules';

const uploadProject = () => {
  const saveProject = document.querySelector('#add-project-button');

  saveProject.addEventListener('click', () => {
    const name = document.querySelector('#project-name-text').value;
    const description = document.querySelector('#project-description-text').value;
    if (name && description) {
      addProjectToList(name, description);
      saveProject.setAttribute('data-dismiss', 'modal');
      document.getElementById('projects-form').reset();
    } else {
      for (let item in document.getElementsByClassName('feedback')) {
        if (document.getElementsByClassName('feedback')[item]) {
          var showFeedback = document.getElementsByClassName('feedback')[item].className.replace('d-none', 'd-block');
          document.getElementsByClassName('feedback')[item].className = showFeedback;
        }
      }
    }
  });
}

export {uploadProject};