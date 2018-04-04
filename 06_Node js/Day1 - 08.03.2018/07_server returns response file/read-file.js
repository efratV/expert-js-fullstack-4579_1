var fs = require("fs");  //fs = file-system
var content="<h1>default msg</h1>";
// Read string:
fs.readFile("./data/content.html", "utf-8", function(err, data){
	// data will be sent as a string.
	// If the data is in json format, you need to JSON.parse it.
	content=data;
});


// Create http module:
var http = require("http");
var counter=0;
// Create http server:
var myServer = http.createServer(function(request, response){
	
	console.log("User requested page...");
	
	// Send back header:
	response.writeHead(200, {"Content-Type": "text/html"});
	
	// Send back content: 
	response.write(content);
	
	// End response:
	response.end();
});

// Start listening on port 3000:
myServer.listen(3000);
