// Partial is a piece of UI we can include inside a view.
// Note: according the following, EJS doesn't support layout yet:
// https://scotch.io/tutorials/use-ejs-to-template-your-node-application#advanced-layouts

var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(request, response){
	response.render("default", {copyrightsYear: 2018});
});

app.listen(3000, function(){
	console.log("Listening on http://localhost:3000 ... ");
});