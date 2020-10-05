import {savebutton, taskbutton, selectContainer, selectContainerLabel} from './taskconstants';

const dropProject = (project) => {
  selectContainer.innerHTML += `<option class="text-dropdown">${project.name}</option>`
}

const hideEditTask = () => {
  const newTask = document.getElementById('task-add-button-a');
  newTask.addEventListener('click', () => {
    document.getElementById('tasks-form').reset();
    if (!taskbutton.classList.contains('d-none')) {
      taskbutton.classList.add('d-none');
    }
    if (savebutton.classList.contains('d-none')) {
      savebutton.classList.remove('d-none');
    }
    selectContainer.classList.remove('d-none') ? selectContainer.classList.contains('d-none') : false;
    selectContainerLabel.classList.remove('d-none') ? selectContainerLabel.classList.contains('d-none') : false;
  });
}

export {dropProject, hideEditTask};