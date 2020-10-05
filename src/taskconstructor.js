import {Project} from './projectconstructor';
import {Task} from './taskmodule';
import {savebutton} from './taskconstants';
import { myProjects } from './projectmodules';

const addTaskToList = (title, description, date, priority, completion, parent) => {
  const newTask = new Task(title, description, date, priority, completion);
  const node = myProjects.filter(item => item.name == parent);
  node[0].addTasks(newTask);
}

const validateTask = (title, description, date, priority, completion, parent) => {
  if (title && description && date) {
    addTaskToList(title, description, date, priority, completion, parent);
    savebutton.setAttribute('data-dismiss', 'modal');
    document.getElementById('tasks-form').reset();
    document.querySelector(`[data-text="${parent}"]`).click();
  } else {
    for (let item in document.getElementsByClassName('feedback-task')) {
      if (document.getElementsByClassName('feedback-task')[item]) {
        var showFeedback = document.getElementsByClassName('feedback-task')[item].className.replace('d-none', 'd-block');
        document.getElementsByClassName('feedback-task')[item].className = showFeedback;
      }
    }
  }
}

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
}

const giveTasks = () => {
  uploadTask();
  addTaskToList('Shop-Homework', 'Biology homework for miss Lily', '2018-05-31', 'Low', true, 'Closure of Plant');
  addTaskToList('Car-Homework', 'Caramel homework for miss Lily', '2018-05-31', 'High', true, 'Closure of Plant');
}

export {giveTasks};