//Дополни код присвоив объявленным переменным выражения обращения
//к соответствующим свойствам обьекта apartment используя синтаксис
//«квадратных скобок».
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
// Change code above this line

console.log(aptRating);
console.log(aptDescr);
console.log(aptPrice);
console.log(aptTags);
