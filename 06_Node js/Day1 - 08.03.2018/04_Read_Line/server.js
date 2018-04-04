var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//"question" is a built-in function in "readline" and gets the following parameters:
// 1) query: string  - msg before the user enters input
// 2) callback: (answer: string) => void - msg is called after the user enters the input and gets the input as a parameter
rl.question('What do you think of Node.js? ', function (answer) {
    console.log("Thank you for your valuable feedback: " + answer);
    rl.close();
});


