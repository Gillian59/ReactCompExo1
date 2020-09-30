import { rl } from "./reader";


function ask(question : string, reader: string): void {
  // Your code goes here
    
    reader.question ("Enter something", (reader) =>
      {
        return reader;
      })
    

      
    const promise = new Promise((resolve, reject) => {
      if (reader !== "") {
        resolve("Your input is : something");
      } else {
        reject("Invalid input");
      }

});
};

//ask(question, reader).then(result)=> console.log(result)
//ask(question, reader
 // ).catch((error) => console.error(error)

// Leave line below for tests to work properly
export default ask;