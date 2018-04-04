var fs = require("fs");
var readline = require("readline");

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//---------------callback hell------------
rl.question('How many programming languages do you know? ', function (answer) {
	let arr = [];

	let funcGetLang = (x) => {
		rl.question('programming languages name:', function (answer1) {
			rl.question('programming languages exp:', function (answer2) {
				arr.push({
					name: answer1,
					years: answer2
				});

				if (x == 1) {
					fs.writeFile("./lang.json", JSON.stringify(arr), () => {
						rl.question('What language do you want to show?', function (answer3) {
							console.log(JSON.stringify(arr.find(el => el.name == answer3)));
							rl.close();
						});
					});

				}
				else {
					funcGetLang(x - 1);
				}
			});
		});
	}
	funcGetLang(parseInt(answer));

});
