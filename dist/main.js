/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/allTasks.js":
/*!*************************!*\
  !*** ./src/allTasks.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cardsdisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardsdisplay */ \"./src/cardsdisplay.js\");\n/* harmony import */ var _taskconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskconstants */ \"./src/taskconstants.js\");\n\r\n\r\n\r\nconst trigger = document.querySelector('#allTasksButton');\r\nconst displayAllTasks = () => {\r\n  for (let i = 0; i < localStorage.length; i += 1) {\r\n    if (/name/.test(localStorage[localStorage.key(i)])) {\r\n      const project = JSON.parse(localStorage[localStorage.key(i)]);\r\n      Object(_cardsdisplay__WEBPACK_IMPORTED_MODULE_0__[\"innerCard\"])(project.name);\r\n    }\r\n  }\r\n};\r\n\r\nconst displayTrigger = () => {\r\n  trigger.addEventListener('click', () => {\r\n    const now = new Date();\r\n    const date = now.toLocaleDateString();\r\n    document.querySelector('.jumbotron-title').textContent = 'Your tasks';\r\n    document.querySelector('.jumbotron-desc').textContent = `${date} . Not a good day to give up`;\r\n    _taskconstants__WEBPACK_IMPORTED_MODULE_1__[\"myContainer\"].innerHTML = '';\r\n    _taskconstants__WEBPACK_IMPORTED_MODULE_1__[\"undoneContainer\"].innerHTML = '';\r\n    displayAllTasks();\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (displayTrigger);\r\n\n\n//# sourceURL=webpack:///./src/allTasks.js?");

/***/ }),

/***/ "./src/cardsdisplay.js":
/*!*****************************!*\
  !*** ./src/cardsdisplay.js ***!
  \*****************************/
