
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
      <span contenteditable="true" onblur="editTodo(${index}, this.innerText)">${todo}</span>
      <button onclick="deleteTodo(${index})">Delete</button>
    `;
        todoList.appendChild(todoItem);
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to add a new todo
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        todos.push(todoText);
        todoInput.value = '';
        renderTodos();
    }
}

// Function to delete a todo
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Function to edit a todo
function editTodo(index, newText) {
    todos[index] = newText.trim();
    renderTodos();
}

// Event listener for adding a new todo
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

// Initial rendering of todos
renderTodos();
