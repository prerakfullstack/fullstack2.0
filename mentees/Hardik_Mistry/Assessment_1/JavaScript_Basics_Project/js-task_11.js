const userNameInput = document.getElementById("userName");
const showName = document.getElementById("showName");
const inputSubmitBtn = document.getElementById("inputSubmit");

const userName = JSON.parse(localStorage.getItem("userName"));
showName.innerHTML = userName || "there is no name saved till now";

inputSubmitBtn.addEventListener("click", () => {
    localStorage.setItem("userName", JSON.stringify(userNameInput.value));
    const userName = JSON.parse(localStorage.getItem("userName"));
    showName.innerHTML = userName || "there is no name saved till now";
});


const countryCapitalMap = new Map([
    ['India', 'New Delhi'],
    ['France', 'Paris'],
    ['Japan', 'Tokyo']
]);

const getCapital = (country) => {
    if (countryCapitalMap.has(country)) {
        return countryCapitalMap.get(country);
    } else {
        return 'Capital not found for this country';
    }
};
console.log(`capital of India is ${getCapital('India')}`);
console.log(`capital of France is ${getCapital('France')}`);
console.log(`capital of USA is ${getCapital('USA')}`);




const uniqueSet = new Set([10, 20, 30, 40, 50]);

const checkValueInSet = (value) => {
    if (uniqueSet.has(value)) {
        return `${value} exists in the Set.`;
    } else {
        return `${value} does not exist in the Set.`;
    }
};

console.log(checkValueInSet(20));
console.log(checkValueInSet(60));
