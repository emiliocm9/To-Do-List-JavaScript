import {Project} from './projectconstructor';
import {dropProject, hideEditTask} from './projectselect';
import {giveTasks} from './taskconstructor';
import {innerCard, myContainer, undoneContainer} from './cardsdisplay';
const myProjects = [];
const procontainer = document.querySelector('.projects-container');

const displayTasksOf = (listIndex, project) => {
  const element = document.querySelector(`[data-index="${listIndex}"]`);
  element.addEventListener('click', () => {
    document.querySelector('.jumbotron-title').textContent = `${project.name}`
    document.querySelector('.jumbotron-desc').textContent = `${project.description}`
    myContainer.innerHTML = '';
    undoneContainer.innerHTML = '';
    innerCard(project);
  });
}

const displayProjects = (project) => {
  const listIndex = myProjects.indexOf(project);
  const listade = localStorage.getItem(project.name);
  const dataOfProject = JSON.parse(listade);
  const cont =  document.createElement('div');
  cont.setAttribute('data-index', `${listIndex}`);
  cont.innerHTML += `<a href="#" data-text="${dataOfProject.name}" class="title_menu title_bond">${dataOfProject.name}</a>`;

  procontainer.appendChild(cont);
  displayTasksOf(listIndex, project);
}

const addProjectToList = (name, description, task) => {
  const newProject = new Project(name, description);
  newProject.addTasks(task);
  myProjects.push(newProject);
  appendLocalStorage(name, newProject)
  displayProjects(newProject);
  dropProject(newProject);
}

const appendLocalStorage = (storage, item) => {
  localStorage.setItem(storage, JSON.stringify(item));
}

const initAppendLocalStorage = () => {
  const one = new Project('Closure of Plant', 'Nationwide rail company KiwiRail chose to close an industrial plant that manufactured rolling stock and replacement parts.')
  const two = new Project('Kitchen Makeover', 'Renovating the kitchen.');
  const three = new Project('New Car Design', 'Designing a new transportation vehicle.');
  localStorage.setItem('Closure of Plant', JSON.stringify(one));
  localStorage.setItem('Kitchen Makeover', JSON.stringify(two));
  localStorage.setItem('New Car Design', JSON.stringify(three));
}

const  initFun = async () => {
  if (localStorage.length == 0) {
    initAppendLocalStorage();
  }
  for (let key in localStorage) {
    if (/name/.test(localStorage[key])) {
      const content = JSON.parse(localStorage[key]);
      addProjectToList(content.name, content.description);
    }
  }
  giveTasks();
  hideEditTask();
}

export {myProjects, displayProjects, addProjectToList, initFun};
