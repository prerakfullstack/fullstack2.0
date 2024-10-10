let todoBtn = document.getElementById("addTodo");
let todoText = document.getElementById("todo");
let yourTodo = document.getElementById("yourTodo");
let myTodos = JSON.parse(localStorage.getItem('MyTodo')) || [];
let editIndex = -1;

if (localStorage.getItem('MyTodo')) {
    ListMyTodo();
}

todoBtn.addEventListener('click',() => {
    const todoValue = todoText.value.trim();

    if (todoValue !== "") {
        if (editIndex >= 0) {
        
            myTodos[editIndex] = todoValue;
            editIndex = -1;
        } else {
        
            myTodos.push(todoValue);
        }
        localStorage.setItem('MyTodo',JSON.stringify(myTodos));
        ListMyTodo();
        todoText.value = '';
    }
});

function ListMyTodo() {
    yourTodo.innerHTML = '';


    myTodos.forEach(function (todo,index) {
        let li = document.createElement('li');
        li.innerHTML = todo;

    
        let editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.onclick = function () {
            editTodo(index);
        };

    
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.onclick = function () {
            deleteTodo(index);
        };

    
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

    
        yourTodo.appendChild(li);
    });
}

function editTodo(index) {
    todoText.value = myTodos[index];
    editIndex = index;
}

function deleteTodo(index) {
    myTodos.splice(index,1);
    localStorage.setItem('MyTodo',JSON.stringify(myTodos));
    ListMyTodo();
}
