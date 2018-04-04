var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.setMaxListeners(3);

var listner1 = ()=> {console.log('listner1');};
var listner2 = ()=> {console.log('listner2');};
var listner3 = ()=> {console.log('listner3');};
var listner4 = ()=> {console.log('listner4');};



// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);
eventEmitter.on('connection', listner3);

if(events.EventEmitter.listenerCount(eventEmitter,'connection')<eventEmitter.getMaxListeners())
{
    eventEmitter.on('connection', listner4);
}

/*listenerCount -Returns the number of listeners for a given event. */
var eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log( "counter: "+eventListeners );

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner2 function
eventEmitter.removeListener('connection', listner2);
console.log("Listner2 is removed");


eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log( "counter: "+eventListeners );

// Fire the connection event 
eventEmitter.emit('connection');


eventEmitter.removeAllListeners('connection');
console.log("All Listners is removed");
eventEmitter.emit('connection');


