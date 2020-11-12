import { initFun } from './projectmodules';
import uploadProject from './projectcreate';
import { hideEditTask } from './projectselect';
import { displayTrigger } from './allTasks';

document.querySelector('.menutoggle').addEventListener('click', () => {
  'menuoff,menuhide'.split(',').forEach((str) => {
    document.querySelector('.menumobile').classList.toggle(str);
  });
  'buttonmove,buttonhide'.split(',').forEach((str) => {
    document.querySelector('.menutoggle').classList.toggle(str);
  });
});

uploadProject();
initFun();
displayTrigger();
hideEditTask();

window.onload = () => {
  document.querySelector('[data-index="1"]').click();
};
