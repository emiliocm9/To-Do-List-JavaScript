const myList = [];

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

const addTaskToList = (title, description, date, priority, completion) => {
  const newTask = new Task(title, description, date, priority, completion);
  myList.push(newTask);
  bookDisplay(newTask);
}

const uploadBook = () => {
  const savebutton = document.querySelector('#add-button');

  savebutton.addEventListener('click', () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const year = document.querySelector('#year').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').checked;

    addBookToLibrary(title, author, year, pages, read);
  });
}


const createTask = () {
  const title = document.querySelector('#title-text').value
  const title = document.querySelector('#description-text').value
  const title = document.querySelector('#date-text').value
  const title = document.querySelector('#-text').value
  const title = document.querySelector('#title-text').value
}

const Homework = new Task('Homework', 'Maths homework', '2018-07-22', 'important', false);
console.log(Homework.sayHi());
