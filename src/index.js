/* eslint-env jquery */
import { initFun } from './projectmodules';
import { uploadProject } from './projectcreate';
import { hideEditTask } from './projectselect';

$(() => {
  $('.menutoggle').on('click', () => {
    $('.menumobile').toggleClass('menuoff');
    $('.menutoggle').toggleClass('buttonmove');
  });
});

uploadProject();
initFun();
hideEditTask();

window.onload = () => {
  document.querySelector('[data-index="1"]').click();
};
