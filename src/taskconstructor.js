import {Project} from './projectconstructor';
import { myProjects } from './projectmodules';
import {Task} from './taskmodule';

const addTaskToList = (title, description, date, priority, completion, parent) => {
  const newTask = new Task(title, description, date, priority, completion);
  const node = myProjects.filter(item => item.name == parent);
  node[0].addTasks(newTask);
}

const uploadTask = () => {
  const savebutton = document.querySelector('#add-button');

  savebutton.addEventListener('click', () => {
    const title = document.querySelector('#title-text').value;
    const description = document.querySelector('#description-text').value;
    const date = document.querySelector('#date-text').value;
    const x = document.getElementById("priority-droplist");
    const priority = x.options[x.selectedIndex].text;
    const completion = false;
    const y = document.getElementById("projects-droplist");
    const parent = y.options[y.selectedIndex].text;

    addTaskToList(title, description, date, priority, completion, parent);
    saveProject.setAttribute('data-dismiss', 'modal');
    document.getElementsByTagName('INPUT').value = '';
  });
}

const giveTasks = () => {
  uploadTask();
  addTaskToList('Shop-Homework', 'Biology homework for miss Lily', '2018-05-31', 'High', true, 'Shopping');
  addTaskToList('Car-Homework', 'Caramel homework for miss Lily', '2018-05-31', 'High', true, 'Caramel');
}

export {giveTasks};