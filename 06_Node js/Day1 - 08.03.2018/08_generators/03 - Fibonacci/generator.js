function* fibonacci(n) {
	var prev = 0, curr = 1;
	
	yield prev;
	yield curr;
	
	for(var i = 3; i <= n; i++) {
		next = prev + curr;
		yield next;
		prev = curr;
		curr = next;
	}
}

var iterator = fibonacci(6); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
var item = iterator.next();
while(!item.done) {
	console.log(item.value);
	item = iterator.next();
}