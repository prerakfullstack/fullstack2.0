document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded');

    const addTodoBtn = document.getElementById('addTodo');
    const inputValue = document.getElementById('add');
    const renderContainer = document.querySelector('.renderedTodo');
    let todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];

    // Function to display the todos on the page
    function displayTodos() {
        renderContainer.innerHTML = '';
        todoArray.forEach(function (item, index) {
            renderContainer.innerHTML += `
                <div class="todoDiv" data-index="${index}">
                    <p>${item}</p>
                    <button class="delete">Delete</button>
                </div>`;
        });

        document.querySelectorAll('.delete').forEach((btn) => {
            btn.addEventListener('click', removeTodo);
        });
    }

    // Function to add a new todo item
    addTodoBtn.addEventListener('click', function (e) {
        let todoValue = inputValue.value;
        if (todoValue !== "") {
            todoArray.push(todoValue);
            localStorage.setItem('todoArray', JSON.stringify(todoArray));
            inputValue.value = '';
            displayTodos();
        }
    });

    // Function to delete a todo item
    function removeTodo(e) {
        const index = e.target.closest('.todoDiv').dataset.index;
        todoArray.splice(index, 1);
        localStorage.setItem('todoArray', JSON.stringify(todoArray));
        displayTodos();
    }

    // Initial rendering of todos
    displayTodos();
});
