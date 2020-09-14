function filter(tabNumber, word) {
  // Your code here
  
  
  const newTab = [];
  
  

  for (let i = 0 ; i<tabNumber.length; i++) {
  
    if (tabNumber [i] % 2 == 0) & (word = "even")

      tabNumber.push([i]);
      return console.log(newTab[i] + word );
    }
    else {
      tabNumber.push([i]);
      return console.log(newTab[i] + "odd" );

    }

  }

}

const tabNumber2 = [1,2,3,4,5,6,7,8,9];

filter(tabNumber2,even);
filter(tabNumber2,odd);

// Quand on dit que la fonction “handles weird strings” ca va dire que quand un mauvais string est donné, il faut renvoyer le tablea  u original
// do not remove this line, it is for tests
module.exports = filter;

//
//filter([1, 2, 3, 4, 5], "even"); // [2, 4];
//filter([1, 2, 3, 4, 5], "odd"); // [1, 3, 5];
//*/

