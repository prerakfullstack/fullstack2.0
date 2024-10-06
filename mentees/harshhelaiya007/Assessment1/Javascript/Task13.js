document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded');

    const addTodoBtn = document.getElementById('addTodo');
    const inputValue = document.getElementById('add');
    const renderContainer = document.querySelector('.renderedTodo');
    let todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];

    function renderTodos() {
        renderContainer.innerHTML = '';
        todoArray.forEach(function (item, index) {
            renderContainer.innerHTML += `
                <div class="todoDiv" data-index="${index}">
                    <p>${item}</p>
                    <button class="delete">Delete</button>
                </div>`;
        });

        document.querySelectorAll('.delete').forEach((btn) => {
            btn.addEventListener('click', deleteTodo);
        });
    }

    addTodoBtn.addEventListener('click', function (e) {
        let todoValue = inputValue.value;
        if (todoValue !== "") {
            todoArray.push(todoValue);
            localStorage.setItem('todoArray', JSON.stringify(todoArray));
            inputValue.value = '';
            renderTodos();
        }
    });

    function deleteTodo(e) {
        const index = e.target.closest('.todoDiv').dataset.index;
        todoArray.splice(index, 1);
        localStorage.setItem('todoArray', JSON.stringify(todoArray));
        renderTodos();
    }

    renderTodos();
});
