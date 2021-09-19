// Change code below this line
function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }

  return total;

  // Change code above this line
}

console.log(add(15, 27)); //42
console.log(add(12, 4, 11, 48)); //75
console.log(add(32, 6, 13, 19, 8)); //78
console.log(add(74, 11, 62, 46, 12, 36)); // 241
