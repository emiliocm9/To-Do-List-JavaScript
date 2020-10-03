import {Project} from './projectconstructor';
const myProjects = [];

const displayProjects = (project) => {
  const procontainer = document.querySelector('.projects-container');
  procontainer.innerHTML += `<a href="index.html" class="title_menu title_bond">${project.name}</a>`;
}

const addProjectToList = (name, description) => {
  const newProject = new Project(name, description);
  myProjects.push(newProject);
  displayProjects(newProject);
}

const initFun = (myProjects) => {
  addProjectToList('Homeworks', 'Biology homeworks');
  addProjectToList('Caramel', 'Buy caramel');
}

export {myProjects, displayProjects, addProjectToList, initFun};