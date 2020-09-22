import {} from "./index.js";

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



function createDisplay(choice){
reader.question ("Choose an action ", (choice) => {
    console.log(`Welcome !`);
    switch (choice) {
        case 1 :
            console.log("- Add new customer");
            break;
        case 2 : 
            console.log("- Add new - Access customer data");
            break;
        case 3 : 
            console.log("- Quit");
            break;
        default :
            console.log("error");

    };
    createDisplay(choice);
    reader.close();

    });
};

  
export display; 