var fs = require("fs");

var readJson = new Promise(function(resolve, reject){
	
	fs.readFile("./cat.json", "utf-8", function(err, text){
		
		if(err) {
			reject();
		}
		else {
			try {
				var cat = JSON.parse(text);
				console.log(cat.name);
				console.log(cat.type);
				console.log(cat.age);
			}
			catch(err) {
				reject();
			}
		}
	});
});

readJson
	.then(function(){
		console.log("OK");
	})
	.catch(function(){
		console.log("Error");
	});
	
	