import {Project} from './projectconstructor';
const myProjects = [];
const myContainer = document.querySelector('.todo-container');
const procontainer = document.querySelector('.projects-container');

const displayProjects = (project) => {
  const listIndex = myProjects.indexOf(project);
  const cont =  document.createElement('div');
  cont.setAttribute('data-index', `${listIndex}`);
  cont.innerHTML += `<a href="#" class="title_menu title_bond">${project.name}</a>`;

  procontainer.appendChild(cont);
  pruebaError(listIndex, project);
}

/* const deleteTask = (myCard, listIndex) => {
  myCard.querySelector('#delete').addEventListener('click', () => {
    const element = document.querySelector(`[data-index="${listIndex}"]`);
    myContainer.removeChild(element);
    delete myList(listIndex);
  });
} */

const displayListsOfProject = (listIndex, project) => {
  myContainer.innerHTML = '';
  const argument = document.createElement('div');
  argument.innerHTML = `<h1>${project.description}</h1>`;
  myContainer.appendChild(argument);
}

const pruebaError = (listIndex, project) => {
  const element = document.querySelector(`[data-index="${listIndex}"]`);
  element.addEventListener('click', () => {
    myContainer.innerHTML ='';
    const argument = document.createElement('div');
    argument.innerHTML = `<h1>${project.description}</h1>`;
    myContainer.appendChild(argument);
  });
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

export {myProjects, displayProjects, addProjectToList, initFun, displayListsOfProject};