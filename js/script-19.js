//Напиши функцию getAllPropValues(propName)
//которая принимает один параметр propName - имя(ключ) свойства.
//Функция должна вернуть массив всех значений свойства с таким именем
//из каждого объекта в массиве products.
//Если в объектах нет свойства с таким именем,
//    функция должна вернуть пустой массив.

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const propValue = [];
  for (const product of products) {
    if (product[propName]) {
      propValue.push(product[propName]);
    }
  }
  return propValue;

  // Change code above this line
}

console.log(getAllPropValues("name")); //["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
console.log(getAllPropValues("category")); // []
