
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');


let todos = JSON.parse(localStorage.getItem('todos')) || [];


function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}


function renderTodos() {
  
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');

      
        const input = document.createElement('input');
        input.type = 'text';
        input.value = todo;
        input.disabled = true;

        
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('todo-actions');

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', () => editTodoItem(index, input));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => deleteTodoItem(index));

        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(input);
        li.appendChild(actionsDiv);

     
        todoList.appendChild(li);
    });
}


function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        todos.push(todoText);  
        saveToLocalStorage();  
        renderTodos();         
        todoInput.value = '';  
    }
}


function editTodoItem(index, inputElement) {
    if (inputElement.disabled) {
        
        inputElement.disabled = false;
        inputElement.focus();
    } else {
        
        todos[index] = inputElement.value.trim();
        inputElement.disabled = true;
        saveToLocalStorage();
        renderTodos();
    }
}


function deleteTodoItem(index) {
    todos.splice(index, 1);  
    saveToLocalStorage();   
    renderTodos();           
}


addBtn.addEventListener('click', addTodo);


renderTodos();
