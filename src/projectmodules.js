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
    for (let key in localStorage) {
      if (/name/.test(localStorage[key])) {
        const content = JSON.parse(localStorage[key]);
        addProjectToList(content.name, content.description);
        for (let key in content.tasks) {
          addTaskToList(content.tasks[key].title, content.tasks[key].description, content.tasks[key].date, content.tasks[key].priority, content.tasks[key].completion, content.name);
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
