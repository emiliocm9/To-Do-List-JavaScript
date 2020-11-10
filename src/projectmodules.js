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
  const cont =  document.createElement('div');
  cont.setAttribute('data-index', `${listIndex}`);
  cont.innerHTML += `<a href="#" data-text="${project.name}" class="title_menu title_bond">${project.name}</a>`;

  procontainer.appendChild(cont);
  displayTasksOf(listIndex, project);
}

const addProjectToList = (name, description, task) => {
  const newProject = new Project(name, description);
  newProject.addTasks(task);
  myProjects.push(newProject);
  displayProjects(newProject);
  dropProject(newProject);
  appendLocalStorage(name, newProject)
}

const appendLocalStorage = (storage, item) => {
  localStorage.setItem(storage, JSON.stringify(item));
}

const initFun = () => {
  addProjectToList('Closure of Plant', 'Nationwide rail company KiwiRail chose to close an industrial plant that manufactured rolling stock and replacement parts.');
  addProjectToList('Kitchen Makeover', 'Renovating the kitchen.');
  addProjectToList('New Car Design', 'Designing a new transportation vehicle.');
  giveTasks();
  hideEditTask();
}

export {myProjects, displayProjects, addProjectToList, initFun};
