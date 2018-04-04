var events = require('events');


//------------------------create EventEmitter
var eEmitter = new events.EventEmitter();


//------------------------create Listners
var listner1 = ()=> {console.log('listner1');};
var listner2 = ()=> {console.log('listner2');};
var listner3 = ()=> {console.log('listner3');};
var listner4 = ()=> {console.log('listner4');};

/*
 -------------  addListener(event, listener)
Adds a listener at the end of the listeners array for the specified event. 
No checks are made to see if the listener has already been added. 
Multiple calls passing the same combination of event and listener 
will result in the listener being added multiple times. 

Returns emitter, so calls can be chained.
*/
eEmitter.addListener('myTest', listner1);


/*
 -------------  on(event, listener)
Adds a listener at the end of the listeners array for the specified event. 
No checks are made to see if the listener has already been added. 
Multiple calls passing the same combination of event and listener 
will result in the listener being added multiple times. 

Returns emitter, so calls can be chained.
 */
eEmitter.on('myTest', listner2);
eEmitter.on('myTest', listner2);

/*
 -------------  once(event, listener)
Adds a one time listener to the event. 
This listener is invoked only the next time the event is fired, 
after which it is removed. 

Returns emitter, so calls can be chained.
 */
eEmitter.once('myTest', listner3);

console.log('first emit----------------------------------------');
// Fire the myTest event 
eEmitter.emit('myTest');



console.log('second emit----------------------------------------');
// Fire the myTest event 
eEmitter.emit('myTest');

