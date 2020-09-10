/*
 ## Use some methods
 */
const tab = [0,1,2,3,4,5,6,7,8,9];
// Rewrite your array `digits` using `push`;
tab.push(10);
// rewrite your variable `last` using `length`;
let last = tab.length;
// create another array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
const litteralDigits = ["zéro", "un", "deux", "trois","quatre","cinq","six","sept","huit","neuf"];
// use `join` to create, into the variable `allDigits`, a string like this : `zero - one ...`.
const allDigits = litteralDigits.join("-");
console.log(allDigits);