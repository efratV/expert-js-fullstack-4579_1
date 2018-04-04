var express = require("express");
var fs = require("fs");

var app = express(); // Create app.

// Return static page - index.html
app.use(express.static(__dirname));

// When the user surf to the root directory - start this function:
app.use("/animal", function(request, response){
	console.log("User requested http://localhost:3000/animal")
	
	fs.readFile("./animal.json", "utf-8", function(err, text){
		if(err) {
			response.send({error: "Error reading file..."});
		}
		else {
			response.send(JSON.parse(text));
		}
	});
});

app.use("/allAnimals", function(request, response){
	console.log("User requested http://localhost:3000/allAnimals")
	
	fs.readFile("./allAnimals.json", "utf-8", function(err, text){
		if(err) {
			response.send({error: "Error reading file..."});
		}
		else {
			response.send(JSON.parse(text));
		}
	});
});


app.listen(3000, function(){
	console.log("Listening on: http://localhost:3000");
});

