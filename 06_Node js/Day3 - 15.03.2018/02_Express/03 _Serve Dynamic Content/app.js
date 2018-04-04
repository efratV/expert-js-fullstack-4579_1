var express = require("express");
var app = express();

/*  
	Return dynamic content at "http://localhost:3000"
	-------------------------------------------------
	Note: Express server automatically 
	returns a "text/html" Mime-Type, 
	thus we don't have to state it.
	-------------------------------------------------
    Note: if you don't send back a response, 
	this function will hult the request and the page will stuck:
*/


// Return dynamic HTML at "http://localhost:3000/greetings":
app.use("/greetings", function(request, response){
	
	console.log("User requested http://localhost:3000/greetings ...");
	
	response.send("<h1>Hello to you!</h1>");
});

// Return dynamic JSON at "http://localhost:3000/person":
app.use("/person", function(request, response){
	
	console.log("User requested http://localhost:3000/person ...");
	
	var p = {firstName: "Zohar", lastName: "Moshiko", age: 20};
	
	response.send(p);
});


app.use("/", function(request, response){
	console.log("User requested http://localhost:3000 ...");
	response.send("<h1>Welcome to Express!</h1>");
});

app.listen(3000, function(){
	console.log("Listening on http://localhost:3000 ... ");
});