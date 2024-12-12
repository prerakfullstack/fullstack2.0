{
  function calculateTotal(price, discount, tax) {
    return price - price * discount + tax;
  }

  const applyTax = calculateTotal.bind(null, 100, 0.1); // Presets price and discount
  console.log(applyTax(5)); // Returns 95 (tax applied to preset values)
}
