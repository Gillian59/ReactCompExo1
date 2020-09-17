const machine = {
  // Complete here
  

  litersOfCoffee : 0,
  fillWithLitersOfCoffee: function (litersOfCoffee){
    this.litersOfCoffee = this.litersOfCoffee + litersOfCoffee;
    
  },

  expresso: function (){

  
    if (this.litersOfCoffee >=0.08){
      console.log(this.litersOfCoffee = this.litersOfCoffee-0.08);
      return true;
    } else {
      return false;    }
    
  },

  longCoffee: function () {
    
    if (this.litersOfCoffee>=0.15){
      console.log(this.litersOfCoffee = this.litersOfCoffee-0.15);
      return true;
    } else {
      return false;   }
    
  },

};
module.exports = machine;

// je remplis la machine de 10 litre et j'affiche les litres
// je m'assure qu'en fonction de la quantité dans la machine, je peux avoir un expresso et je retourne true
// j'affiche la quantité restante
// je m'assure qu'en fonction de la quantité dans la machine, je peux avoir un café long et je retourne true
// j'affiche la quantité restante

// et à la fin j'affiche la quantité à O,02
// je souhaite un expresso mais comme la quantité n'est pas suffisante, il affiche false 

// --------------------------

//machine.fillWithLitersOfCoffee(10);
//console.log(machine.litersOfCoffee); // => 10
//console.log(machine.expresso()); // => true
//console.log(machine.litersOfCoffee); // => 9.92
//console.log(machine.longCoffee()); // => true
//console.log(machine.litersOfCoffee); // => 9.77

//// some more people ordering coffee here
// ...
//console.log(machine.litersOfCoffee); // => 0.02
//console.log(machine.expresso()); // => false