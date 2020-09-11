function fizzBuzz() {
  // Code the function here.
  const tab = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  for (let i = 0 ; i < tab.length ; i++ ){

    if (tab [i] % 3 === 0) {
      tab [i] = "Fizz";
    }
    else if 
    (tab [i] % 5 === 0) {
      tab [i] = "Buzz";
    }
    else if 
    ((tab [i] % 3 === 0) && (tab [i] % 5 === 0)) {
      tab [i] = "FizzBuzz";
    }

  }
  return console.log(tab);
}

fizzBuzz(5);


// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
