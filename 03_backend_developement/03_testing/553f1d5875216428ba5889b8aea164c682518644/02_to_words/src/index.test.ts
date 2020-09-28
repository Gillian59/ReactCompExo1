import { toWords } from "./index";

test("vérifier que la fonction remplace bien le  ! par un : ", function (){
 

 expect(toWords("je relis, la phrase !")).toBe("jerelislaphrase");

});

