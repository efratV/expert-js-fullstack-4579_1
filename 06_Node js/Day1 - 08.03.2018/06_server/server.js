
// Create http module:
var http = require("http");
var counter=0;
// Create http server:
var myServer = http.createServer(function(request, response){
	
	console.log("User requested page...");
	
	// Send back header:
	response.writeHead(200, {"Content-Type": "text/html"});
	
	// Send back content: 
	response.write("<h1>Hello All! request number: "+(counter++)+"</h1>");
	
	// End response:
	response.end();
});

// Start listening on port 3000:
myServer.listen(3000);