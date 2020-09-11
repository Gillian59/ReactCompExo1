function range(fromNumber, toNumber) {
  // Code the function here.
  const result = [];
  if (fromNumber < toNumber) {
    for (i = fromNumber; i <= toNumber; i++) {
     result.push(i);
    }
  }
  else if (fromNumber > toNumber) {
    for (i = fromNumber; i >= toNumber; i--) {
     result.push(i);
    }
  }
    
  return result;
}

console.log(range(1,4));

console.log(range(4,1));

// Do not remove last lines, it is for tests
module.exports = range;


//const ascArray = range(1, 4);
// => [1, 2, 3, 4]

//const descArray = range(4, 1);
// => [4, 3, 2, 1]

