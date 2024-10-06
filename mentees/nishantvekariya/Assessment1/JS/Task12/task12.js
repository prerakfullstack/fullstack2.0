const fetchUserData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    document.getElementById("error").textContent = "Failed to fetch user data.";
  }
};

const displayUsers = (users) => {
  const tableBody = document.getElementById("userTableBody");
  users.forEach((user) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    const phoneCell = document.createElement("td");
    phoneCell.textContent = user.phone;
    row.appendChild(phoneCell);

    const companyCell = document.createElement("td");
    companyCell.textContent = user.company.name;
    row.appendChild(companyCell);

    tableBody.appendChild(row);
  });
};

fetchUserData();
