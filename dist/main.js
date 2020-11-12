!function(e){var t={};function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=class{constructor(e,t){this.name=e,this.description=t,this.tasks=[]}addTasks(e){this.tasks.push(e)}};const a=document.querySelector("#add-button"),s=document.querySelector("#edit-task-button"),l=document.querySelector("#projects-droplist"),c=document.querySelector("#projects-droplist-label"),r=document.querySelector(".todo-container"),d=document.querySelector(".todo-container-no"),i=()=>{document.getElementById("task-add-button-a").addEventListener("click",()=>{document.getElementById("tasks-form").reset(),s.classList.contains("d-none")||s.classList.add("d-none"),a.classList.contains("d-none")&&a.classList.remove("d-none"),l.classList.contains("d-none")&&l.classList.remove("d-none"),c.classList.contains("d-none")&&c.classList.remove("d-none")})};var m=class{constructor(e,t,o,n,a){this.title=e,this.description=t,this.date=o,this.priority=n,this.completion=a}};const u=(e,t,o,n,a,s)=>{const l=new m(e,t,o,n,a),c=JSON.parse(localStorage.getItem(s));c.tasks.push(l),localStorage.setItem(s,JSON.stringify(c))},p=()=>{a.addEventListener("click",()=>{const e=document.querySelector("#title-text").value,t=document.querySelector("#description-text").value,o=document.querySelector("#date-text").value,n=document.getElementById("priority-droplist"),s=n.options[n.selectedIndex].text,l=document.getElementById("projects-droplist");((e,t,o,n,s,l)=>{if(e&&t&&o)u(e,t,o,n,s,l),a.setAttribute("data-dismiss","modal"),document.getElementById("tasks-form").reset(),document.querySelector(`[data-text="${l}"]`).click();else for(let e=0;e<document.getElementsByClassName("feedback-task").length;e+=1)if(document.getElementsByClassName("feedback-task")[e]){const t=document.getElementsByClassName("feedback-task")[e].className.replace("d-none","d-block");document.getElementsByClassName("feedback-task")[e].className=t}})(e,t,o,s,!1,l.options[l.selectedIndex].text)})},y=e=>{document.getElementById("backdrop").style.display="block",document.getElementById("exampleModalDelete").style.display="block",document.getElementById("exampleModalDelete").className+="show",document.getElementById("modal-body-delete").textContent=e},g=(e,t,o)=>{o.completion?(e.checked=!0,r.appendChild(t)):(e.checked=!1,d.appendChild(t))},k=(e,t,o)=>{t.querySelector("#delete").addEventListener("click",()=>{y("Are you sure you want to delete this task?"),document.getElementById("DeleteButton").addEventListener("click",()=>{if(d.querySelector(`[data-index="${o}"]`)){const e=d.querySelector(`[data-index="${o}"]`);d.removeChild(e)}else{const e=r.querySelector(`[data-index="${o}"]`);r.removeChild(e)}delete e.tasks[o],e.tasks=e.tasks.filter(e=>null!=e),localStorage.setItem(e.name,JSON.stringify(e))})})},f=(e,t)=>{s.addEventListener("click",()=>{const o=document.querySelector("#title-text").value,n=document.querySelector("#description-text").value,l=document.querySelector("#date-text").value,c=document.getElementById("priority-droplist"),r=c.options[c.selectedIndex].text,d=e.tasks[t].completion;((e,t,o,n,l,c,r)=>{if(t&&o&&n)e.tasks[r]={title:t,description:o,date:n,priority:l,completion:c},localStorage.setItem(e.name,JSON.stringify(e)),s.setAttribute("data-dismiss","modal"),s.classList.add("d-none"),a.classList.remove("d-none"),document.querySelector(`[data-text="${e.name}"]`).click(),document.getElementById("tasks-form").reset();else for(let e=0;e<document.getElementsByClassName("feedback-task").length;e+=1)if(document.getElementsByClassName("feedback-task")[e]){const t=document.getElementsByClassName("feedback-task")[e].className.replace("d-none","d-block");document.getElementsByClassName("feedback-task")[e].className=t}})(e,o,n,l,r,d,t)})},S=(e,t,o)=>{t.querySelector("#edit").addEventListener("click",()=>{l.classList.add("d-none"),c.classList.add("d-none"),s.classList.remove("d-none"),a.classList.add("d-none"),document.getElementById("backdrop").style.display="block",document.getElementById("exampleModal").style.display="block",document.getElementById("exampleModal").className+="show",document.querySelector("#title-text").value=""+e.tasks[o].title,document.querySelector("#description-text").value=""+e.tasks[o].description,document.querySelector("#date-text").value=""+e.tasks[o].date,document.getElementById("priority-droplist").options[document.getElementById("priority-droplist").selectedIndex].text=""+e.tasks[o].priority,f(e,o)})},h=(e,t,o,n,a)=>{e.addEventListener("change",()=>{a.completion?(a.completion=!1,o.tasks[n].completion=!1,localStorage.setItem(o.name,JSON.stringify(o)),g(e,t,a)):(a.completion=!0,o.tasks[n].completion=!0,localStorage.setItem(o.name,JSON.stringify(o)),g(e,t,a))})},b=e=>{const t=JSON.parse(localStorage[e]).tasks,o=JSON.parse(localStorage[e]);for(let e=0;e<t.length;e+=1)if(t[e]){const n=e,a=document.createElement("div");a.className="card mt-2",a.setAttribute("data-index",""+n),a.innerHTML=`\n        <div class="card-body">\n          <h5 class="card-title">${t[e].title}</h5>\n          <h6 class="card-subtitle mb-2 text-muted">${t[e].date}</h6>\n          <p class="card-text">${t[e].description}</p>\n          <p class="card-text text-uppercase">${t[e].priority} importance</p>\n          <div class="d-flex w-100 justify-content-between">\n            <div>\n              <input type="checkbox" class="read-check ml-2 mb-3"/>\n            </div>\n            <div>\n              <a href="#" id="delete" class="card-link text-danger text-uppercase">Delete</a>\n              <a href="#" id="edit" class="card-link font-title text-info text-uppercase">Edit</a>\n            </div>\n          </div>\n        </div>`;const s=a.querySelector(".read-check");S(o,a,n),k(o,a,n),g(s,a,t[e]),h(s,a,o,n,t[e])}},v=[],x=document.querySelector(".projects-container"),E=e=>{const t=v.indexOf(e),o=localStorage.getItem(e.name),n=JSON.parse(o),a=document.createElement("div");a.setAttribute("data-index",""+t),a.innerHTML+=`<a href="#" data-text="${n.name}" class="title_menu title_bond">${n.name}</a>`,x.appendChild(a),((e,t)=>{document.querySelector(`[data-index="${e}"]`).addEventListener("click",()=>{document.querySelector(".jumbotron-title").textContent=""+t.name,document.querySelector(".jumbotron-desc").textContent=""+t.description,r.innerHTML="",d.innerHTML="",b(t.name)})})(t,e)},L=(e,t)=>{const o=new n(e,t);var a;v.push(o),localStorage.setItem(e,JSON.stringify(o)),E(o),a=o,l.innerHTML+=`<option class="text-dropdown">${a.name}</option>`};var q=()=>{const e=document.querySelector("#add-project-button");e.addEventListener("click",()=>{const t=document.querySelector("#project-name-text").value,o=document.querySelector("#project-description-text").value;if(t&&o)L(t,o),e.setAttribute("data-dismiss","modal"),document.getElementById("projects-form").reset();else for(let e=0;e<document.getElementsByClassName("feedback").length;e+=1)if(document.getElementsByClassName("feedback")[e]){const t=document.getElementsByClassName("feedback")[e].className.replace("d-none","d-block");document.getElementsByClassName("feedback")[e].className=t}})};const N=document.querySelector("#allTasksButton");document.querySelector(".menutoggle").addEventListener("click",()=>{"menuoff,menuhide".split(",").forEach(e=>{document.querySelector(".menumobile").classList.toggle(e)}),"buttonmove,buttonhide".split(",").forEach(e=>{document.querySelector(".menutoggle").classList.toggle(e)})}),q(),(()=>{if(0===localStorage.length)[new n("Closure of Plant","Nationwide rail company KiwiRail chose to close an industrial plant that manufactured rolling stock and replacement parts."),new n("Kitchen Makeover","Renovating the kitchen."),new n("New Car Design","Designing a new transportation vehicle.")].forEach(e=>{L(e.name,e.description)}),u("Shop-Homework","Biology homework for miss Lily","2018-05-31","Low",!1,"Kitchen Makeover"),u("Car-Homework","Caramel homework for miss Lily","2018-05-31","High",!1,"Kitchen Makeover");else for(let e=0;e<localStorage.length;e+=1)if(/name/.test(localStorage[localStorage.key(e)])){const t=JSON.parse(localStorage[localStorage.key(e)]);if(L(t.name,t.description),t.tasks.length>0)for(let e=0;e<t.tasks.length;e+=1){const o=t.tasks[e],n=t.name,{title:a}=o;u(a,o.description,o.date,o.priority,o.completion,n)}}p(),i()})(),N.addEventListener("click",()=>{const e=(new Date).toLocaleDateString();document.querySelector(".jumbotron-title").textContent="Your tasks",document.querySelector(".jumbotron-desc").textContent=e+". Not a good day to give up",r.innerHTML="",d.innerHTML="",(()=>{for(let e=0;e<localStorage.length;e+=1)if(/name/.test(localStorage[localStorage.key(e)])){const t=JSON.parse(localStorage[localStorage.key(e)]);b(t.name)}})()}),i(),window.onload=()=>{document.querySelector("#allTasksButton").click()}}]);