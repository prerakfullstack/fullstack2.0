const storeUserName = (name) => {
    localStorage.setItem("userName", name);
};

// Function to retrieve the user's name from LocalStorage and display it
const displayUserName = () => {
    const storedName = localStorage.getItem("userName");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const nameForm = document.getElementById("nameForm");
    const displayUserNameElement =
        document.getElementById("displayUserName");

    if (storedName) {
        // Display the welcome message with the stored name
        displayUserNameElement.textContent = storedName;
        welcomeMessage.classList.remove("hidden");
        nameForm.classList.add("hidden");
    }
};

// Save button functionality
const saveNameButton = document.getElementById("saveNameButton");
saveNameButton.addEventListener("click", () => {
    const userNameInput = document.getElementById("userNameInput").value;
    if (userNameInput.trim()) {
        storeUserName(userNameInput);
        displayUserName();
    }
});

// Clear button functionality
const clearNameButton = document.getElementById("clearNameButton");
clearNameButton.addEventListener("click", () => {
    localStorage.removeItem("userName");
    location.reload(); // Reload the page to reset the state
});

// On page load, display the stored name (if available)
window.onload = displayUserName;


//Maps
// const countryCapitalMap = new Map([
//     ['France', 'Paris'],
//     ['Japan', 'Tokyo'],
//     ['Brazil', 'Brasilia']
// ]);

// const getCapital = (country) => {
//     return countryCapitalMap.get(country) || 'Capital not found';
// };

// console.log(getCapital('Japan'));

//Sets
// const uniqueValuesSet = new Set([1, 'apple', true, 'banana', 42]);

// const checkValueInSet = (value) => {
//     return uniqueValuesSet.has(value);
// };

// console.log(checkValueInSet('apple'));
// console.log(checkValueInSet('orange')); 

