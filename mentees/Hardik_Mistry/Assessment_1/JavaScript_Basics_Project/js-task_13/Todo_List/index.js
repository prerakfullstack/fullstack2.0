// menu selection

let home = document.getElementById("home");
let pandingwork = document.getElementById("pandingwork");
//let workdone = document.getElementById("workdone");
let deleted = document.getElementById("deleted");
let history = document.getElementById("history");

/////////////************************************************************************************ */
//storage section for saving our arrays and then getting array from storage and then using them in todos 
let savedarry = [];
let todayarry = [];
let pandingworkarry = [];
let deletedarry = [];
//let historyarry =[];
///////////////********************************************** */
//section id of showing area of list items*********************************************
let histry = document.getElementById("histry");
let wrkdone = document.getElementById("wrkdone");
let dlted = document.getElementById("dlted");
let panding = document.getElementById("");
//************************************************************
// input field selection
let complatework = document.querySelectorAll(".wrkdnli");
let histryli = document.querySelectorAll(".histryli");
let addmore = document.getElementById("addme");
let todomain = document.getElementsByClassName("todo_main");
let todoitem = document.getElementById("todo_item");
let todoslist = document.getElementById("todoslist");
let pnding = document.getElementById("pnding");
//*********************************************************************** */
// todo list items
//******************************************************************************** */
// addeventlisteners 
document.addEventListener("DOMContentLoaded", gettodosfromstorage);
addmore.addEventListener("click", addme);
let pndingli = document.querySelectorAll(".pndingli");
let todosli = document.createElement("li");
let todosp = document.createElement("p");
let todosdiv2 = document.createElement("div");
let todosdiv3 = document.createElement("div");
let wrkdoneli = document.createElement("li");
let dltli = document.createElement("li");
///******************************************************************************************* */
// functions
function addme() {
  todoitem = document.getElementById("todo_item").value;
  if (todoitem === '') {
    spam = document.getElementsByTagName("span")[0].innerHTML = ("plaese add some tast to maintain your work flow");
  } else {
    saveLocaltodos(todoitem);
    todosli = document.createElement("li");
    todosli.classList.add("todos");

    todosp = document.createElement("p");
    todosp.classList.add("todosp");
    todosp.innerText = todoitem;
    todosli.appendChild(todosp);

    todosdiv2 = document.createElement("div");
    todosdiv2.classList.add("done");
    todosdiv2.innerText = "✔";
    todosli.appendChild(todosdiv2);

    todosdiv3 = document.createElement("div");
    todosdiv3.classList.add("delete");
    todosdiv3.innerText = "x";
    todosli.appendChild(todosdiv3);

    todoslist.appendChild(todosli);

    spam = document.getElementsByTagName("span")[0].innerHTML = "";
    todoitem = document.getElementById("todo_item").value = "";
  }
}


// deleting tods ietems from the todo list 
let deletbtn = document.querySelector("ul");
deletbtn.addEventListener("click", (e) => {
  let pos = e.target;
  ptext = pos.innerText;

  parnt = pos.parentNode;
  wdvalue = parnt.firstElementChild.innerText;
  if (ptext === "x") {
    parnt.remove();
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todosind = todos.indexOf(wdvalue);
    todos.splice(todosind, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    deletedarry = [];
    if (localStorage.getItem("deletedarry") === null) {
      deletedarry = [];
    } else {
      deletedarry = JSON.parse(localStorage.getItem("deletedarry"));
    }
    deletedarry.push(wdvalue);
    localStorage.setItem("deletedarry", JSON.stringify(deletedarry));
  }////if state ment for making true === x///
});
let workdonebtn = document.querySelector("ul");
workdonebtn.addEventListener("click", (e) => {
  let pos2 = e.target;
  ptext = pos2.innerText;
  parnt = pos2.parentNode;
  wd = parnt.firstElementChild;
  wdtextval = wd.innerText;
  if (ptext === "✔") {
    wd.classList.toggle("todospara");
    wdclass = wd.classList;

    saveworkdonetodos(wdtextval);

    function saveworkdonetodos(todo) {
      // check ----- hey do i alraedy have thing in there ?

      //  console.log("is im working");
      let savedtodos;

      if (localStorage.getItem("savedtodos") === null) {
        savedtodos = [];
        savedtodos.push(todo);
        localStorage.setItem("savedtodos", JSON.stringify(savedtodos));

      } else if (wdclass == "todosp") {
        savedtodos = JSON.parse(localStorage.getItem("savedtodos"));
        todosind = savedtodos.indexOf(todo);
        savedtodos.splice(todosind, 1);
        localStorage.setItem("savedtodos", JSON.stringify(savedtodos));
      } else {
        savedtodos = JSON.parse(localStorage.getItem("savedtodos"));
        savedtodos.push(todo);
        localStorage.setItem("savedtodos", JSON.stringify(savedtodos));
      }
    }
  }
});

function saveLocaltodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));

  let historyarry;
  if (localStorage.getItem("historyarry") === null) {
    historyarry = [];

  } else {
    historyarry = JSON.parse(localStorage.getItem("historyarry"));
  }
  historyarry.push(todo);
  localStorage.setItem("historyarry", JSON.stringify(historyarry));
}



