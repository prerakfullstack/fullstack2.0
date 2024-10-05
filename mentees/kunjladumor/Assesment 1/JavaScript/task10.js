{
  console.log("***********Task 10***********");

  const add = (a, b) => a + b;

  const userInfo = `{
    "name": "John Doe",
    "age": 30,
    "interests": ["coding", "hiking", "reading"]
}`;

  const user = JSON.parse(userInfo);

  console.log(user.name);

  console.log(add(5, 10));

  console.log("************Task 10 ended************");
}
