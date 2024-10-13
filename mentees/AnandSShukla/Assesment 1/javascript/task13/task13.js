let todoItems = JSON.parse(localStorage.getItem("todos")) || [];

function displayTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  todoItems.forEach((item, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = item;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editTask(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(index);

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

function addTask() {
  const todoInput = document.getElementById("todoInput");
  const task = todoInput.value.trim();
  if (task) {
    todoItems.push(task);
    localStorage.setItem("todos", JSON.stringify(todoItems));
    displayTodos();
    todoInput.value = "";
  }
}

function editTask(index) {
  const newTask = prompt("Edit task:", todoItems[index]);
  if (newTask) {
    todoItems[index] = newTask;
    localStorage.setItem("todos", JSON.stringify(todoItems));
    displayTodos();
  }
}

function deleteTask(index) {
  todoItems.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todoItems));
  displayTodos();
}

document.getElementById("addBtn").addEventListener("click", addTask);
window.addEventListener("load", displayTodos);
