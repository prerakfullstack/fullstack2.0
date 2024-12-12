{
  console.log("Script start");

  setTimeout(() => console.log("Macrotask: setTimeout"), 0);

  Promise.resolve()
    .then(() => console.log("Microtask: Promise 1"))
    .then(() => console.log("Microtask: Promise 2"));

  console.log("Script end");
}
