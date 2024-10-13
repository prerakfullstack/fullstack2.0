{
  console.log("***********Task 5***********");

  function logPersonDetails(person) {
    const { firstName, lastName, age } = person;
    console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
  }

  const personDetails = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  logPersonDetails(personDetails);

  function sumThreeNumbers(numbers) {
    const [num1, num2, num3] = numbers;
    return num1 + num2 + num3;
  }

  const numbers = [1, 2, 3];
  console.log(sumThreeNumbers(numbers));

  console.log("************Task 5 ended************");
}
