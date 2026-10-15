function calculateBill(price, quantity) {
  const total = price * quantity;
  return total;
}

const bill = calculateBill(100, 3);

console.log("Total bill:", bill);