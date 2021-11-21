function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

// Rabbit.prototype = {}; 
// alert( rabbit.eats ); //Ans : true

// Rabbit.prototype.eats = false;
// alert( rabbit.eats ); //Ans : false

// delete rabbit.eats;
// alert( rabbit.eats ); //Ans : true

delete Rabbit.prototype.eats;
alert(rabbit.eats); //Ans : undefided
