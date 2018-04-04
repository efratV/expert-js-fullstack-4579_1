var events = require('events');


//------------------------create EventEmitter
var eEmitter = new events.EventEmitter();


//------------------------create Listners
var listner1 = ({x,y,z})=> {console.log(`listner1 x=${x} y=${y}`);};
var listner2 = (obj)=> {console.log(`listner2 obj=${JSON.stringify(obj)}`);};
var listner3 = (...z)=> {
    console.log(`listner2 z[0]=${JSON.stringify(z[0])}`);
    console.log(`listner2 z=${JSON.stringify(z)}`);
};

eEmitter.addListener("test",listner1);
eEmitter.addListener("test",listner2);
eEmitter.addListener("test",listner3);

eEmitter.emit("test",{
    x:"Hello",
    y:"Moshiko"
},"secondParam");