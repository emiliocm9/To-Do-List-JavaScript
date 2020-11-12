!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=class{constructor(e,t){this.name=e,this.description=t,this.tasks=[]}addTasks(e){this.tasks.push(e)}};const s=document.querySelector("#add-button"),a=document.querySelector("#edit-task-button"),c=document.querySelector("#projects-droplist"),r=document.querySelector("#projects-droplist-label"),l=document.querySelector(".todo-container"),i=document.querySelector(".todo-container-no"),d=()=>{document.getElementById("task-add-button-a").addEventListener("click",()=>{document.getElementById("tasks-form").reset(),a.classList.contains("d-none")||a.classList.add("d-none"),s.classList.contains("d-none")&&s.classList.remove("d-none"),c.classList.remove("d-none")&&c.classList.contains("d-none"),r.classList.remove("d-none")&&r.classList.contains("d-none")})};var m=class{constructor(e,t,n,o,s){this.title=e,this.description=t,this.date=n,this.priority=o,this.completion=s}};const u=(e,t,n,o,s,a)=>{const c=new m(e,t,n,o,s),r=JSON.parse(localStorage.getItem(a));r.tasks.push(c),localStorage.setItem(a,JSON.stringify(r))},p=()=>{s.addEventListener("click",()=>{const e=document.querySelector("#title-text").value,t=document.querySelector("#description-text").value,n=document.querySelector("#date-text").value,o=document.getElementById("priority-droplist"),a=o.options[o.selectedIndex].text,c=document.getElementById("projects-droplist");((e,t,n,o,a,c)=>{if(e&&t&&n)u(e,t,n,o,a,c),s.setAttribute("data-dismiss","modal"),document.getElementById("tasks-form").reset(),document.querySelector(`[data-text="${c}"]`).click();else for(let e in document.getElementsByClassName("feedback-task"))if(document.getElementsByClassName("feedback-task")[e]){var r=document.getElementsByClassName("feedback-task")[e].className.replace("d-none","d-block");document.getElementsByClassName("feedback-task")[e].className=r}})(e,t,n,a,!1,c.options[c.selectedIndex].text)})},y=(e,t,n)=>{n.completion?(e.checked=!0,l.appendChild(t)):(e.checked=!1,i.appendChild(t))},f=(e,t,n)=>{t.querySelector("#delete").addEventListener("click",()=>{if(window.confirm("Are you sure you want to delete this task?")){if(i.querySelector(`[data-index="${n}"]`)){const e=i.querySelector(`[data-index="${n}"]`);i.removeChild(e)}else{const e=l.querySelector(`[data-index="${n}"]`);l.removeChild(e)}delete e.tasks[n],e.tasks=e.tasks.filter(e=>null!=e),localStorage.setItem(e.name,JSON.stringify(e))}})},k=(e,t)=>{a.addEventListener("click",()=>{const n=document.querySelector("#title-text").value,o=document.querySelector("#description-text").value,c=document.querySelector("#date-text").value,r=document.getElementById("priority-droplist"),l=r.options[r.selectedIndex].text,i=e.tasks[t].completion;((e,t,n,o,c,r,l)=>{t&&n&&o?(e.tasks[l]={title:t,description:n,date:o,priority:c,completion:r},localStorage.setItem(e.name,JSON.stringify(e)),a.setAttribute("data-dismiss","modal"),a.classList.add("d-none"),s.classList.remove("d-none"),document.querySelector(`[data-text="${e.name}"]`).click(),document.getElementById("tasks-form").reset()):document.getElementsByClassName("feedback-task").forEach(e=>{if(document.getElementsByClassName("feedback-task")[e]){const t=document.getElementsByClassName("feedback-task")[e].className.replace("d-none","d-block");document.getElementsByClassName("feedback-task")[e].className=t}})})(e,n,o,c,l,i,t)})},g=(e,t,n)=>{t.querySelector("#edit").addEventListener("click",()=>{c.classList.add("d-none"),r.classList.add("d-none"),a.classList.remove("d-none"),s.classList.add("d-none"),$("#exampleModal").modal("show"),document.querySelector("#title-text").value=""+e.tasks[n].title,document.querySelector("#description-text").value=""+e.tasks[n].description,document.querySelector("#date-text").value=""+e.tasks[n].date,document.getElementById("priority-droplist").options[document.getElementById("priority-droplist").selectedIndex].text=""+e.tasks[n].priority,k(e,n)})},S=(e,t,n,o,s)=>{e.addEventListener("change",()=>{s.completion?(s.completion=!1,n.tasks[o].completion=!1,localStorage.setItem(n.name,JSON.stringify(n)),y(e,t,s)):(s.completion=!0,n.tasks[o].completion=!0,localStorage.setItem(n.name,JSON.stringify(n)),y(e,t,s))})},v=[],b=document.querySelector(".projects-container"),h=(e,t)=>{document.querySelector(`[data-index="${e}"]`).addEventListener("click",()=>{document.querySelector(".jumbotron-title").textContent=""+t.name,document.querySelector(".jumbotron-desc").textContent=""+t.description,l.innerHTML="",i.innerHTML="",(e=>{const t=JSON.parse(localStorage[e]).tasks,n=JSON.parse(localStorage[e]);for(let e=0;e<t.length;e+=1)if(t[e]){const o=e,s=document.createElement("div");s.className="card mt-2",s.setAttribute("data-index",""+o),s.innerHTML=`\n        <div class="card-body">\n          <h5 class="card-title">${t[e].title}</h5>\n          <h6 class="card-subtitle mb-2 text-muted">${t[e].date}</h6>\n          <p class="card-text">${t[e].description}</p>\n          <p class="card-text text-uppercase">${t[e].priority} importance</p>\n          <div class="d-flex w-100 justify-content-between">\n            <div>\n              <input type="checkbox" class="read-check ml-2 mb-3"/>\n            </div>\n            <div>\n              <a href="#" id="delete" class="card-link text-danger text-uppercase">Delete</a>\n              <a href="#" id="edit" class="card-link font-title text-info text-uppercase">Edit</a>\n            </div>\n          </div>\n        </div>`;const a=s.querySelector(".read-check");g(n,s,o),f(n,s,o),y(a,s,t[e]),S(a,s,n,o,t[e])}})(t.name)})},x=(e,t)=>{const n=new o(e,t);var s;v.push(n),localStorage.setItem(e,JSON.stringify(n)),(e=>{const t=v.indexOf(e),n=localStorage.getItem(e.name),o=JSON.parse(n),s=document.createElement("div");s.setAttribute("data-index",""+t),s.innerHTML+=`<a href="#" data-text="${o.name}" class="title_menu title_bond">${o.name}</a>`,b.appendChild(s),h(t,e)})(n),s=n,c.innerHTML+=`<option class="text-dropdown">${s.name}</option>`};$(()=>{$(".menutoggle").on("click",()=>{$(".menumobile").toggleClass("menuoff"),$(".menutoggle").toggleClass("buttonmove")})}),(()=>{const e=document.querySelector("#add-project-button");e.addEventListener("click",()=>{const t=document.querySelector("#project-name-text").value,n=document.querySelector("#project-description-text").value;if(t&&n)x(t,n),e.setAttribute("data-dismiss","modal"),document.getElementById("projects-form").reset();else for(let e in document.getElementsByClassName("feedback"))if(document.getElementsByClassName("feedback")[e]){var o=document.getElementsByClassName("feedback")[e].className.replace("d-none","d-block");document.getElementsByClassName("feedback")[e].className=o}})})(),(()=>{if(0==localStorage.length)[new o("Closure of Plant","Nationwide rail company KiwiRail chose to close an industrial plant that manufactured rolling stock and replacement parts."),new o("Kitchen Makeover","Renovating the kitchen."),new o("New Car Design","Designing a new transportation vehicle.")].forEach(e=>{x(e.name,e.description)}),u("Shop-Homework","Biology homework for miss Lily","2018-05-31","Low",!1,"Kitchen Makeover"),u("Car-Homework","Caramel homework for miss Lily","2018-05-31","High",!1,"Kitchen Makeover");else for(let e in localStorage)if(/name/.test(localStorage[e])){const t=JSON.parse(localStorage[e]);x(t.name,t.description);for(let e in t.tasks)u(t.tasks[e].title,t.tasks[e].description,t.tasks[e].date,t.tasks[e].priority,t.tasks[e].completion,t.name)}p(),d()})(),d(),window.onload=()=>{document.querySelector('[data-index="1"]').click()}}]);