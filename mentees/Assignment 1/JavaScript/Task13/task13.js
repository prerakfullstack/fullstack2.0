const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;

        // Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editTodo(index));

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTodo(index));

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = todoInput.value.trim();

    if (newTodo) {
        todos.push(newTodo);
        saveTodos();
        renderTodos();
        todoInput.value = ''; 
    }
});

function editTodo(index) {
    const newTodo = prompt('Edit your task:', todos[index]);
    if (newTodo !== null && newTodo.trim() !== '') {
        todos[index] = newTodo.trim();
        saveTodos();
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

renderTodos();
