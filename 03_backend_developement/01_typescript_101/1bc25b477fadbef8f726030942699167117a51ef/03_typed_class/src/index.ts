class Bird {
  // Write your code here.
// propriétés
age : number ;


// constructor

constructor(age: number) {
  this.age = age;
}


// méthodes 

sing(): void {
  console.log("Cui cui")
}

fly(seconds: number):void {
 
  if (this.age<=1){
        console.log("The bird is too young to fly");
   }
  else if((this.age>1) && (this.age <= 3)){
        const distance = seconds;
        console.log(`the bird should fly at a speed of ${distance} meter in ${seconds} seconds`);
    }
   else { 
        const distance = seconds * 2 ;
          console.log(`the bird should fly at a speed of 2 * ${distance} meter in ${seconds} seconds`);
         }

}



}

// Leave the line below for tests to work properly.
export { Bird };
