//13. TO-DO
let todoInput = document.querySelector(".todo-input");
let addBtn = document.querySelector(".btn-add");
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let renderList = document.querySelector(".todo-list");

const showTodoList = () => {
    renderList.innerHTML = "";
    todos.forEach((item, index) => {
        let todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");
        todoItem.textContent = item;
        todoItem.innerHTML =
            `
        ${item}
        <button class="btn-delete" data-index=${index}>Delete</button>
        <button class="btn-edit" data-index=${index}>Edit</button>
        `;
        renderList.appendChild(todoItem);
    })
}
const addItem = () => {
    if (todoInput.value !== "") {
        todos.push(todoInput.value);
        localStorage.setItem("todos", JSON.stringify(todos));
        todoInput.value = "";
        showTodoList();
    }
}

const deleteItem = (index) => {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    showTodoList();
}

const editItem = (itemContent, itemIndex) => {
    todoInput.value = itemContent;
    document.querySelector(".btn-section").innerHTML
        =
        `<button class="btn-update">Update</button>`;
    document.querySelector(".btn-update").addEventListener("click", () => {
        debugger
        let newItemContent = todoInput.value;
        todos.splice(Number(itemIndex), 1, newItemContent);
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log(todos);
        showTodoList();
    })
}

renderList.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
        let itemIndex = e.target.getAttribute("data-index");
        deleteItem(itemIndex);
    }
    if (e.target.classList.contains("btn-edit")) {
        let itemContent = e.target.parentNode.firstChild.textContent.trim();
        let itemIndex = e.target.getAttribute("data-index");
        console.log(itemContent);
        editItem(itemContent, itemIndex);
    }
})

window.addEventListener("DOMContentLoaded", showTodoList)

addBtn.addEventListener("click", addItem);

