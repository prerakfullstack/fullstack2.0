{
  console.log("**********Task 12**********");

  document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const table = document.createElement("table");
    const tableHeader = `
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
            </tr>
        </thead>
    `;
    table.innerHTML = tableHeader;
    document.body.appendChild(table);

    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const users = await response.json();
        console.log("Table Created");
        displayUsers(users);
      } catch (error) {
        console.error("Fetch error: ", error);
        displayError(error);
      }
    }

    function displayUsers(users) {
      users.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.company.name}</td>
        `;
        table.appendChild(row);
      });
    }

    function displayError(error) {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorMessage);
    }

    fetchData();
  });

  console.log("**********Task 12 ended**********");
}
