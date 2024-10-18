// Fetch user data from API
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1'); // Example API

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const user = await response.json();
        displayUserData(user);
    } catch (error) {
        displayError(error.message);
    }
}

// Display user data in the table
function displayUserData(user) {
    const tableBody = document.getElementById('user-body');
    const userRow = `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.company?.name || 'N/A'}</td>
        </tr>
    `;
    tableBody.innerHTML = userRow;
}

// Display error message
function displayError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
}

// Call the function to fetch and display the user data
fetchUserData()
    .catch((error) => {
        displayError(`An unexpected error occurred: ${error.message}`);
    });
