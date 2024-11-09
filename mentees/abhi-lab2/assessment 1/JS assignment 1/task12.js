async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) throw new Error('Network response issue with status code ' + response.status);
        const users = await response.json();
        const table = document.createElement('table');
        users.forEach(user => {
            const row = table.insertRow();
            row.insertCell(0).textContent = user.name
            row.insertCell(1).textContent = user.email
            row.insertCell(2).textContent = user.phone
            row.insertCell(3).textContent = user.company.name
        });

        // document.body.innerHTML = '';
        document.body.appendChild(table)
    } catch (error) {
        console.error('Fetch api error:', error)
    }
}

fetchUserData();
