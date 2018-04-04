
// Importing our module:
var myModule = require("./my-module.js"); // ./ means same directory as current file.


//change by ref - is ok
myModule.myNum1.num=5;

console.log(myModule.myFunc1());  //--> output: 5

//change by val - is not ok
myModule.myNum2=5;

console.log(myModule.myFunc2()); //--> output: 3

myModule.myNum1={num:6};

console.log(myModule.myFunc1());  //--> output: 5