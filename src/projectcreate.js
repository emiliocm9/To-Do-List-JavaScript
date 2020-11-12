import { addProjectToList } from './projectmodules';

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
      document.getElementsByClassName('feedback').forEach(item => {
        if (document.getElementsByClassName('feedback')[item]) {
          const showFeedback = document.getElementsByClassName('feedback')[item].className.replace('d-none', 'd-block');
          document.getElementsByClassName('feedback')[item].className = showFeedback;
        }
      });
    }
  });
};

export default uploadProject;