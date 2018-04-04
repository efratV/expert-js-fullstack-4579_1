var fs = require("fs");

function readJsonCat(fileName) {
	
	return new Promise(function(resolve, reject){

		fs.readFile(fileName, "utf-8", function(err, text){
			if(err) {
				reject(err);
			}
			else {
				try {
					var cat = JSON.parse(text);
					resolve(cat);
				}
				catch(e) {
					reject(e);
				}
			}
		});
	});
}

readJsonCat("./cat.json")
	.then(function(cat){
		console.log(cat.name);
		console.log(cat.type);
		console.log(cat.age);
	})
	.catch(function(err){
		console.log("Error: " + err.message);
	});
