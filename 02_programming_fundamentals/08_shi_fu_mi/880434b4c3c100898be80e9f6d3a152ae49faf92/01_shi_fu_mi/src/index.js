const readline = require("readline");

const clear = () => console.log("\x1B[2J\x1B[0f");


const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const moves = {

rock :
[
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ],
  
  paper :
  [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],
  
  scissors :
  [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ],
};

clear();
console.log("Welcome to ShiFuMi");

// afficher la liste des mouvements pour les proposer au joueur :
// faire une boucle pour lire l'objet en tableau 
Object.keys(moves).forEach((moveName, index) => {
    console.log (`${index + 1}  :  ${moveName}`);
});


// choix aléatoire de la machine
const FindNbAleatMac = Math.floor(Math.random() * 3);
const FindIndexAleatMac = Object.keys(moves)[FindNbAleatMac];
const FindValueAleatMac = moves[FindIndexAleatMac];

// inverser le mouvement (encore en recherche car je cherche une autre solution)
const reverseFindValueAleatMac = FindValueAleatMac.reverse();
console.log(reverseFindValueAleatMac);

// le joueur sélectionne un mouvement 
// affichage en 1er du choix du joueur et en 2nd du choix de l'ordinateur 
reader.question("Please choose a move\n> ", (moveChoiced) => {
  // Handle the move

    const index = (moveChoiced - 1);
    const move = Object.keys(moves)[index];
    const moveSymbol = moves[move];
    console.log("votre choix : ");
    console.log(moveSymbol.join("\n"));
    console.log("le choix de l'ordinateur");
    console.log (FindValueAleatMac.join("\n"));



// comparaison des choix du joueur et de l'ordinateur
/*function compare (){
  if (moveSymbol === this.rock && FindValueAleatMac === this.rock){
    console.log("you are equal");
  } else if 
    (moveSymbol === this.rock && FindValueAleatMac === this.scissors){
    console.log("you are win");
    }
    else if  
    (moveSymbol === this.paper && FindValueAleatMac === this.rock){
    console.log("you are win");
    }
    else if(moveSymbol === this.scissors && FindValueAleatMac === this.paper){
    console.log("you are win");
    }
    else 
      console.log("you are lose");


  }
  
 compare();
 */




  reader.close();
  
});










