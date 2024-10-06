async function fetchUserData() {
    const tableBody = document.querySelector("#userTable tbody");
    const errorMessage = document.getElementById("error-message");

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); // Fetch methods

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();

        errorMessage.textContent = '';

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
    } catch (error) {
        errorMessage.textContent = `An error occurred while fetching user data: ${error.message}`;
    }
}

fetchUserData();
