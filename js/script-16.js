//Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
// где имя свойства это имя сотрудника, а значение свойства это зарплата.
//Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const values = Object.values(salaries);
  console.log(salaries);
  for (let value of values) {
    totalSalary += value;
  }

  // Change code above this line
  return totalSalary;
}
console.log(countTotalSalary({})); // 0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400
