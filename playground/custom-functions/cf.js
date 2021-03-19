function calculateBill(amount, tax = 1.13, tip = 1.2) {
  // this is the function body
  console.log('running calculate bill!');
  const total = amount * tax * tip;
  return total;
}

const myTotal = calculateBill(100);
console.log(`Your total is ${myTotal}`);
