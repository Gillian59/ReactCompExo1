import { Tree } from "./Tree";

// Code your class here.

abstract class  OrangeTree extends Tree {

    // attributs
    age: number
    height: number
    alive : boolean

    oranges: string[] = [];

    // constructor
    

    // méthodes 
    ageOneYear(): void{ 
        this.age = this.age + 1
        this.height = this.height +1
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

    isAlive(): boolean{
        return true;
    }

  

    seed(): void {
// définit l'âge et la hauteur sur 0 et alive sur true
        this.age = 0;
        this.height = 0;
        this.alive = true;
    }

    growOranges(): void {
        this.oranges = [];

    }
}


// Leave the line below for tests to work properly.
export { OrangeTree };

