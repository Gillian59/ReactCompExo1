// on peut choisir le nom que l'on souhaite pour rappeler l'export par défaut de la fonction du fichier interface
import interfaces from "./interface.js";

import readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
  

// rappelle de la fonction du fichier interface du nom modifié voir import plus haut pour l'explication

interfaces(reader);