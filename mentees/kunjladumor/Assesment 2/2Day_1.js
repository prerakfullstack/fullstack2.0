{
  function createCounter() {
    let count = 0;
    return {
      increment: () => ++count,
      decrement: () => --count,
      reset: () => (count = 0),
    };
  }

  const counter = createCounter();
  console.log(counter.increment());
  console.log(counter.decrement());
  console.log(counter.reset());
}
