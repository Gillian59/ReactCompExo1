// import { index } from "./index.ts";

// Paste your previous `Tree` class here.
// Code the class here.
// Code the class here.
abstract class Tree {
    //  attributs
    age: number; 
    height: number = 0;
    alive: boolean = true ;

    // constructor 
    constructor(age: number){
        this.age = age;

        // calcul de la hauteur
        if(this.age > 20){
            this.height = 335;
        }
        else if (this.age>=1 && this.age <=9){
            this.height = this.age * 25 ;

        } else if (this.age >=10 && this.age<= 20){
            this.height = ((this.age-9) * 10) + 225;
        }
        
    }

// méthode
    abstract ageOneYear(): void;

    abstract isAlive(): boolean;
// détermine si l'arbre est mort ou non 

    seed(): void {
// définit l'âge et la hauteur sur 0 et alive sur true
        this.age = 0;
        this.height = 0;
        this.alive = true;
    }
}



// Leave the line below for tests to work properly

// Leave the line below for tests to work properly.
export { Tree };
