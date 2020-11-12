import {
  savebutton, taskbutton, selectContainer, selectContainerLabel,
} from './taskconstants';

const dropProject = (project) => {
  selectContainer.innerHTML += `<option class="text-dropdown">${project.name}</option>`;
};

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
    if (selectContainer.classList.contains('d-none')) {
      selectContainer.classList.remove('d-none');
    }
    if (selectContainerLabel.classList.contains('d-none')) {
      selectContainerLabel.classList.remove('d-none')
    }
  });
};

export { dropProject, hideEditTask };