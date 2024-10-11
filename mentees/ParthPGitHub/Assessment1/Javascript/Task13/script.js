// Get references to DOM elements
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodoButton');
const todoList = document.getElementById('todoList');

// Load todos from LocalStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Function to render the todo list
const renderTodos = () => {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${todo}
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
};

// Function to add a new todo
const addTodo = () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push(todoText);
        localStorage.setItem('todos', JSON.stringify(todos));
        todoInput.value = '';
        renderTodos();
    }
};

// Function to edit an existing todo
const editTodo = (index) => {
    const newTodoText = prompt('Edit your todo:', todos[index]);
    if (newTodoText !== null && newTodoText.trim() !== '') {
        todos[index] = newTodoText;
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
    }
};

// Function to delete a todo
const deleteTodo = (index) => {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
};

// Event listener for adding a new todo
addTodoButton.addEventListener('click', addTodo);

// Initial render of todos
renderTodos();