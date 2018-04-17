const {EventEmitter}=require("events");

let myEmitter=new EventEmitter();
let func1=(...x)=>console.log(x);

//register a listner to the event
myEmitter.on("testEvent",func1);    // stream
myEmitter.once("testEvent",func1);  // non-stream (like promise)

/**
 * @function emit - rais the event
 * @param eventName string
 * @param eventParams params (...args)
 */
myEmitter.emit("testEvent","first params",1,true);
myEmitter.emit("testEvent","second params");