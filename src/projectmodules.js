import {Project} from './projectconstructor';
import {dropProject} from './projectselect';
const myProjects = [];
const myContainer = document.querySelector('.todo-container');
const procontainer = document.querySelector('.projects-container');

const displayTasksOf = (listIndex, project) => {
  const element = document.querySelector(`[data-index="${listIndex}"]`);
  element.addEventListener('click', () => {
    myContainer.innerHTML ='';
    const argument = document.createElement('div');
    argument.innerHTML = `<h1>${project.name}</h1>`;
    myContainer.appendChild(argument);
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
  addProjectToList('Shopping', 'Biology homeworks', {title: 'Homework', description: 'Biology homework for miss Lily', date: '2018-05-31', priority: 'High', completion: true});
  addProjectToList('Caramel', 'Buy caramel');
}

export {myProjects, displayProjects, addProjectToList, initFun};