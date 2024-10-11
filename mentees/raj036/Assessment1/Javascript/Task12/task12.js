// Function to fetch user data and display in a table
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const userTableBody = document.getElementById('userTableBody');
    const errorMessage = document.getElementById('errorMessage');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Handle HTTP errors
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        const users = await response.json();

        errorMessage.textContent = '';

        users.forEach(user => {
            const row = `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.company.name}</td>
                </tr>
            `;
            userTableBody.innerHTML += row;
        });
    } catch (error) {
        errorMessage.textContent = `An error occurred: ${error.message}`;
    }
}

fetchUserData();
