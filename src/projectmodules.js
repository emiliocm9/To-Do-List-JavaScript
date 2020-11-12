import Project from './projectconstructor';
import { dropProject, hideEditTask } from './projectselect';
import { uploadTask, addTaskToList } from './taskconstructor';
import { innerCard, myContainer, undoneContainer } from './cardsdisplay';

const myProjects = [];
const procontainer = document.querySelector('.projects-container');

const displayTasksOf = (listIndex, project) => {
  const element = document.querySelector(`[data-index="${listIndex}"]`);
  element.addEventListener('click', () => {
    document.querySelector('.jumbotron-title').textContent = `${project.name}`;
    document.querySelector('.jumbotron-desc').textContent = `${project.description}`;
    myContainer.innerHTML = '';
    undoneContainer.innerHTML = '';
    innerCard(project.name);
  });
};

const displayProjects = (project) => {
  const listIndex = myProjects.indexOf(project);
  const listade = localStorage.getItem(project.name);
  const dataOfProject = JSON.parse(listade);
  const cont = document.createElement('div');
  cont.setAttribute('data-index', `${listIndex}`);
  cont.innerHTML += `<a href="#" data-text="${dataOfProject.name}" class="title_menu title_bond">${dataOfProject.name}</a>`;

  procontainer.appendChild(cont);
  displayTasksOf(listIndex, project);
};

const addProjectToList = (name, description) => {
  const newProject = new Project(name, description);
  myProjects.push(newProject);
  localStorage.setItem(name, JSON.stringify(newProject));
  displayProjects(newProject);
  dropProject(newProject);
};

const initAppendLocalStorage = () => {
  const one = new Project('Closure of Plant', 'Nationwide rail company KiwiRail chose to close an industrial plant that manufactured rolling stock and replacement parts.');
  const two = new Project('Kitchen Makeover', 'Renovating the kitchen.');
  const three = new Project('New Car Design', 'Designing a new transportation vehicle.');
  const arr = [one, two, three];
  arr.forEach(element => {
    addProjectToList(element.name, element.description);
  });
};

const initFun = () => {
  if (localStorage.length === 0) {
    initAppendLocalStorage();
    addTaskToList('Shop-Homework', 'Biology homework for miss Lily', '2018-05-31', 'Low', false, 'Kitchen Makeover');
    addTaskToList('Car-Homework', 'Caramel homework for miss Lily', '2018-05-31', 'High', false, 'Kitchen Makeover');
  } else {
    for (let i = 0; i < localStorage.length; i += 1) {
      if (/name/.test(localStorage[localStorage.key(i)])) {
        const content = JSON.parse(localStorage[localStorage.key(i)]);
        addProjectToList(content.name, content.description);
        if (content.tasks.length > 0) {
          for (let num = 0; num < content.tasks.length; num += 1) {
            const task = content.tasks[num];
            const par = content.name;
            const { title } = task;
            addTaskToList(title, task.description, task.date, task.priority, task.completion, par);
          }
        }
      }
    }
  }

  uploadTask();
  hideEditTask();
};

export {
  myProjects, displayProjects, addProjectToList, initFun,
};
