import {savebutton, taskbutton, selectContainer} from './taskconstants';
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
    if (confirm('Are you sure you want to delete this task?')) {
      const element = myContainer.querySelector(`[data-index="${cardIndex}"]`);
      myContainer.removeChild(element);
      delete project.tasks[cardIndex];
    }
  });
}

const validateChange = (project, title, description, date, priority, completion, parent, cardIndex) => {
  if (title && description && date) {
    project.tasks[cardIndex] = {title:title, description:description, date:date, priority:priority, completion:completion, project:parent};
    taskbutton.setAttribute('data-dismiss', 'modal');
    taskbutton.classList.add('d-none');
    savebutton.classList.remove('d-none');
    document.getElementById('tasks-form').reset();
  } else {
    for (let item in document.getElementsByClassName('feedback-task')) {
      if (document.getElementsByClassName('feedback-task')[item]) {
        var showFeedback = document.getElementsByClassName('feedback-task')[item].className.replace('d-none', 'd-block');
        document.getElementsByClassName('feedback-task')[item].className = showFeedback;
      }
    }
  }
}

const changesListen = (project, cardIndex) => {
  taskbutton.addEventListener('click', () => {
    const titlee = document.querySelector('#title-text').value;
    const descriptione = document.querySelector('#description-text').value;
    const datee = document.querySelector('#date-text').value;
    const x = document.getElementById("priority-droplist");
    const prioritye = x.options[x.selectedIndex].text;
    const completione = false;
    const y = document.getElementById("projects-droplist");
    const parente = y.options[y.selectedIndex].text;
    validateChange(project, titlee, descriptione, datee, prioritye, completione, parente, cardIndex);
  });
}

const editTask = (project, myCard, cardIndex) => {
  myCard.querySelector('#edit').addEventListener('click', () => {
    selectContainer.classList.add('d-none');
    taskbutton.classList.remove('d-none');
    savebutton.classList.add('d-none');
    $('#exampleModal').modal('show')
    document.querySelector('#title-text').value = `${project.tasks[cardIndex].title}`;
    document.querySelector('#description-text').value = `${project.tasks[cardIndex].description}`;
    document.querySelector('#date-text').value = `${project.tasks[cardIndex].date}`;
    document.getElementById('priority-droplist').options[document.getElementById('priority-droplist').selectedIndex].text = `${project.tasks[cardIndex].priority}`
    document.getElementById('projects-droplist').options[document.getElementById('projects-droplist').selectedIndex].text = `${project.name}`
    changesListen(project, cardIndex);
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
    if (project.tasks[i]) {
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
            <div>
              <input type="checkbox" class="read-check ml-2 mb-3"/>
            </div>
            <div>
              <a href="#" id="delete" class="card-link text-danger text-uppercase">Delete</a>
              <a href="#" id="edit" class="card-link font-title text-info text-uppercase">Edit</a>
            </div>
          </div>
        </div>`;

      const checkList = myCard.querySelector('.read-check');

      editTask(project, myCard, cardIndex);
      deleteTask(project, myCard, cardIndex);
      toggleCheckBox(checkList, myCard, project.tasks[i]);
      eventCheckList(checkList, myCard, project.tasks[i]);
    }
  }
}

export {innerCard, myContainer, undoneContainer};