/*! exports provided: innerCard, myContainer, undoneContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"innerCard\", function() { return innerCard; });\n/* harmony import */ var _taskconstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskconstants */ \"./src/taskconstants.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"myContainer\", function() { return _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"myContainer\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"undoneContainer\", function() { return _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"undoneContainer\"]; });\n\n/* harmony import */ var _openModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openModal */ \"./src/openModal.js\");\n\r\n\r\n\r\nconst toggleCheckBox = (checkList, card, task) => {\r\n  if (task.completion) {\r\n    checkList.checked = true;\r\n    _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"myContainer\"].appendChild(card);\r\n  } else {\r\n    checkList.checked = false;\r\n    _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"undoneContainer\"].appendChild(card);\r\n  }\r\n};\r\n\r\nconst deleteTask = (project, myCard, cardIndex) => {\r\n  myCard.querySelector('#delete').addEventListener('click', () => {\r\n    Object(_openModal__WEBPACK_IMPORTED_MODULE_1__[\"customConfirm\"])('Are you sure you want to delete this task?');\r\n    document.getElementById('DeleteButton').addEventListener('click', () => {\r\n      if (_taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"undoneContainer\"].querySelector(`[data-index=\"${cardIndex}\"]`)) {\r\n        const element = _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"undoneContainer\"].querySelector(`[data-index=\"${cardIndex}\"]`);\r\n        _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"undoneContainer\"].removeChild(element);\r\n      } else {\r\n        const element = _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"myContainer\"].querySelector(`[data-index=\"${cardIndex}\"]`);\r\n        _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"myContainer\"].removeChild(element);\r\n      }\r\n      delete project.tasks[cardIndex];\r\n      project.tasks = project.tasks.filter((e) => (e != null));\r\n      localStorage.setItem(project.name, JSON.stringify(project));\r\n    });\r\n  });\r\n};\r\n\r\nconst validateChange = (project, title, description, date, priority, completion, cardIndex) => {\r\n  if (title && description && date) {\r\n    project.tasks[cardIndex] = {\r\n      title,\r\n      description,\r\n      date,\r\n      priority,\r\n      completion,\r\n    };\r\n    localStorage.setItem(project.name, JSON.stringify(project));\r\n    _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"taskbutton\"].setAttribute('data-dismiss', 'modal');\r\n    _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"taskbutton\"].classList.add('d-none');\r\n    _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"savebutton\"].classList.remove('d-none');\r\n    document.querySelector(`[data-text=\"${project.name}\"]`).click();\r\n    document.getElementById('tasks-form').reset();\r\n  } else {\r\n    for (let i = 0; i < document.getElementsByClassName('feedback-task').length; i += 1) {\r\n      if (document.getElementsByClassName('feedback-task')[i]) {\r\n        const showFeedback = document.getElementsByClassName('feedback-task')[i].className.replace('d-none', 'd-block');\r\n        document.getElementsByClassName('feedback-task')[i].className = showFeedback;\r\n      }\r\n    }\r\n  }\r\n};\r\n\r\nconst changesListen = (project, cardIndex) => {\r\n  _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"taskbutton\"].addEventListener('click', () => {\r\n    const titlee = document.querySelector('#title-text').value;\r\n    const descriptione = document.querySelector('#description-text').value;\r\n    const datee = document.querySelector('#date-text').value;\r\n    const x = document.getElementById('priority-droplist');\r\n    const prioritye = x.options[x.selectedIndex].text;\r\n    const completione = project.tasks[cardIndex].completion;\r\n    validateChange(project, titlee, descriptione, datee, prioritye, completione, cardIndex);\r\n  });\r\n};\r\n\r\nconst editTask = (project, myCard, cardIndex) => {\r\n  myCard.querySelector('#edit').addEventListener('click', () => {\r\n    _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"selectContainer\"].classList.add('d-none');\r\n    _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"selectContainerLabel\"].classList.add('d-none');\r\n    _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"taskbutton\"].classList.remove('d-none');\r\n    _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"savebutton\"].classList.add('d-none');\r\n    Object(_openModal__WEBPACK_IMPORTED_MODULE_1__[\"openModal\"])();\r\n    document.querySelector('#title-text').value = `${project.tasks[cardIndex].title}`;\r\n    document.querySelector('#description-text').value = `${project.tasks[cardIndex].description}`;\r\n    document.querySelector('#date-text').value = `${project.tasks[cardIndex].date}`;\r\n    document.getElementById('priority-droplist').options[document.getElementById('priority-droplist').selectedIndex].text = `${project.tasks[cardIndex].priority}`;\r\n    changesListen(project, cardIndex);\r\n  });\r\n};\r\n\r\nconst eventCheckList = (checkList, card, project, index, task) => {\r\n  checkList.addEventListener('change', () => {\r\n    if (task.completion) {\r\n      task.completion = false;\r\n      project.tasks[index].completion = false;\r\n      localStorage.setItem(project.name, JSON.stringify(project));\r\n      toggleCheckBox(checkList, card, task);\r\n    } else {\r\n      task.completion = true;\r\n      project.tasks[index].completion = true;\r\n      localStorage.setItem(project.name, JSON.stringify(project));\r\n      toggleCheckBox(checkList, card, task);\r\n    }\r\n  });\r\n};\r\n\r\nconst innerCard = (nameOfProject) => {\r\n  const taskX = JSON.parse(localStorage[nameOfProject]).tasks;\r\n  const project = JSON.parse(localStorage[nameOfProject]);\r\n  for (let i = 0; i < taskX.length; i += 1) {\r\n    if (taskX[i]) {\r\n      const cardIndex = i;\r\n      const myCard = document.createElement('div');\r\n      myCard.className = 'card mt-2';\r\n      myCard.setAttribute('data-index', `${cardIndex}`);\r\n      myCard.innerHTML = `\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">${taskX[i].title}</h5>\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">${taskX[i].date}</h6>\r\n          <p class=\"card-text\">${taskX[i].description}</p>\r\n          <p class=\"card-text text-uppercase\">${taskX[i].priority} importance</p>\r\n          <div class=\"d-flex w-100 justify-content-between\">\r\n            <div>\r\n              <input type=\"checkbox\" class=\"read-check ml-2 mb-3\"/>\r\n            </div>\r\n            <div>\r\n              <a href=\"#\" id=\"delete\" class=\"card-link text-danger text-uppercase\">Delete</a>\r\n              <a href=\"#\" id=\"edit\" class=\"card-link font-title text-info text-uppercase\">Edit</a>\r\n            </div>\r\n          </div>\r\n        </div>`;\r\n\r\n      const checkList = myCard.querySelector('.read-check');\r\n\r\n      editTask(project, myCard, cardIndex);\r\n      deleteTask(project, myCard, cardIndex);\r\n      toggleCheckBox(checkList, myCard, taskX[i]);\r\n      eventCheckList(checkList, myCard, project, cardIndex, taskX[i]);\r\n    }\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/cardsdisplay.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectmodules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectmodules */ \"./src/projectmodules.js\");\n/* harmony import */ var _projectcreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectcreate */ \"./src/projectcreate.js\");\n/* harmony import */ var _projectselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectselect */ \"./src/projectselect.js\");\n/* harmony import */ var _allTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allTasks */ \"./src/allTasks.js\");\n\r\n\r\n\r\n\r\n\r\ndocument.querySelector('.menutoggle').addEventListener('click', () => {\r\n  'menuoff,menuhide'.split(',').forEach((str) => {\r\n    document.querySelector('.menumobile').classList.toggle(str);\r\n  });\r\n  'buttonmove,buttonhide'.split(',').forEach((str) => {\r\n    document.querySelector('.menutoggle').classList.toggle(str);\r\n  });\r\n});\r\n\r\nObject(_projectcreate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nObject(_projectmodules__WEBPACK_IMPORTED_MODULE_0__[\"initFun\"])();\r\nObject(_allTasks__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\nObject(_projectselect__WEBPACK_IMPORTED_MODULE_2__[\"hideEditTask\"])();\r\n\r\nwindow.onload = () => {\r\n  document.querySelector('#allTasksButton').click();\r\n};\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/openModal.js":
/*!**************************!*\
  !*** ./src/openModal.js ***!
  \**************************/
