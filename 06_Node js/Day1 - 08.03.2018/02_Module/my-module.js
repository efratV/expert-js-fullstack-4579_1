// A module is one logic unit which can contain properties and functions.
// The module name is the file name.
// Each module resides in a different js file.

// Exporting a string from this module:
let myText = "Hello All!";

// Exporting an object:
let myObj = {
	firstName: "Bob",
	lastName: "Alice"
};

// Exporting a function:
let myFunc = function() {
	console.log("myFunc");
	console.log(myText); // Using the above exported string.
};


module.exports={
	myText,
	myObj,
	myFunc
}