async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log("response ==>>>>", response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        };
        const users = await response.json();
        const tableBody = document.querySelector('#usersTable tbody');

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
        console.error('Error fetching users:', error);
    };
};

fetchUsers();



// const displayData = {
//     "name": "Clementina DuBuque",
//     "email": "Rey.Padberg@karina.biz",
//     "phone": "024-648-3804",
//     "company": {
//         "name": "Hoeger LLC",
//     }
// }
// const result = {
//     "id": 10,
//     "name": "Clementina DuBuque",
//     "username": "Moriah.Stanton",
//     "email": "Rey.Padberg@karina.biz",
//     "address": {
//         "street": "Kattie Turnpike",
//         "suite": "Suite 198",
//         "city": "Lebsackbury",
//         "zipcode": "31428-2261",
//         "geo": {
//             "lat": "-38.2386",
//             "lng": "57.2232"
//         }
//     },
//     "phone": "024-648-3804",
//     "website": "ambrose.net",
//     "company": {
//         "name": "Hoeger LLC",
//         "catchPhrase": "Centralized empowering task-force",
//         "bs": "target end-to-end models"
//     }
// }