////************************************************ */

///this is event listener for taking back our todos from localstorage//// 
function gettodosfromstorage() {
  // to gett back our tods list from local storage************************
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  let savedtodos;
  if (localStorage.getItem("savedtodos") === null) {
    savedtodos = [];

  } else {
    savedtodos = JSON.parse(localStorage.getItem("savedtodos"));
  }
  for (let i = 0; i < todos.length; i++) {
    const element = todos[i];

    todosli = document.createElement("li");
    todosli.classList.add("todos");

    todosp = document.createElement("p");
    todosp.classList.add("todosp");
    todosp.innerText = element;
    todosli.appendChild(todosp);

    todosdiv2 = document.createElement("div");
    todosdiv2.classList.add("done");
    todosdiv2.innerText = "✔";
    todosli.appendChild(todosdiv2);

    todosdiv3 = document.createElement("div");
    todosdiv3.classList.add("delete");
    todosdiv3.innerText = "x";
    todosli.appendChild(todosdiv3);
    todoslist.appendChild(todosli);
    for (let j = 0; j < savedtodos.length; j++) {
      const sdone = savedtodos[j];
      if (element === sdone) {
        todosp.classList.add("todospara");
      }
    }
  }
  for (let m = 1; m <= todoslist.children.length; m++) {
    const chldnode = todoslist.childNodes[m].childNodes[0];
    chldtext = chldnode.innerText;
    chldpara = chldnode.getAttribute("class");
    if (chldpara === "todosp") {
      todosli = document.createElement("li");
      todosli.classList.add("pndingli");

      todosp = document.createElement("p");
      todosp.classList.add("todosp");
      todosp.innerText = chldtext;
      todosli.appendChild(todosp);

      pnding.appendChild(todosli);
    }
  }
  ////////////////////****************************************** *
  //get data from storage for complated work/////////////////////////
  /////////////////////////
  if (localStorage.getItem("savedtodos") === null) {
    savedtodos = [];
  } else {
    savedtodos = JSON.parse(localStorage.getItem("savedtodos"));
  }
  for (let i = 0; i < savedtodos.length; i++) {
    const element = savedtodos[i];
    wrkdoneli = document.createElement("li");
    wrkdoneli.classList.add("wrkdnli");

    todosp = document.createElement("p");
    todosp.classList.add("todosp");
    todosp.innerText = element;
    wrkdoneli.appendChild(todosp);
    wrkdone.appendChild(wrkdoneli);
  }

  //////////////////////////////******************************** */
  ///get data FROM  storage for deleted work /////////
  /////////////
  deletedarry = [];
  if (localStorage.getItem("deletedarry") === null) {
    deletedarry = [];
  } else {
    deletedarry = JSON.parse(localStorage.getItem("deletedarry"));
  }
  for (let i = 0; i < deletedarry.length; i++) {
    const element = deletedarry[i];

    todosli = document.createElement("li");
    todosli.classList.add("dltli");

    todosp = document.createElement("p");
    todosp.classList.add("todosp");
    todosp.innerText = element;
    todosli.appendChild(todosp);

    dlted.appendChild(todosli);
  }
  ////***************************************************************************** */
  /////get data from storage for histry workflow/////////
  /////////////
  let historyarry;
  if (localStorage.getItem("historyarry") === null) {
    historyarry = [];
  } else {
    historyarry = JSON.parse(localStorage.getItem("historyarry"));
  }
  historyarry.forEach(element => {
    todosli = document.createElement("li");
    todosli.classList.add("histryli");

    todosp = document.createElement("p");
    todosp.classList.add("todosp");
    todosp.innerText = element;
    todosli.appendChild(todosp);

    histry.appendChild(todosli);

    for (let j = 0; j < savedtodos.length; j++) {
      const sdone = savedtodos[j];
      if (element === sdone) {
        todosp.classList.add("todospara");

      }
    }
  });
};

