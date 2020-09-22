import "./index.js"; 



// remplacer les virgules par les points et arrondir le nombre vers le h plus haut
const parseNumber = (number) =>{
  const modifiedNumber = number.replace("," , ".");
  return parseFloat(modifiedNumber);
};

export function calculator (reader){
  
//  saisir un  un nb , un opérateur, un nb
console.log("Welcome to the  calculator");
reader.question("Choice a firstnumber? ", (firstNumber) => {
  reader.question("Choice a opérator? ", (opérator) => {
    reader.question("Choice a secondnumber? ", (secondNumber) => {
      
      const firstNumberModified = parseNumber(firstNumber);
      const secondNumberModified = parseNumber(secondNumber);

      let résult; 
switch (opérator){
  case "+" : 
    résult = firstNumberModified + secondNumberModified;
  break;

  case "-" : 
    résult = firstNumberModified - secondNumberModified;
  break;

  case "*" : 
    résult = firstNumberModified * secondNumberModified;
  break;

  case "/" : 
    résult = firstNumberModified / secondNumberModified;
  break;

  default : 
    console.log("erreur");
  
  calculator(reader);

}
  console.log(`${firstNumberModified} ${opérator} ${secondNumberModified}`);
      
      reader.close();
    });
  });  
});
}





    

    





 



 /*if "addition"
 print 'input 1' + 'input 2'
 if "subtraction"
     print 'input 1' - 'input 2'
 if "multiplication"
     print 'input 1' * 'input 2'
 if "division"
     print 'input 1' / 'input 2'
*/