/*! exports provided: openModal, customConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openModal\", function() { return openModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customConfirm\", function() { return customConfirm; });\nconst openModal = () => {\r\n  document.getElementById('backdrop').style.display = 'block';\r\n  document.getElementById('exampleModal').style.display = 'block';\r\n  document.getElementById('exampleModal').className += 'show';\r\n};\r\n\r\nconst openDeleteModal = () => {\r\n  document.getElementById('backdrop').style.display = 'block';\r\n  document.getElementById('exampleModalDelete').style.display = 'block';\r\n  document.getElementById('exampleModalDelete').className += 'show';\r\n};\r\n\r\nconst customConfirm = (text) => {\r\n  openDeleteModal();\r\n  document.getElementById('modal-body-delete').textContent = text;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/openModal.js?");

/***/ }),

/***/ "./src/projectconstructor.js":
/*!***********************************!*\
  !*** ./src/projectconstructor.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Project {\r\n  constructor(name, description) {\r\n    this.name = name;\r\n    this.description = description;\r\n    this.tasks = [];\r\n  }\r\n\r\n  addTasks(task) {\r\n    this.tasks.push(task);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack:///./src/projectconstructor.js?");

/***/ }),

/***/ "./src/projectcreate.js":
/*!******************************!*\
  !*** ./src/projectcreate.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectmodules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectmodules */ \"./src/projectmodules.js\");\n\r\n\r\nconst uploadProject = () => {\r\n  const saveProject = document.querySelector('#add-project-button');\r\n\r\n  saveProject.addEventListener('click', () => {\r\n    const name = document.querySelector('#project-name-text').value;\r\n    const description = document.querySelector('#project-description-text').value;\r\n    if (name && description) {\r\n      Object(_projectmodules__WEBPACK_IMPORTED_MODULE_0__[\"addProjectToList\"])(name, description);\r\n      saveProject.setAttribute('data-dismiss', 'modal');\r\n      document.getElementById('projects-form').reset();\r\n    } else {\r\n      for (let i = 0; i < document.getElementsByClassName('feedback').length; i += 1) {\r\n        if (document.getElementsByClassName('feedback')[i]) {\r\n          const showFeedback = document.getElementsByClassName('feedback')[i].className.replace('d-none', 'd-block');\r\n          document.getElementsByClassName('feedback')[i].className = showFeedback;\r\n        }\r\n      }\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (uploadProject);\n\n//# sourceURL=webpack:///./src/projectcreate.js?");

/***/ }),

/***/ "./src/projectmodules.js":
/*!*******************************!*\
  !*** ./src/projectmodules.js ***!
  \*******************************/
