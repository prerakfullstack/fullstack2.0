let URL = "https://jsonplaceholder.typicode.com/users";
let table = document.getElementById("table");
let btn = document.getElementById("btn");

let data = [];

async function getData() {
	try {
		response = await fetch(URL);
		data = await response.json();
		console.log(data);
		return data;
	} catch {
		console.log("Error Cannot fetch data");
        return [];
	}
}

let counter = 0;
async function addRow() {
	await getData();
	let newRow = document.createElement("tr");
	newRow.innerHTML = `
            <td>${data[counter].name}</td>
            <td>${data[counter].email}</td>
            <td>${data[counter].phone}</td>
            <td>${data[counter].company.name}</td>
            `;
	table.appendChild(newRow);
	counter++;
}

btn.addEventListener("click", addRow);
