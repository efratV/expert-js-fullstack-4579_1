// Note: must install some templating engine.
// Express comes with two templating engines: jade and EJS (Embedded JavaScript)
// In our examples we are using the EJS templating engine.
// For that you need to locally install EJS: 
// npm install ejs

var express = require("express");
var app = express();

// Define where is the root directory, so any static file could be loaded (e.g. the css file):
app.use(express.static(__dirname));

// Declare the view engine to use:
app.set("view engine", "ejs");

// The views are automatically searched inside the views folder.
// If you want to set them in a different folder: 
//app.set("views", __dirname + "/some-other-folder-for-our-views");

// Create route at "http://localhost:3000" returning default.ejs:
app.get("/", function(request, response){
	response.render("default");
});

// Create route including one parameter at: "http://localhost:3000/greetings/_____" returning greetings.ejs:
app.get("/greetings/:fullName", function(request, response){
	response.render("greetings", {fullName: request.params.fullName, description: "<p>welcome to my site.</p>"});
});

// Create route at: "http://localhost:3000/products" returning products.ejs:
app.get("/products", function(request, response){
	response.render("products", {products: ["Apple", "Banana", "Peach"]});
});

app.listen(3000, function(){
	console.log("Listening on http://localhost:3000 ... ");
});