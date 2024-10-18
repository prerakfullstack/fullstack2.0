function PersonDetails(person) {
    const { firstName, lastName, age } = person; // Deconstructing properties from the object
    console.log(`The person's name is ${firstName} ${lastName} and they are ${age} years old.`);
}


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};
PersonDetails(person);




