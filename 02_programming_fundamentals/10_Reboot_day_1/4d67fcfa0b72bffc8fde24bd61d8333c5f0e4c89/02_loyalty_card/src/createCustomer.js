
import {} from "./index.js";
import {} from "./interface.js";

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function createCustomer(reader){
    reader.question ("firstname ", (firstName) => {
        reader.question (" lastname ", (lastName) => {
            reader.question (" email ", (email) => {
                reader.question (" birthday ", (birthday) => {
                    reader.question (" city ", (city) => {
                        reader.question (" city ", (country) => {
        console.log(${firstname} ${lastName} ${email}) ${birthday} ${city} ${country};
         customerNew = {
            id : 
            firstname : firstname,
            lastName : lastName,
            email : email,
            birthday : birthday,
            city : city,
            country : country,

         }                   
    
        });
        createCustomer();
        reader.close();
    
        };
    
    




export createCustomer ;