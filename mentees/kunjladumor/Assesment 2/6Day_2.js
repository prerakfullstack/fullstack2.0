{
  function simulateApiDelay(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("API data loaded!"), delay);
    });
  }

  simulateApiDelay(2000).then((message) => console.log(message));
}
