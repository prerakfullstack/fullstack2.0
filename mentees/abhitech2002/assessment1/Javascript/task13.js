const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || []; // Accessing localstorage

// rendering todos 
function renderTodos() {
    todoList.innerHTML = ''; 

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo}</span>
            <div>
                <button class="edit-btn" onclick="editTodo(${index})">Edit</button>
                <button onclick="deleteTodo(${index})">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

// ADding new todo in the todo list
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === '') return;

    todos.push(todoText); 
    localStorage.setItem('todos', JSON.stringify(todos)); 
    todoInput.value = ''; 
    renderTodos(); 
}

// usign prompt for editing todos 
function editTodo(index) {
    const newTodo = prompt('Edit your todo:', todos[index]);
    if (newTodo && newTodo.trim() !== '') {
        todos[index] = newTodo.trim();
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos(); 
    }
}

// delete todo 
function deleteTodo(index) {
    todos.splice(index, 1); 
    localStorage.setItem('todos', JSON.stringify(todos)); 
    renderTodos();
}

addBtn.addEventListener('click', addTodo);

window.onload = renderTodos;