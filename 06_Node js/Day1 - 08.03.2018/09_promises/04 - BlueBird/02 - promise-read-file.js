// Note: we need to first install bluebird:
// npm install bluebird
// bluebird is a third party library which promisifies module functions and create promises from them.
// For each function it adds a promise function with the Async suffix.

// Import file system:
var fs = require("fs");

// Import bluebird: 
var bluebird = require("bluebird");

// Promisify all fs functions and creates a promise function from each:
bluebird.promisifyAll(fs);

// Use the promise version: 
fs.readFileAsync("./person.json", "utf-8")
	//.then(JSON.parse)
	.then(function(data){
		data = JSON.parse(data);
		console.log(data);
		console.log("First name: " + data.firstName);
		console.log("First name: " + data.lastName);
		console.log("First name: " + data.age);
	})
	//.catch(SyntaxError, function(e) { // Filter the catch - will be called when the json is incorrect format.
	//	console.log("Error: " + e.message);
	//})
	.catch(function(e) { // General catch - will be called when the file is not exists.
		console.log("Error reading file. Message: " + e.message);
	});
