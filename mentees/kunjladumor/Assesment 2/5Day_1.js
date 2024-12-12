{
  function groupNumbers(numbers) {
    return numbers.reduce(
      (result, number) => {
        if (number % 2 === 0) {
          result.even.push(number);
        } else {
          result.odd.push(number);
        }
        return result;
      },
      { even: [], odd: [] }
    );
  }

  const numbers = [1, 2, 3, 4, 5, 6];
  const grouped = groupNumbers(numbers);
  console.log(grouped);
}
