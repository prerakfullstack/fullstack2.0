document.addEventListener("DOMContentLoaded", () => {
  const todoListElement = document.getElementById("todoList");
  const newTodoInput = document.getElementById("newTodo");
  const addTodoButton = document.getElementById("addTodoButton");
  const clearAllButton = document.getElementById("clearAllButton");
  const emptyMessage = document.getElementById("emptyMessage");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function renderTodos() {
    todoListElement.innerHTML = "";
    if (todos.length === 0) {
      emptyMessage.style.display = "block";
    } else {
      emptyMessage.style.display = "none";
      todos.forEach((todo, index) => {
        const todoItem = document.createElement("li");
        todoItem.className = "todo-item";

        const todoInput = document.createElement("p");
        todoInput.innerHTML = todo;
        todoInput.addEventListener("change", (e) => {
          todos[index] = e.target.value;
          saveTodos();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          todos.splice(index, 1);
          saveTodos();
          renderTodos();
        });

        todoItem.appendChild(todoInput);
        todoItem.appendChild(deleteButton);
        todoListElement.appendChild(todoItem);
      });
    }
  }

  addTodoButton.addEventListener("click", () => {
    const newTodo = newTodoInput.value.trim();
    if (newTodo) {
      todos.push(newTodo);
      newTodoInput.value = "";
      saveTodos();
      renderTodos();
    }
  });

  clearAllButton.addEventListener("click", () => {
    todos = [];
    saveTodos();
    renderTodos();
  });

  renderTodos();
});
