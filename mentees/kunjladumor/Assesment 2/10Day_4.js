{
  const compose =
    (...functions) =>
    (value) =>
      functions.reduce((acc, func) => func(acc), value);

  const toUpper = (str) => str.toUpperCase();
  const appendExclamation = (str) => `${str}!`;
  const shout = compose(toUpper, appendExclamation);

  console.log(shout("hello")); // Output: HELLO!
}
