

import * as uuid from "uuid";
import 


export default function createCustomer(reader){
    const customerNew = {
        id : uuid.v4(),
        firstname : "",
        lastName : "",
        email : "",
        birthday : "",
        city : "",
        country : "",

     };
    reader.question ("firstname ", (firstNameInput) => {
        reader.question (" lastname ", (lastNameInput) => {
            reader.question (" email ", (emailInput) => {
                reader.question (" birthday ", (birthdayInput) => {
                    reader.question (" city ", (cityInput) => {
                        reader.question (" city ", (countryInput) => {
        console.log(`${firstnameInput} ${lastNameInput} ${emailInput} ${birthdayInput} ${cityInput} ${countryInput}`);
        
        customerNew.firstname = firstNameInput,
        customerNew.lastName = lastNameInput,
        customerNew.email = emailInput,
        customerNew.birthday = birthdayInput,
        customerNew.city = cityInput,
        customerNew.country = countryInput,
    
                        });
                    });
                });
            });
        });


       
    
        });
        createCustomer();
        reader.close();
    
        };
    
createCustomer(reader);
// si je sélectionne 1, affiche "ajoute un nouveau client" 
 //  je doic créer un nouveau client 
