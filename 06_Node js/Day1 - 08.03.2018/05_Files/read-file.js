var fs = require("fs");  //fs = file-system

// Read string:
fs.readFile("./data/myAppendFile.txt", "utf-8", function(err, data){
	// data will be sent as a string.
	// If the data is in json format, you need to JSON.parse it.
	console.log(data);
});


fs.readFile("./data/noSuchFile.txt", "utf-8", function(err, data){
	// data will be sent as a string.
	// If the data is in json format, you need to JSON.parse it.
	console.log("err.code " + err.code);
});

// Read json:
var p = require("./data/person.json"); // Will return object
console.log(p.firstName + " " + p.lastName);