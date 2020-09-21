function numberGame(reader, min = 1, max = 100) {
  const numberToFind = (min, max) => Math.round(Math.random() * (max - min) + min);
  askNumber("write a number",reader);


  function askNumber (text, reader)
  { 
    reader.question(text , (number) => { 
      if (number<numberToFind){console.log("Too low");}
      else if (number>numberToFind){console.log("Too high");}
      else if (number<1 && number>100) {console.log("The number is between 1 and 100");}
      else  {console.log(" You won!" );
        reader.close();}

      ;}
    );
  };




  module.exports = numberGame;


/*It's not a number: "This was not a number"
//Out of range: "The number is between 1 and 100"
//Too low: "Too low"
//Too high: "Too high"
//Success: "You won!*/
};