function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  // Change code above this line
  return propCount;
}

//Объявлена функция countProps(object)
console.log(countProps({})); // 0
console.log(countProps({ name: "Mango", age: 2 })); //2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //3
//Функция подсчитывает только собственные свойства объекта
