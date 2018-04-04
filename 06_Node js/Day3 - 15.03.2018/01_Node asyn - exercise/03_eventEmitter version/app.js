var fs = require("fs");
var readline = require("readline");
var events = require('events');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let eEmitter = new events.EventEmitter();
let emitQueue = ["step1", "step4"];
let arr = [];

eEmitter.on("step1", f1);
eEmitter.on("step2", f2);
eEmitter.on("step3", f3);
eEmitter.on("step4", f4);

emitHandle();


function emitHandle() {
        eEmitter.emit(emitQueue.shift());
}

function f1() {
    rl.question('How many programming languages do you know? ', (x) => {
        for (let i = 0; i < x; i++)
            emitQueue.unshift("step2","step3");
        emitHandle();
    });
}


function f2() {
    rl.question('programming languages name:', (x) => {
        arr.push({ name: x });
        emitHandle();
    });
}


function f3() {
    rl.question('programming languages exp:', (x) => {
        arr[arr.length - 1].years = x;
        emitHandle();
    });
}


function f4() {
    fs.writeFile("./lang.json", JSON.stringify(arr), () => { });
    rl.question('What language do you want to show? ', (x) => {
        console.log(JSON.stringify(arr.find(el => el.name == x)));
        rl.close();
    });
}






