const myContainer = document.querySelector('.todo-container');
const undoneContainer = document.querySelector('.todo-container-no');

const toggleCheckBox = (checkList, card, task) => {
  if (task.completion) {
    checkList.checked = true;
    myContainer.appendChild(card);
  } else {
    checkList.checked = false;
    undoneContainer.appendChild(card);
  }
}

const deleteTask = (project, myCard, cardIndex) => {
  myCard.querySelector('#delete').addEventListener('click', () => {
    const element = myContainer.querySelector(`[data-index="${cardIndex}"]`);
    myContainer.removeChild(element);
    delete project.tasks[cardIndex];
  });
}

const eventCheckList = (checkList, card, task) => {
  checkList.addEventListener('change', () => {
    if (task.completion) {
      task.completion = false;
      toggleCheckBox(checkList, card, task);
    } else {
      task.completion = true;
      toggleCheckBox(checkList, card, task);
    }
  });
}

const innerCard = (project) => {
  for (let i = 1; i < project.tasks.length; i += 1) {
    const cardIndex = i;
    const myCard = document.createElement('div');
    myCard.className = 'card mt-2';
    myCard.setAttribute('data-index', `${cardIndex}`);
    myCard.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${project.tasks[i].title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${project.tasks[i].date}</h6>
        <p class="card-text">${project.tasks[i].description}</p>
        <p class="card-text text-uppercase">${project.tasks[i].priority} importance</p>
        <div class="d-flex w-100 justify-content-between">
          <input type="checkbox" class="read-check ml-2 mb-3"/>
          <a href="#" id="delete" class="card-link text-danger text-uppercase">Delete</a>
        </div>
      </div>`;

      const checkList = myCard.querySelector('.read-check');

      deleteTask(project, myCard, cardIndex);
      toggleCheckBox(checkList, myCard, project.tasks[i]);
      eventCheckList(checkList, myCard, project.tasks[i]);
  }
}

export {innerCard, myContainer, undoneContainer};