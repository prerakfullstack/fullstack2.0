// fetchingUserData function starts here ::
async function fetchingUserData() {
  const usersData = document
    .getElementById("user-table")
    .querySelector("tbody");
  const errorMessageDiv = document.getElementById("error-message");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();

    // Clear any previous error messages
    errorMessageDiv.textContent = "";

    users.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.company.name}</td>
            `;
      usersData.appendChild(row);
    });
  } catch (error) {
    // Handle error and display the message
    errorMessageDiv.textContent = `Error fetching user data: ${error.message}`;
  }
}

// Call the fetchingUserData function
fetchingUserData();
