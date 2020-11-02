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
(Object.keys(moves)).forEach((key, index) => console.log(`${index + 1} - ${key}`));

const game = () => {
  reader.question("Please choose a move\n> ", (moveChoiced) => {
    if (moveChoiced === "1" || moveChoiced === "2" || moveChoiced === "3"){
      const moveList = Object.entries(moves);

      const choiceUser = moveList[moveChoiced - 1];
      const choiceIa = moveList[Math.floor(Math.random() * moveList.length)];

      console.log(choiceUser);
      console.log(choiceIa);

        if (choiceUser === [0] && choiceIa === [2]) {
          console.log("vous avez gagné");
          console.log(choiceUser[0]);
          console.log(choiceIa[2]);
        } else if (choiceUser === "1" && choiceIa === "0") {
          console.log("vous avez gagné");
        } else if (choiceUser === "2" && choiceIa === "1") {
          console.log("vous avez gagné");
        } else if (choiceUser === choiceIa) {
            console.log("vous êtes à égalité");
        } else {
          console.log("vous avez perdu");
        }

        
      reader.close();
      
       
    } else {
      console.log("votre choix n'est pas valide, veuillez saisir un chiffre entre 1 et 3");
      game();
    }
  });
}

game();











