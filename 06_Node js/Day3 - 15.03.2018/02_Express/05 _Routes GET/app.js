/*
	Route defines which content to return according the url format.
	The route order is important 
	because the first route that matches the url pattern - will be taken.
*/
var express = require("express");
var app = express();

// Create route at "http://localhost:3000" returning html
app.get("/", function(request, response){
	response.send("<h1>Welcome to Express!</h1>");
});

// Create route at "http://localhost:3000/greetings" returning html:
app.get("/greetings", function(request, response){
	response.send("<h1>Hello to you!</h1>");
});

// Create route including one parameter at: "http://localhost:3000/greetings/_____"
app.get("/greetings/:fullName", function(request, response){
	response.send("<h1>Hello " + request.params.fullName +"</h1>");
});

// Create route including two parameters at: "http://localhost:3000/greetings/_____/_____"
// The ? means that this is not a mandatory param, but if not send, the value will be undefined:
app.get("/greetings/:firstName?/:lastName?", function(request, response){
	response.send("<h1>Hi " + request.params.firstName + " " + request.params.lastName +"</h1>");
});

// Create a RegEx matching route (e.g. any three digits route).
//	/		Start JavaScript Regex.
//	^		Start Regex expression for matching on beginning.
// 	\/		First / of the route (must specify it or there will be no matching).
// 	\d{3}	Three digits.
// 	$		End Regex expression for matching on the end.
//	/		End JavaScript Regex.
app.get(/^\/\d{3}$/, function(request, response){
	response.send("<h1>3 digits :-)</h1>");
});

// Create any other route (must be last):
app.get("*", function(request, response){
	response.send('<div style="text-align: center">Sorry, Page Not Found</div>');
});

app.listen(3000, function(){
	console.log("Listening on http://localhost:3000 ... ");
});