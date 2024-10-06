function performOperations() {
  // Get the input values
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const sum = num1 + num2;
  const difference = num1 - num2;

  // Comparison
  const areEqual = num1 === num2;

  // Logical Check
  const bothGreaterThanZero = num1 > 0 && num2 > 0;

  let resultsHtml = `<p>Sum: ${sum}</p>`;
  resultsHtml += `<p>Difference: ${difference}</p>`;
  resultsHtml += `<p>Are Equal: ${areEqual}</p>`;
  resultsHtml += `<p>Both Greater Than Zero: ${bothGreaterThanZero}</p>`;

  // Display the results
  document.getElementById("results").innerHTML = resultsHtml;
}
