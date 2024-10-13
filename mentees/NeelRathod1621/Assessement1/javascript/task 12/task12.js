async function fetchUserData() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await fetch(url);

        console.log("resp", response)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();
        displayUserData(users);
    } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Failed to fetch user data. Please try again later.');
    }
}

function displayUserData(users) {
    const tbody = document.querySelector('#user-table tbody');
    tbody.innerHTML = '';

    users.forEach(user => {
        tbody.innerHTML += `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.company.name}</td>
            </tr>`;
    });
    tbody.innerHTML = row;
}

fetchUserData();