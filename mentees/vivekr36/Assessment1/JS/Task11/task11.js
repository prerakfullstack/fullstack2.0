const userNameText = document.querySelector('.userName');
const saveNameButton = document.querySelector('.saveNameBtn');
saveNameButton.addEventListener('click', () => {
  const userName = document.querySelector('.name').value;
  userNameText.textContent = userName;
  localStorage.setItem('name', userName);
});
function displayUserName() {
  const nameFromLocalStorage = localStorage.getItem('name');
  if (nameFromLocalStorage) {
    userNameText.textContent = nameFromLocalStorage;
  } else {
    userNameText.textContent = 'No name data';
  }
}
displayUserName();
const countryAndCapitals = new Map([
    ["Germany", "Berlin"],
    ["Sri Lanka", "Colombo"],
    ["India", "New Delhi"]
]);
function getCapital(country) {
    return countryAndCapitals.has(country) ? countryAndCapitals.get(country) : "No country found with the name";
}
const uniqueValues = new Set([5, 24, 36, 7, 36]);
function checkValueExists(value) {
    return uniqueValues.has(value);
}