/*! exports provided: myProjects, displayProjects, addProjectToList, initFun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myProjects\", function() { return myProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayProjects\", function() { return displayProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProjectToList\", function() { return addProjectToList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initFun\", function() { return initFun; });\n/* harmony import */ var _projectconstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectconstructor */ \"./src/projectconstructor.js\");\n/* harmony import */ var _projectselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectselect */ \"./src/projectselect.js\");\n/* harmony import */ var _taskconstructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskconstructor */ \"./src/taskconstructor.js\");\n/* harmony import */ var _cardsdisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardsdisplay */ \"./src/cardsdisplay.js\");\n\r\n\r\n\r\n\r\n\r\nconst myProjects = [];\r\nconst procontainer = document.querySelector('.projects-container');\r\n\r\nconst displayTasksOf = (listIndex, project) => {\r\n  const element = document.querySelector(`[data-index=\"${listIndex}\"]`);\r\n  element.addEventListener('click', () => {\r\n    document.querySelector('.jumbotron-title').textContent = `${project.name}`;\r\n    document.querySelector('.jumbotron-desc').textContent = `${project.description}`;\r\n    _cardsdisplay__WEBPACK_IMPORTED_MODULE_3__[\"myContainer\"].innerHTML = '';\r\n    _cardsdisplay__WEBPACK_IMPORTED_MODULE_3__[\"undoneContainer\"].innerHTML = '';\r\n    Object(_cardsdisplay__WEBPACK_IMPORTED_MODULE_3__[\"innerCard\"])(project.name);\r\n  });\r\n};\r\n\r\nconst displayProjects = (project) => {\r\n  const listIndex = myProjects.indexOf(project);\r\n  const listade = localStorage.getItem(project.name);\r\n  const dataOfProject = JSON.parse(listade);\r\n  const cont = document.createElement('div');\r\n  cont.setAttribute('data-index', `${listIndex}`);\r\n  cont.innerHTML += `<a href=\"#\" data-text=\"${dataOfProject.name}\" class=\"title_menu title_bond\">${dataOfProject.name}</a>`;\r\n\r\n  procontainer.appendChild(cont);\r\n  displayTasksOf(listIndex, project);\r\n};\r\n\r\nconst addProjectToList = (name, description) => {\r\n  const newProject = new _projectconstructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, description);\r\n  myProjects.push(newProject);\r\n  localStorage.setItem(name, JSON.stringify(newProject));\r\n  displayProjects(newProject);\r\n  Object(_projectselect__WEBPACK_IMPORTED_MODULE_1__[\"dropProject\"])(newProject);\r\n};\r\n\r\nconst initAppendLocalStorage = () => {\r\n  const one = new _projectconstructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Closure of Plant', 'Nationwide rail company KiwiRail chose to close an industrial plant that manufactured rolling stock and replacement parts.');\r\n  const two = new _projectconstructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Kitchen Makeover', 'Renovating the kitchen.');\r\n  const three = new _projectconstructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('New Car Design', 'Designing a new transportation vehicle.');\r\n  const arr = [one, two, three];\r\n  arr.forEach(element => {\r\n    addProjectToList(element.name, element.description);\r\n  });\r\n};\r\n\r\nconst initFun = () => {\r\n  if (localStorage.length === 0) {\r\n    initAppendLocalStorage();\r\n    Object(_taskconstructor__WEBPACK_IMPORTED_MODULE_2__[\"addTaskToList\"])('Shop-Homework', 'Biology homework for miss Lily', '2018-05-31', 'Low', false, 'Kitchen Makeover');\r\n    Object(_taskconstructor__WEBPACK_IMPORTED_MODULE_2__[\"addTaskToList\"])('Car-Homework', 'Caramel homework for miss Lily', '2018-05-31', 'High', false, 'Kitchen Makeover');\r\n  } else {\r\n    for (let i = 0; i < localStorage.length; i += 1) {\r\n      if (/name/.test(localStorage[localStorage.key(i)])) {\r\n        const content = JSON.parse(localStorage[localStorage.key(i)]);\r\n        addProjectToList(content.name, content.description);\r\n        if (content.tasks.length > 0) {\r\n          for (let num = 0; num < content.tasks.length; num += 1) {\r\n            const task = content.tasks[num];\r\n            const par = content.name;\r\n            const { title } = task;\r\n            Object(_taskconstructor__WEBPACK_IMPORTED_MODULE_2__[\"addTaskToList\"])(title, task.description, task.date, task.priority, task.completion, par);\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  Object(_taskconstructor__WEBPACK_IMPORTED_MODULE_2__[\"uploadTask\"])();\r\n  Object(_projectselect__WEBPACK_IMPORTED_MODULE_1__[\"hideEditTask\"])();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/projectmodules.js?");

/***/ }),

/***/ "./src/projectselect.js":
/*!******************************!*\
  !*** ./src/projectselect.js ***!
  \******************************/
