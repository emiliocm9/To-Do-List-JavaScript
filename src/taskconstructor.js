const myList = [];
const myContainer = document.querySelector('.todo-container');
const undoneContainer = document.querySelector('.todo-container-no');

class Task {
  constructor(title, description, date, priority, completion) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.completion = completion;
  }
}

const deleteTask = (myCard, listIndex) => {
  myCard.querySelector('#delete').addEventListener('click', () => {
    const element = document.querySelector(`[data-index="${listIndex}"]`);
    myContainer.removeChild(element);
    delete myList(listIndex);
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


const toggleCheckBox = (checkList, card, task) => {
  if (task.completion) {
    checkList.checked = true;
    checkCompletion = (task, card);
    myContainer.appendChild(card);
  } else {
    checkList.checked = false;
    checkCompletion = (task, card);
    undoneContainer.appendChild(card);
  }
}

const listDisplay = (task) => {
  const listIndex = myList.indexOf(task);

  const myCard = document.createElement('div');
  myCard.className = 'card mt-2';
  myCard.setAttribute('data-index', `${listIndex}`);
  myCard.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${task.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${task.date}</h6>
      <p class="card-text">${task.description}</p>
      <p class="card-text text-uppercase">${task.priority} importance</p>
      <div class="d-flex w-100 justify-content-between">
        <input type="checkbox" class="read-check ml-2 mb-3"/>
        <a href="#" id="delete" class="card-link text-danger text-uppercase">Delete</a>
      </div>
    </div>`;

  const checkList = myCard.querySelector('.read-check');

  deleteTask(myCard, listIndex);
  toggleCheckBox(checkList, myCard, task);
  eventCheckList(checkList, myCard, task);
}

const addTaskToList = (title, description, date, priority, completion) => {
  const newTask = new Task(title, description, date, priority, completion);
  myList.push(newTask);
  listDisplay(newTask);
  console.log(myList);
}

const uploadTask = () => {
  const savebutton = document.querySelector('#add-button');

  savebutton.addEventListener('click', () => {
    const title = document.querySelector('#title-text').value;
    const description = document.querySelector('#description-text').value;
    const date = document.querySelector('#date-text').value;
    const e = document.getElementById("priority-droplist");
    const priority = e.options[e.selectedIndex].text;
    const completion = false;

    addTaskToList(title, description, date, priority, completion);
  });
}

uploadTask();
addTaskToList('Homework', 'Biology homework for miss Lily', '2018-05-31', 'High', true);
addTaskToList('Homework', 'Biology homework for miss Lily', '2018-05-31', 'High', true);
