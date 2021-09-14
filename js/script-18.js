const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line

  for (const product of products) {
    return product.price;
  }

  // Change code above this line
}

console.log(getProductPrice("Radar")); //1300.
console.log(getProductPrice("Grip")); // 1200.
console.log(getProductPrice("Scanner")); // 2700.
console.log(getProductPrice("Droid")); //400.
console.log(getProductPrice("Engine")); // null.
