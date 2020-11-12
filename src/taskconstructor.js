import Task from './taskmodule';
import { savebutton } from './taskconstants';

const addTaskToList = (title, description, date, priority, completion, parent) => {
  const newTask = new Task(title, description, date, priority, completion);
  const node = JSON.parse(localStorage.getItem(parent));
  node.tasks.push(newTask);
  localStorage.setItem(parent, JSON.stringify(node));
};

const validateTask = (title, description, date, priority, completion, parent) => {
  if (title && description && date) {
    addTaskToList(title, description, date, priority, completion, parent);
    savebutton.setAttribute('data-dismiss', 'modal');
    document.getElementById('tasks-form').reset();
    document.querySelector('[data-text="${parent}"]').click();
  } else {
    for (let item = 0; item < document.getElementsByClassName('feedback-task').length; item += 1) {
      if (document.getElementsByClassName('feedback-task')[item]) {
        var showFeedback = document.getElementsByClassName('feedback-task')[item].className.replace('d-none', 'd-block');
        document.getElementsByClassName('feedback-task')[item].className = showFeedback;
      }
    };
  }
};

const uploadTask = () => {
  savebutton.addEventListener('click', () => {
    const title = document.querySelector('#title-text').value;
    const description = document.querySelector('#description-text').value;
    const date = document.querySelector('#date-text').value;
    const x = document.getElementById("priority-droplist");
    const priority = x.options[x.selectedIndex].text;
    const completion = false;
    const y = document.getElementById("projects-droplist");
    const parent = y.options[y.selectedIndex].text;
    validateTask(title, description, date, priority, completion, parent);
  });
};

export { uploadTask, addTaskToList };
