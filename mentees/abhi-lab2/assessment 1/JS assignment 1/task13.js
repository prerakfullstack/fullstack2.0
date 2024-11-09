const todos = JSON.parse(localStorage.getItem('todoList')) || []

function displayTodos() {
    const todoList = document.getElementById('todoList')
    todoList.innerHTML = ''
    todos.forEach((todo, index) => {
        const listItem = document.createElement('li')
        listItem.textContent = todo
        const editButton = document.createElement('button')
        editButton.textContent = 'Edit'
        editButton.onclick = () => editTodoItem(index)
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.onclick = () => deleteTodoItem(index)
        listItem.append(editButton, deleteButton)
        todoList.appendChild(listItem)
    });
}

function addTodoItem() {
    const todoInput = document.getElementById('todoInput');
    todos.push(todoInput.value)
    localStorage.setItem('todoList', JSON.stringify(todos));
    todoInput.value = ''
    displayTodos();
}

function editTodoItem(index) {
    const newTodo = prompt('Edit your todo:', todos[index])
    if (newTodo) {
        todos[index] = newTodo
        localStorage.setItem('todoList', JSON.stringify(todos))
        displayTodos()
    }
}

function deleteTodoItem(index) {
    todos.splice(index, 1)
    localStorage.setItem('todoList', JSON.stringify(todos))
    displayTodos()
}

displayTodos()
