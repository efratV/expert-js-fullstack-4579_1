function* getNumbers(n) {
	for(var i = -n; i <= n; i++) {
		yield i;
	}
}

var iterator = getNumbers(10);

var item = iterator.next();
while(!item.done) {
	console.log(item.value);
	item = iterator.next();
}