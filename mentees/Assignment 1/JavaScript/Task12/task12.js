async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const tableBody = document.getElementById('userTable');
    const errorMessage = document.getElementById('errorMessage');

    tableBody.innerHTML = '';
    errorMessage.textContent = '';

    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();

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
        errorMessage.textContent = `Failed to fetch data: ${error.message}`;
    }
}

fetchUserData()