{
  const convertTemperature = (scale) => (value) =>
    scale === "CtoF" ? (value * 9) / 5 + 32 : ((value - 32) * 5) / 9;

  const celsiusToFahrenheit = convertTemperature("CtoF");
  console.log(celsiusToFahrenheit(30)); // Output: 86
}
