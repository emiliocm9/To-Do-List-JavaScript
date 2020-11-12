import { initFun } from './projectmodules';
import uploadProject from './projectcreate';
import { hideEditTask } from './projectselect';

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
hideEditTask();

window.onload = () => {
  document.querySelector('[data-index="1"]').click();
};
