var events = require('events');
let e = new events.EventEmitter();
let arr = ["f1", "f4", "f1", "f2", "f3"];

e.on("f1", f1);
e.on("f2", f2);
e.on("f3", f3);
e.on("f4", f4);

emitHandle();

function emitHandle(prevRes) {
    let str = arr.pop();

    if(str)
        e.emit(str,prevRes);
}

function f1() {
    setTimeout(
        () => {
            console.log("f1");
            emitHandle();
        }
        , 1000
    );

}


function f2() {
    setTimeout(
        () => {
            console.log("f2");
            emitHandle();
        }
        , 0
    );

}


function f3() {
    setTimeout(
        () => {
            console.log("f3");
            emitHandle();
        }
        , 500
    );

}


function f4() {
    setTimeout(
        () => {
            console.log("f4");
            emitHandle();
        }
        , 4000
    );

}