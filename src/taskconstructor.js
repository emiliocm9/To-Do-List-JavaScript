const myList = [];
const myContainer = document.querySelector('.todo-container');

class Task {
  constructor(title, description, date, priority, completion) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.completion = completion;
  }
}

Task.prototype.sayHi = function() {
  console.log('Hi my name is ' + this.title);
}

const listDisplay = (task) => {
  const listIndex = myLibrary.indexOf(task);

  const myCard = document.createElement('div');
  myCard.className = 'card mt-2';
  myCard.setAttribute('data-index', `${listIndex}`);
  myCard.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${task.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${task.date}</h6>
      <p class="card-text">${task.description}</p>
      <label for="completion">${task.completion}</label>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>`;

  myContainer.appendChild(myCard);
}


const addTaskToList = (title, description, date, priority, completion) => {
  const newTask = new Task(title, description, date, priority, completion);
  myList.push(newTask);
  listDisplay(newTask);
}

const uploadBook = () => {
  const savebutton = document.querySelector('#add-button');

  savebutton.addEventListener('click', () => {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description-text').value;
    const date = document.querySelector('#date-text').value;
    var e = document.getElementById("ddlViewBy");
    const priority = e.options[e.selectedIndex].text
    const completion = document.querySelector('#read').checked;

    addBookToList(title, description, date, priority, completion);
  });
}