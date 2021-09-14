const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
  keys.push(key);
  console.log(key);
  values.push(apartment[key]);
  console.log(apartment[key]);
}

//const apartment = {
//  descr: "Spacious apartment in the city center",
//  rating: 4,
//  price: 2153,
//};
//const keys = ["descr", "rating", "price"];
//const values = ["Spacious apartment in the city center", 4, 2153];
//// Change code below this line
//for (const key in apartment) {
//}
