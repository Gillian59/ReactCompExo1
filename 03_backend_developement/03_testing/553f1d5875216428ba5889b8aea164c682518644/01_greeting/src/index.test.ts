import { greet } from "./index";
 
describe ("un bloc de test", () =>{

        test("affiche World", function(){
                const result = "World";
                expect(result).toBe("World");
        });

        test("affiche le nom en Majuscules", () => {
            let greetingName = "dupont";
                expect(greetingName.toUpperCase()).toBe("DUPONT");
        });


});
