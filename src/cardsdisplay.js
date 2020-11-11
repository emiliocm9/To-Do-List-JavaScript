import {savebutton, taskbutton, selectContainer, myContainer, undoneContainer, selectContainerLabel} from './taskconstants';

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
      if (undoneContainer.querySelector(`[data-index="${cardIndex}"]`)) {
        const element = undoneContainer.querySelector(`[data-index="${cardIndex}"]`);
        undoneContainer.removeChild(element);
      } else {
        const element = myContainer.querySelector(`[data-index="${cardIndex}"]`);
        myContainer.removeChild(element);
      }
      delete project.tasks[cardIndex];
      project.tasks = project.tasks.filter(function (e) {return e != null;});
      localStorage.setItem(project.name, JSON.stringify(project));
    }
  });
}

const validateChange = (project, title, description, date, priority, completion, cardIndex) => {
  if (title && description && date) {
    project.tasks[cardIndex] = {title:title, description:description, date:date, priority:priority, completion:completion};
    localStorage.setItem(project.name, JSON.stringify(project));
    taskbutton.setAttribute('data-dismiss', 'modal');
    taskbutton.classList.add('d-none');
    savebutton.classList.remove('d-none');
    document.querySelector(`[data-text="${project.name}"]`).click();
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
    const completione = project.tasks[cardIndex].completion;
    validateChange(project, titlee, descriptione, datee, prioritye, completione, cardIndex);
  });
}

const editTask = (project, myCard, cardIndex) => {
  myCard.querySelector('#edit').addEventListener('click', () => {
    selectContainer.classList.add('d-none');
    selectContainerLabel.classList.add('d-none');
    taskbutton.classList.remove('d-none');
    savebutton.classList.add('d-none');
    $('#exampleModal').modal('show')
    document.querySelector('#title-text').value = `${project.tasks[cardIndex].title}`;
    document.querySelector('#description-text').value = `${project.tasks[cardIndex].description}`;
    document.querySelector('#date-text').value = `${project.tasks[cardIndex].date}`;
    document.getElementById('priority-droplist').options[document.getElementById('priority-droplist').selectedIndex].text = `${project.tasks[cardIndex].priority}`
    changesListen(project, cardIndex);
  });
}

const eventCheckList = (checkList, card, project, index, task) => {
  checkList.addEventListener('change', () => {
    if (task.completion) {
      task.completion = false
      project.tasks[index].completion = false;
      localStorage.setItem(project.name, JSON.stringify(project))
      toggleCheckBox(checkList, card, task);
    } else {
      task.completion = true
      project.tasks[index].completion = true;
      localStorage.setItem(project.name, JSON.stringify(project))
      toggleCheckBox(checkList, card, task);
    }
  });
}

const innerCard = (nameOfProject) => {
  const taskX = JSON.parse(localStorage[nameOfProject]).tasks;
  const project = JSON.parse(localStorage[nameOfProject])
  for (let i = 0; i < taskX.length; i += 1) {
    if (taskX[i]) {
      const cardIndex = i;
      const myCard = document.createElement('div');
      myCard.className = 'card mt-2';
      myCard.setAttribute('data-index', `${cardIndex}`);
      myCard.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${taskX[i].title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${taskX[i].date}</h6>
          <p class="card-text">${taskX[i].description}</p>
          <p class="card-text text-uppercase">${taskX[i].priority} importance</p>
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
      toggleCheckBox(checkList, myCard, taskX[i]);
      eventCheckList(checkList, myCard, project, cardIndex, taskX[i]);
    }
  }
}

export {innerCard, myContainer, undoneContainer};