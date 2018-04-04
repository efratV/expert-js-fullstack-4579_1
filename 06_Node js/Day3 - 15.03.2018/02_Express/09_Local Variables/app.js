// Local variables are variables which are passes to all views.

var express = require("express");
var app = express();
app.set("view engine", "ejs");

// Set local variables (can be strings, objects, arrays etc.):
app.locals.pageTitle = "Test Local Variables!";

app.get("/", function(request, response){
	response.render("default");
});

app.listen(3000, function(){
	console.log("Listening on http://localhost:3000 ... ");
});