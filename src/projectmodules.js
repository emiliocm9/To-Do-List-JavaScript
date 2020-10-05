import {Project} from './projectconstructor';
import {dropProject} from './projectselect';
import {giveTasks} from './taskconstructor';
import {innerCard, myContainer, undoneContainer} from './cardsdisplay';
const myProjects = [];
const procontainer = document.querySelector('.projects-container');

const displayTasksOf = (listIndex, project) => {
  const element = document.querySelector(`[data-index="${listIndex}"]`);
  element.addEventListener('click', () => {
    myContainer.innerHTML = '';
    undoneContainer.innerHTML = '';
    innerCard(project);
  });
}

const displayProjects = (project) => {
  const listIndex = myProjects.indexOf(project);
  const cont =  document.createElement('div');
  cont.setAttribute('data-index', `${listIndex}`);
  cont.innerHTML += `<a href="#" class="title_menu title_bond">${project.name}</a>`;

  procontainer.appendChild(cont);
  displayTasksOf(listIndex, project);
}

const addProjectToList = (name, description, task) => {
  const newProject = new Project(name, description);
  newProject.addTasks(task);
  myProjects.push(newProject);
  displayProjects(newProject);
  dropProject(newProject);
}

const initFun = (myProjects) => {
  addProjectToList('Closure of Plant', 'Nationwide rail company KiwiRail chose to close an industrial plant that manufactured rolling stock and replacement parts.');
  addProjectToList('Kitchen Makeover', 'Renovating the kitchen.');
  addProjectToList('New Car Design', 'Designing a new transportation vehicle.');
  giveTasks();
}

export {myProjects, displayProjects, addProjectToList, initFun};