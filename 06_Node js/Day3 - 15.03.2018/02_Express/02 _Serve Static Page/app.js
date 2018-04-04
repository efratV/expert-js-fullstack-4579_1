var express = require("express");
var app = express();

// Serve index.html which resides in the project's directory.
// Note: the app.use() is a low level function 
// for serving all verbs before any route.
// Its main usage is for running some middleware 
// which can be even a different app:
app.use(express.static(__dirname));

app.listen(3000, function(){
	console.log("Listening on http://localhost:3000 ... ");
});

// Run this file and then surf to http://localhost:3000 
//and you'll get the index.html.