var readline = require("readline");
var fs = require("fs");  
var events = require('events');

var eEmitter = new events.EventEmitter();

if (!fs.existsSync("./data")) { 	
    fs.mkdirSync("./data"); 
}

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('enter num: ', function (answer) {
    startAction(answer);   
    rl.close();
});


function startAction(num){
    for(let i=0; i<num; i++){
 
        eEmitter.once("addTime",()=>{
            fs.writeFileSync(`./data/txt${i+1}.txt`, "");
        }); 

        eEmitter.on("addTime",(param)=>{
            console.log(`listner number ${i+1} got ${param}`);
            fs.appendFileSync(`./data/txt${i+1}.txt`, param);
        }); 

        eEmitter.once("readTime",()=>{
            fs.readFile(`./data/txt${i+1}.txt`, "utf-8", function(err, data){
                console.log(`listner number ${i+1} wrote ${data}`);
            });          
        }); 
    }

    for(let i=0;i<=60000;i+=10000){
        let eventName=(i==60000)?"readTime":"addTime";
        setTimeout(()=>{eEmitter.emit(eventName,new Date());} , i);
    }
   
}