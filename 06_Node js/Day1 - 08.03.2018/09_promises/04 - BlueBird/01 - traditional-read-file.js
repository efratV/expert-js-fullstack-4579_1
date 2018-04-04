var fs = require("fs");

fs.readFile("./person.json", "utf-8", function(err, data){
	
	// Error reading file (e.g. no such file):
	if(err) {
		console.log("Error reading file.");
	}
	else {

		try {
			data = JSON.parse(data);
			console.log(data);
			console.log("First name: " + data.firstName);
			console.log("Last name: " + data.lastName);
			console.log("Age: " + data.age);
		}
		catch(e) { // Error parsing data (e.g. no json format in file).
			console.log("Error: " + e.message);
		}
	
	}
	
});