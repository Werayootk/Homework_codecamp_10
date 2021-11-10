function sum(obj) {
  let totalSalaries = 0;
  for (let key in obj) {
    totalSalaries += obj[key];
  }
  return totalSalaries;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
sum(salaries);
console.log(sum(salaries));
