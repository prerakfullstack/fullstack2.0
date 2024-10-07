// Function to fetch user data
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`An error has occurred: ${response.status}`);
        }

        const data = await response.json();
        displayUserData(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        displayErrorMessage(error.message);
    }
}

// Function to display user data in the table
function displayUserData(users) {
    const tableBody = document.getElementById('user-table-body');

    users.forEach(user => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.company.name}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Function to display an error message in case of failure
function displayErrorMessage(errorMsg) {
    const tableBody = document.getElementById('user-table-body');
    const row = document.createElement('tr');

    row.innerHTML = `<td colspan="4" style="color: red;">Error: ${errorMsg}</td>`;
    tableBody.appendChild(row);
}

// Alternative fetch using promises with .then()/.catch()
function fetchUserDataWithPromises() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error(`An error has occurred: ${response.status}`);
            }
            return response.json();
        })
        .then(data => displayUserData(data))
        .catch(error => {
            console.error('Error fetching data:', error.message);
            displayErrorMessage(error.message);
        });
}

// Call the async function
fetchUserData();

// here i have created function which uses promise-based method instead of async/await
// i would prefers async await because it is less complicated to read then promise
// fetchUserDataWithPromises();
