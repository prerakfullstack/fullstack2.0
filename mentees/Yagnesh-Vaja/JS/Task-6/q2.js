const person = {
    name: "Yagnesh",
    age: 25,
    favoriteProgrammingLanguages: ["JavaScript", "Python", "C++"]
  };
  

  const updatedPerson = { ...person, age: 26 };
  
  console.log(person);         
  console.log(updatedPerson);  
  
