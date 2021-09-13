const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(values);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)) keys.push(key);
  values.push(values);

  // Change code above this line
  console.log(key);
  console.log(apartment[key]);
}
