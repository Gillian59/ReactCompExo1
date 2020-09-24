
function handleTuple (tuple: [string, number]): void {
  
  // Code the function here.

  if (typeof value[0] === "string")  {
    console.log(`${value[0]} ${typeof value[0]}`);
  }
  else if (typeof value[1] === "number") {
    console.log(`${value[1]} ${typeof value[1]}`);
  } 
}


// const add = (a: number, b: number): number => a + b;

//imprimer (word is a string) seulement apres avoir verifier que word etait bien un string respecte bien la condition

// Leave the line below for tests to work properly.
export {handleTuple};


// let tuple: [string, number];
// Initialize it
//tuple = ["hello", 10]; // OK
// Initialize it incorrectly
//tuple = [10, "hello"]; // Error

// Or as a one liner
//const tuple: [string, number] = ["hello", 10];