var fs = require("fs");
var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

singlePromise('How many programming languages do you know? ')
    .then(x => allProises(x))
    .then(() => {
        fs.writeFile("./lang.json", JSON.stringify(arr), () => { });
        return singlePromise('What language do you want to show?');
    })
    .then(x => {
        console.log(JSON.stringify(arr.find(el => el.name == x)));
        rl.close();
    });


function singlePromise(msg) {
    return new Promise((resolve, reject) => {
        rl.question(msg, resolve);
    });
}

function allProises(length) {
    for (let i = 0; i < length; arr[i++] = {});
    return arr.reduce(outerReduce, Promise.resolve());
}

function outerReduce(prevRes, currentElement, currentIndex) {
    return prevRes
        .then(() => singlePromise('programming languages name:'))
        .then(x => {
            arr[currentIndex].name = x;
            return singlePromise('programming languages exp:');
        })
        .then(x => arr[currentIndex].years = x);
}

