var fs = require("fs");

function writeRangeFile(min, max) {
	return new Promise(function(resolve, reject){
		var arr = [];
		for(var i = min; i <= max; i++) {
			arr.push(i);
		}
		fs.writeFile("./range.json", JSON.stringify(arr) , function(err){
			if(err) {
				reject(err);
			}
			else {
				resolve();
			}
		});
	});
}

writeRangeFile(100, 200)
	.then(function(){
		console.log("Good");
	})
	.catch(function(err){
		console.log(err.message);
	});