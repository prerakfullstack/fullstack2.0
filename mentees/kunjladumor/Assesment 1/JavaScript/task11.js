{
  console.log("***********Task 11***********");
  function storeUserName(name) {
    localStorage.setItem("userName", name);
  }

  function getUserName() {
    return localStorage.getItem("userName");
  }

  storeUserName("John Doe");
  console.log(getUserName());

  const countryCapitalMap = new Map([
    ["USA", "Washington, D.C."],
    ["France", "Paris"],
    ["Japan", "Tokyo"],
  ]);

  function getCapital(country) {
    return countryCapitalMap.get(country);
  }

  console.log(getCapital("France"));
  console.log(getCapital("Japan"));

  const uniqueValuesSet = new Set([1, 2, 3, 4, 5]);

  function checkValueExists(value) {
    return uniqueValuesSet.has(value);
  }

  console.log(checkValueExists(3));
  console.log(checkValueExists(6));

  console.log("************Task 11 ended************");
}
