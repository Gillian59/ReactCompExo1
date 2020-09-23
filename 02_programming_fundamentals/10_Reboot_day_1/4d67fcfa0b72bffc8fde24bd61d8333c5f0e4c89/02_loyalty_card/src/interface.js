import createCustomer from "./createCustomer";



console.log(`Welcome !`);

export default function createDisplay(reader){

const options = ["Add new customer", "Access customer data", "Quit"];
options.forEach((option, index) => console.log(`${index + 1} -  ${option}`));

reader.question ("Choose an action ", (choice) => {
    
    switch (choice) {
        case "1":
            console.log("- Add new customer");
            createCustomer(reader);
            break;
        case "2" : 
            console.log("- Add new - Access customer data");
            break;
        case "3" : 
            console.log("- Quit");
            break;
        default :
            console.log("error");

    };
    


    
    reader.close();

    });
};

 // si je sélectionne 1, affiche "ajoute un nouveau client" 
 //  je doic créer un nouveau client 