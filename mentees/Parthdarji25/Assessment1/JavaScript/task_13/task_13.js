document.addEventListener("DOMContentLoaded", loadTodos);
document.getElementById("add-todo").addEventListener("click", addTodo);

// loadTodos function starts here:
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo) => {
    createTodoElement(todo);
  });
}

// addTodo function starts here :
function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("Please enter a todo!");
    return;
  }

  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));

  createTodoElement(todoText);
  todoInput.value = "";
}

// createTodoElement function starts here:
function createTodoElement(todoText) {
  const li = document.createElement("li");
  li.textContent = todoText;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => editTodo(li, todoText));

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => deleteTodo(li, todoText));

  li.appendChild(editButton);
  li.appendChild(deleteButton);

  document.getElementById("todo-list").appendChild(li);
}

// editTodo function starts here :
function editTodo(li, todoText) {
  const newTodo = prompt("Edit your todo:", todoText);
  if (newTodo) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const index = todos.indexOf(todoText);
    todos[index] = newTodo;
    localStorage.setItem("todos", JSON.stringify(todos));
    li.firstChild.textContent = newTodo;
  }
}

// deleteTodo starts here :
function deleteTodo(li, todoText) {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const index = todos.indexOf(todoText);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  li.remove();
}
