function sumInput() {
  let value = prompt("Add Input :");
  let sum = 0;
  let addedInput = [];

  while (isFinite(value) === true) {
    addedInput.push(Number(value));
    sum += Number(value);
    value = prompt("Add another Input :");
  }
  return `Total Input = ${sum}`;
}

console.log(sumInput());
