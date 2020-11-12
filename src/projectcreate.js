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
      for (let i = 0; i < document.getElementsByClassName('feedback').length; i += 1) {
        if (document.getElementsByClassName('feedback')[i]) {
          const showFeedback = document.getElementsByClassName('feedback')[i].className.replace('d-none', 'd-block');
          document.getElementsByClassName('feedback')[i].className = showFeedback;
        }
      };
    }
  });
};

export default uploadProject;