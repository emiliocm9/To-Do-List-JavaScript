$(document).ready(function(){
  $('.menutoggle').click (function() {
    $('.menumobile').toggleClass("menuoff");
    $('.menutoggle').toggleClass("buttonmove");
  });
});

import {myProjects, initFun} from './projectmodules';
import {uploadProject} from './projectcreate';

uploadProject();
initFun(myProjects);

window.onload = () => {
  document.querySelector(`[data-index="0"]`).click();
};