menubox = document.querySelector(".menu_box").addEventListener("click", (e) => {
  let pos2 = e.target;
  ptext = pos2.innerText;
  switch (ptext) {
    case "home":
      break;
    case "panding work":
      pndingli = document.querySelectorAll(".pndingli");
      for (let v = 0; v < pndingli.length; v++) {
        const element = pndingli[v];
        element.remove();
      }
      for (let m = 1; m <= todoslist.children.length; m++) {
        const chldnode = todoslist.childNodes[m].childNodes[0];
        chldtext = chldnode.innerText;
        chldpara = chldnode.getAttribute("class");
        if (chldpara === "todosp") {
          todosli = document.createElement("li");
          todosli.classList.add("pndingli");

          todosp = document.createElement("p");
          todosp.classList.add("todosp");
          todosp.innerText = chldtext;
          todosli.appendChild(todosp);

          pnding.appendChild(todosli);
        }
      }
      break;
    case "workdone":
      if (localStorage.getItem("savedtodos") === null) {
        savedtodos = [];
      } else {
        savedtodos = JSON.parse(localStorage.getItem("savedtodos"));
      }

      wrkdnli = document.querySelectorAll(".wrkdnli");
      for (let k = 0; k < wrkdnli.length; k++) {
        const element = wrkdnli[k];
        element.remove();
      }
      for (let i = 0; i < savedtodos.length; i++) {
        const element = savedtodos[i];
        wrkdoneli = document.createElement("li");
        wrkdoneli.classList.add("wrkdnli");

        todosp = document.createElement("p");
        todosp.classList.add("todosp");
        todosp.innerText = element;
        wrkdoneli.appendChild(todosp);

        wrkdone.appendChild(wrkdoneli);
      };
      break;
    case "deleted":
      deletedarry = [];
      if (localStorage.getItem("deletedarry") === null) {
        deletedarry = [];
      } else {
        deletedarry = JSON.parse(localStorage.getItem("deletedarry"));
      }
      dltli = document.querySelectorAll(".dltli");
      for (let l = 0; l < dltli.length; l++) {
        const element = dltli[l];
        element.remove();
      }
      for (let i = 0; i < deletedarry.length; i++) {
        const element = deletedarry[i];

        todosli = document.createElement("li");
        todosli.classList.add("dltli");

        todosp = document.createElement("p");
        todosp.classList.add("todosp");
        todosp.innerText = element;
        todosli.appendChild(todosp);

        dlted.appendChild(todosli);
      };
      break;
    case "history":
      histryli = document.querySelectorAll(".histryli");
      for (let g = 0; g < histryli.length; g++) {
        const element = histryli[g];
        element.remove();
      }
      if (localStorage.getItem("savedtodos") === null) {
        savedtodos = [];
      } else {
        savedtodos = JSON.parse(localStorage.getItem("savedtodos"));
      }
      let historyarry;
      if (localStorage.getItem("historyarry") === null) {
        historyarry = [];
      } else {
        historyarry = JSON.parse(localStorage.getItem("historyarry"));
      }
      historyarry.forEach(element => {


        todosli = document.createElement("li");
        todosli.classList.add("histryli");

        todosp = document.createElement("p");
        todosp.classList.add("todosp");
        todosp.innerText = element;
        todosli.appendChild(todosp);

        histry.appendChild(todosli);
        for (let j = 0; j < savedtodos.length; j++) {
          const sdone = savedtodos[j];
          if (element === sdone) {
            todosp.classList.add("todospara");

          }
        }
      });
      break;
  }
});