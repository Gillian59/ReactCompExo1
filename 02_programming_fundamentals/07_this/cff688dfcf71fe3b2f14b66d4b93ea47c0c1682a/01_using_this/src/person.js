const person = {
  firstname: "Abdel",
  lastname: "Sadki",
  age: 42,
  fullname: function () {
    return `${this.firstname} ${this.lastname}`;


  },
  // Complete here

  introduceMyself: function () {
    console.log(`Hello! I'm ${this.firstname} ${this.lastname} and I'm ${this.age}.`);
    
  },
  
  
  
};

person.introduceMyself();
module.exports = person;

//const introduction = person.introduceMyself();
//console.log(introduction); // Hello! I'm Abdel Sadki and I'm 42