const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${todo.text}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push({ text: todoText });
        localStorage.setItem("todos", JSON.stringify(todos));
        todoInput.value = ""; 
        renderTodos();
    }
}

function editTodo(index) {
    const newTodoText = prompt("Edit todo:", todos[index].text);
    if (newTodoText !== null) {
        todos[index].text = newTodoText;
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}

addButton.addEventListener("click", addTodo);

renderTodos();