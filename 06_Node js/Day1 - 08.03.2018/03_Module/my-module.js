// A module is one logic unit which can contain properties and functions.
// The module name is the file name.
// Each module resides in a different js file.


let myNum1 = {num:3};
let myNum2 = 3;
// Exporting a function:
let myFunc1 = function() {
	return myNum1.num;
};


let myFunc2 = function() {
	return myNum2;
};


module.exports={
	myNum1,
	myNum2,
	myFunc1,
	myFunc2
}