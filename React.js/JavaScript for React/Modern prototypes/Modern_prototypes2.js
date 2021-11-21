function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    alert(this.name);
  };
  
let rabbit = new Rabbit("Rabbit");
  
rabbit.sayHi(); //Ans : alert "Rabbit"
Rabbit.prototype.sayHi(); //Ans : alert undefined
Object.getPrototypeOf(rabbit).sayHi(); //Ans : alert undefined
rabbit.__proto__.sayHi(); //Ans : alert undefined