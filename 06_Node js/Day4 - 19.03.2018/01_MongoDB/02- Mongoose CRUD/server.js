// This example shows CRUD on Mongoose.
// Note: need to do the following:
// 1. npm install express body-parser mongoose
// 2. Start MongoDB by:
//    a. Open a new Command-Line window.
//    b. cd "C:\Program Files\MongoDB\Server\3.6\bin"
//    c. Run: mongod (this will start MongoDB on port 27017)
// 3. Run this file in a new Command-Line window.

// Requires:
var express = require("express"); 
var bodyParser = require("body-parser"); 
var mongoose = require("mongoose"); 

// Create express app:
var app = express();

// Use middlewares:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create Model: 
var Product = mongoose.model("Product", {
    name: String,
    price: Number
});

// Connect to MongoDB: 
mongoose.connect("mongodb://localhost:27017/JohnBryceDB", function(err) {
    console.log("We're connected to MongoDB.");
    // There is no second parameter to this function.
})

// ---------- CRUD ----------

// Add product: 
app.post("/products", function(request, response) {
    var product = new Product(request.body);
    product.save();
    response.status(201); // Created.
    response.send(product);
});

// Get all products:
app.get("/products", function(request, response) {
	Product.find({}, function(err, products){
        response.send(products);
    });
});

// Get one product by id:
app.get("/products/:_id", function(request, response) {
    Product.findOne({_id: request.params._id}, function(err, product){
        response.send(product);
    });
});

// Update full product: 
app.put("/products/:_id", function(request, response) {
    Product.findOne({_id: request.params._id}, function(err, product){
        product.name = request.body.name;
        product.price = request.body.price;
        product.save();
        response.send(product);
    });
});

// Update part of a product: 
app.patch("/products/:_id", function(request, response) {
    Product.findOne({_id: request.params._id}, function(err, product){
        product.price = request.body.price;
        product.save();
        response.send(product);
    });
});

// Delete product: 
app.delete("/products/:_id", function(request, response) {
    Product.remove({_id: request.params._id}, function(err, product){
        response.status(204); // No Content.
        response.send();
    });
    // Note: the callback function is mandatory, or it doesn't work for some unknown reason.
});

// ---------- Additional queries ----------
// (must all be in some other routes or it will conflict with the CRUD routes)

// Get all products with a specific name:  (http://localhost:3000/productsByName/Apple)
app.get("/productsByName/:name", function(request, response) {
    Product.find({name: request.params.name}, function(err, products){
        response.send(products);
    });
});

// Get all products with a specific price:
app.get("/productsByPrice/:price", function(request, response) {
    Product.find({price: parseFloat(request.params.price)}, function(err, products){
        response.send(products);
    });
    // Note: in this example it will work also without the parseFloat, but for sure it is better to leave it this way. Also on other situation it won't work without it.
});

// Get all products which are equal or higher than min price:
app.get("/productsByMinPrice/:minPrice", function(request, response) {
    Product.find({price: {$gte: parseFloat(request.params.minPrice)}}, function(err, products){
        response.send(products);
    });
    // All conditionals: $lt, $lte, $gt, $gte, $ne
});

// Get all products by price range:
app.get("/productsByRange/:minPrice/:maxPrice", function(request, response) {
    Product.find({price: {$gte: parseFloat(request.params.minPrice), $lte: parseFloat(request.params.maxPrice)}}, function(err, products){
        response.send(products);
    });
});

// AND: Get all products with a specific name AND with a specific price: 
app.get("/productsByNameAndPrice/:name/:price", function(request, response){
    Product.find({name: request.params.name, price: parseFloat(request.params.price)}, function(err, products){
        response.send(products);
    });
});

// OR: Get all products with the given first name OR with the given second name: 
app.get("/productsByFirstNameOrSecondName/:name1/:name2", function(request, response){
    Product.find({$or: [{name: request.params.name1},{name: request.params.name2}]}, function(err, products){
        response.send(products);
    });
});

// RegEx: Get all products starting with a specific text: 
app.get("/productsByStartingText/:startingText", function(request, response){
    var pattern = new RegExp("^" + request.params.startingText);
    Product.find({name: {$regex: pattern} }, function(err, products){
        response.send(products);
    });
});

// Get sorted paged products:
app.get("/productsSortedPaged", function(request, response) {
        Product.find({}, [], { skip: 2, limit: 3, sort: "price" }, function(err, products){
        response.send(products);
    });
    // The [] is for specifying which properties to return in additional to the _id which will be returned by default.
    // Sending [] will return all properties.
    // Sending ["name"] will return _id and name.
    // Sending ["price"] will return _id and price.
    // Sending ["name", "price"] will return _id, name and price
    // If we won't send any [], only the _id will be returned.
});

// Run server: 
app.listen(3000, function(){
    console.log("Listening on http://localhost:3000");
});