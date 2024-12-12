{
  let leakedMemory;

  function createMemoryLeak() {
    const largeObject = new Array(1e6).fill("leaky memory");
    leakedMemory = largeObject;
  }

  createMemoryLeak();
}