/*! exports provided: dropProject, hideEditTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dropProject\", function() { return dropProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideEditTask\", function() { return hideEditTask; });\n/* harmony import */ var _taskconstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskconstants */ \"./src/taskconstants.js\");\n\r\n\r\nconst dropProject = (project) => {\r\n  _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"selectContainer\"].innerHTML += `<option class=\"text-dropdown\">${project.name}</option>`;\r\n};\r\n\r\nconst hideEditTask = () => {\r\n  const newTask = document.getElementById('task-add-button-a');\r\n  newTask.addEventListener('click', () => {\r\n    document.getElementById('tasks-form').reset();\r\n    if (!_taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"taskbutton\"].classList.contains('d-none')) {\r\n      _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"taskbutton\"].classList.add('d-none');\r\n    }\r\n    if (_taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"savebutton\"].classList.contains('d-none')) {\r\n      _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"savebutton\"].classList.remove('d-none');\r\n    }\r\n    if (_taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"selectContainer\"].classList.contains('d-none')) {\r\n      _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"selectContainer\"].classList.remove('d-none');\r\n    }\r\n    if (_taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"selectContainerLabel\"].classList.contains('d-none')) {\r\n      _taskconstants__WEBPACK_IMPORTED_MODULE_0__[\"selectContainerLabel\"].classList.remove('d-none');\r\n    }\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/projectselect.js?");

/***/ }),

/***/ "./src/taskconstants.js":
/*!******************************!*\
  !*** ./src/taskconstants.js ***!
  \******************************/
/*! exports provided: savebutton, taskbutton, selectContainer, selectContainerLabel, myContainer, undoneContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"savebutton\", function() { return savebutton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskbutton\", function() { return taskbutton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectContainer\", function() { return selectContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectContainerLabel\", function() { return selectContainerLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myContainer\", function() { return myContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"undoneContainer\", function() { return undoneContainer; });\nconst savebutton = document.querySelector('#add-button');\r\nconst taskbutton = document.querySelector('#edit-task-button');\r\nconst selectContainer = document.querySelector('#projects-droplist');\r\nconst selectContainerLabel = document.querySelector('#projects-droplist-label');\r\nconst myContainer = document.querySelector('.todo-container');\r\nconst undoneContainer = document.querySelector('.todo-container-no');\r\n\n\n//# sourceURL=webpack:///./src/taskconstants.js?");

/***/ }),

/***/ "./src/taskconstructor.js":
/*!********************************!*\
  !*** ./src/taskconstructor.js ***!
  \********************************/
/*! exports provided: uploadTask, addTaskToList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadTask\", function() { return uploadTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTaskToList\", function() { return addTaskToList; });\n/* harmony import */ var _taskmodule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskmodule */ \"./src/taskmodule.js\");\n/* harmony import */ var _taskconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskconstants */ \"./src/taskconstants.js\");\n\r\n\r\n\r\nconst addTaskToList = (title, description, date, priority, completion, parent) => {\r\n  const newTask = new _taskmodule__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, date, priority, completion);\r\n  const node = JSON.parse(localStorage.getItem(parent));\r\n  node.tasks.push(newTask);\r\n  localStorage.setItem(parent, JSON.stringify(node));\r\n};\r\n\r\nconst validateTask = (title, description, date, priority, completion, parent) => {\r\n  if (title && description && date) {\r\n    addTaskToList(title, description, date, priority, completion, parent);\r\n    _taskconstants__WEBPACK_IMPORTED_MODULE_1__[\"savebutton\"].setAttribute('data-dismiss', 'modal');\r\n    document.getElementById('tasks-form').reset();\r\n    document.querySelector(`[data-text=\"${parent}\"]`).click();\r\n  } else {\r\n    for (let item = 0; item < document.getElementsByClassName('feedback-task').length; item += 1) {\r\n      if (document.getElementsByClassName('feedback-task')[item]) {\r\n        const showFeedback = document.getElementsByClassName('feedback-task')[item].className.replace('d-none', 'd-block');\r\n        document.getElementsByClassName('feedback-task')[item].className = showFeedback;\r\n      }\r\n    }\r\n  }\r\n};\r\n\r\nconst uploadTask = () => {\r\n  _taskconstants__WEBPACK_IMPORTED_MODULE_1__[\"savebutton\"].addEventListener('click', () => {\r\n    const title = document.querySelector('#title-text').value;\r\n    const description = document.querySelector('#description-text').value;\r\n    const date = document.querySelector('#date-text').value;\r\n    const x = document.getElementById('priority-droplist');\r\n    const priority = x.options[x.selectedIndex].text;\r\n    const completion = false;\r\n    const y = document.getElementById('projects-droplist');\r\n    const parent = y.options[y.selectedIndex].text;\r\n    validateTask(title, description, date, priority, completion, parent);\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/taskconstructor.js?");

/***/ }),

/***/ "./src/taskmodule.js":
/*!***************************!*\
  !*** ./src/taskmodule.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Task {\r\n  constructor(title, description, date, priority, completion) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.date = date;\r\n    this.priority = priority;\r\n    this.completion = completion;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task);\r\n\n\n//# sourceURL=webpack:///./src/taskmodule.js?");

/***/ })

/******/ });