const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];

const keys = Object.keys(apartment);
for (const key of keys) {
  values.push(apartment[key]);
  console.log(key);
  console.log(apartment[key]);
}

//Объявлена переменная apartment.
//Значение переменной apartment это объект.
//Объявлена переменная keys.
//Значение переменной keys это массив ["descr", "rating", "price"].
//Значение переменной keys получено с помощью метода Object.keys().
//Объявлена переменная values.
//Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
//Значение переменной values получено с помощью цикла for...of.
