import { innerCard } from './cardsdisplay';
import { myContainer, undoneContainer } from './taskconstants';

const trigger = document.querySelector('#allTasksButton');
const displayAllTasks = () => {
  for (let i = 0; i < localStorage.length; i += 1) {
    if (/name/.test(localStorage[localStorage.key(i)])) {
      const project = JSON.parse(localStorage[localStorage.key(i)]);
      innerCard(project.name);
    }
  }
};

const displayTrigger = () => {
  trigger.addEventListener('click', () => {
    const now = new Date();
    const date = now.toLocaleDateString()
    document.querySelector('.jumbotron-title').textContent = 'Your tasks';
    document.querySelector('.jumbotron-desc').textContent = date + ". Not a good day to give up";
    myContainer.innerHTML = '';
    undoneContainer.innerHTML = '';
    displayAllTasks();
  })
};

export { displayTrigger };
