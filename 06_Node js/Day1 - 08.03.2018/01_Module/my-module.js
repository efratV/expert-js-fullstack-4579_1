// A module is one logic unit which can contain properties and functions.
// The module name is the file name.
// Each module resides in a different js file.

// Exporting a string from this module:
exports.myText = "Hello All!";

// Exporting an object:
exports.myObj = {
	firstName: "Bob",
	lastName: "Alice"
};

// Exporting a function:
exports.myFunc = function() {
	console.log("myFunc");
	console.log(exports.myText); // Using the above exported string.
};