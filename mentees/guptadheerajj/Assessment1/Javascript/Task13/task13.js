let table = document.getElementById("table");
let addTask = document.getElementById("addTask");
let form = document.getElementById("form");
let saveTask = document.getElementById("saveTask");

addTask.addEventListener("click", () => {
	form.style.display = "block";
});

let taskCounter = 0;
saveTask.addEventListener("click", (event) => {
	event.preventDefault();
	let taskTitle = document.getElementById("taskTitle").value;
	localStorage.setItem("title", taskTitle);
	let taskDescription = document.getElementById("taskDescription").value;
	localStorage.setItem("description", taskDescription);

	console.log(taskDescription, taskTitle);

	let newRow = document.createElement("tr");
	newRow.innerHTML = `
			<td>${taskCounter}</td>
            <td>${localStorage.getItem("title")}</td>
            <td>${localStorage.getItem("title")}</td>
            <td>
                <button>Edit Task</button>
                <button>Delete Task</button>
            </td>`;

	table.appendChild(newRow);
	form.style.display = "none";
});
