let todos = JSON.parse(localStorage.getItem('todos')) || [];

const renderTodos = () => {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = ''; 

    todos.forEach((todo, index) => {
        const todoItem = document.createElement("li");
        todoItem.textContent = todo;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editTodoItem(index));

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteTodoItem(index));

        todoItem.appendChild(editButton);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    });
};

const addTodoItem = () => {
    const todoInput = document.getElementById("todoInput");
    const newTodo = todoInput.value.trim();

    if (newTodo !== "") {
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        todoInput.value = '';
        renderTodos();
    }
};

const editTodoItem = (index) => {
    const newTodo = prompt("Edit your todo", todos[index]);
    if (newTodo !== null && newTodo.trim() !== "") {
        todos[index] = newTodo.trim();
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
    }
};

const deleteTodoItem = (index) => {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
};

document.getElementById("addTodoButton").addEventListener("click", addTodoItem);

renderTodos();
