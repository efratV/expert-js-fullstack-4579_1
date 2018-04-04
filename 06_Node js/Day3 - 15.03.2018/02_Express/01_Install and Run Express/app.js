// Express is a web server (like IIS, apache etc.) 
// and also a framework containing routes, MVC and more.
//---------------------------------
// Express does not comes with Node and we need first to install it via npm inside the project's directory.
// The command line to install Express: npm install express

// Create express module:
var express = require("express");

// Create the main app object:
var app = express();

// Listen to port 3000:
app.listen(3000, function(){
	console.log("Listening on http://localhost:3000 ... ");
});

// Now you can go to http://localhost:3000
// But you won't see any page returned,
// You'll only see: Cannot GET /
// This means that the server is working though.

