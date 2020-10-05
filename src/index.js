$(document).ready(function(){
  $('.menutoggle').click (function() {
    $('.menumobile').toggleClass("menuoff");
    $('.menutoggle').toggleClass("buttonmove");
  });
});

import {myProjects, initFun} from './projectmodules';
import {uploadProject} from './projectcreate';
import {hideEditTask} from './projectselect';

uploadProject();
initFun(myProjects);
hideEditTask();

window.onload = () => {
  document.querySelector(`[data-index="0"]`).click();
};
