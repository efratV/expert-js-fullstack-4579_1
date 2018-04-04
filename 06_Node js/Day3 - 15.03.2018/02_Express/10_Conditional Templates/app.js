// Conditional Templates are just "if" statements we can use inside the views
// and to check if a Model variable is present, and create the view accordingly.

var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(request, response){
	response.render("default", {
		someHeader: "Conditional Template Example"
	});
});

app.get("/default", function(request, response){
	response.render("default");
});

app.listen(3000, function(){
	console.log("Listening on http://localhost:3000 ... ");
});