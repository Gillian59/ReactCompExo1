type Supplies = {
  // Write your code here.
monitor: number;

interface Object {
  [key: string]: number;
  aKey: number;
} 



};
const myObject: Object = { aKey: 1 };

const supplies: Supplies = {};

supplies.monitor = 10;

// Leave the line below for tests to work properly.
export { supplies };


// type d'approvisionnement inconnu
// valeur = nombre d'articles que nous avons


// renseignez le type de fournitures
// pour pouvoir ajouter des paires de clés, valeurs
// sans le modifier chaque fois qu'on veut ajouter 
// une nouvelle clé , valeur dans l'objet fournitures