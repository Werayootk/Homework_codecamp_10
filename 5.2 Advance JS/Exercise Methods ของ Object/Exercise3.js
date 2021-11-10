let calculator = {
  read() {
    this.number1 = Number(prompt("Enter first number"));
    this.number2 = Number(prompt("Enter second number"));
  },
  mul() {
    return this.number1 * this.number2;
  },
  sum() {
    return this.number1 + this.number2;
  },
};
