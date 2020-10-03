const dropProject = (project) => {
  const selectContainer = document.querySelector('#projects-droplist');
  selectContainer.innerHTML += `<option class="text-dropdown">${project.name}</option>`
}

export {dropProject};