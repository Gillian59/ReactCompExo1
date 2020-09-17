const car = {
  speed : 42 ,
  heure : 3,
  distance : 100,

  // Complete here
  start : function(reset){
    // fait un réset des données de la voiture
    this.speed = 0;
    this.heure = 0;
    this.distance = 0;
    return this;
  },

  changeSpeed : function(speed){

    // change la vitesse de la voiture
    this.speed = speed;
      
    return this;

  },
  drive : function(minute){

    // fait rouler la voiture à la vitesse précédemment définie pendant la durée donnée
    this.minute = minute;
    this.distance = (this.speed * (this.minute  / 60)) + this.distance;
    return this;

  },

  showDistance : function(){

    // affiche la distance parcourue en km : distance 
    
    console.log(`${this.distance} Km`);
    return this; 


  }

};

car.start().changeSpeed().drive().showDistance();

module.exports = car;


//✕ Should display distance when we don't change the speed (2 ms)
//✕ Should display the correct distance when we change the speed
//✕ Should be able to restart a car



//start() will reset all the car's data.
//changeSpeed(speed) will change the km/h speed of the car.
//drive(minutes) will make your car drive at the previously set speed for that amount of time (in minutes).
//showDistance() will print the distance you drove as the number of kilometers.
