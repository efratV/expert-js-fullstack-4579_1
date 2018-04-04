function* rainbow() {
	
	yield "red";	
	yield "orange";
	yield "yellow";
	yield "green";
	yield "blue";
	yield "indigo";
	yield "violet";
}

// Get an iterator which can run on the collection: 
var iterator = rainbow(); 

// Get the first item: 
var item = iterator.next();

// Run on the collection if there are items: 
while(!item.done) {
	console.log(item.value);
	item = iterator.next();
}
