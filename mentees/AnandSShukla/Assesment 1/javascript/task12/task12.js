async function fetchUserData() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
          throw new Error('Failed to fetch data from API');
      }

      const users = await response.json();
      
      displayUsers(users);
  } catch (error) {
      console.error('Error:', error.message);
      alert('An error occurred while fetching user data. Please try again later.');
  }
}

function displayUsers(users) {
  const userTableBody = document.querySelector('#userTable tbody');
  
  userTableBody.innerHTML = '';

  users.forEach(user => {
      const row = document.createElement('tr');
      
      const nameCell = document.createElement('td');
      nameCell.textContent = user.name;

      const emailCell = document.createElement('td');
      emailCell.textContent = user.email;

      const phoneCell = document.createElement('td');
      phoneCell.textContent = user.phone;

      const companyCell = document.createElement('td');
      companyCell.textContent = user.company.name;

      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(phoneCell);
      row.appendChild(companyCell);
      userTableBody.appendChild(row);
  });
}

fetchUserData().catch(error => {
  console.error('Error with promise:', error);
});
