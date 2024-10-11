// Function to fetch user data from the API
const fetchUserData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const tableBody = document.querySelector('#userTable tbody');

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json();

        tableBody.innerHTML = '';
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
        console.error('Error fetching user data:', error);
        tableBody.innerHTML = `<tr><td colspan="4">Error fetching data: ${error.message}</td></tr>`;
    }
};

fetchUserData();