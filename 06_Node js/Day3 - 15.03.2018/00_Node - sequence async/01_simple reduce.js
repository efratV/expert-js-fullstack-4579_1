/*
reduce() 
executes the callback function once for each element present in the array
The value returned by reduce() would be that of the last callback invocation.
*/ 

const array1 = ["w", "o", "r", "l","d"];
const array2 = [1,2,3,4,5];


/*
1. a -> sum result from all prev running
2. b -> content of currnt element
3. c -> index of current element
*/
const func = (a, b, c) => a + b;

console.log(array1.reduce(func)+ " hello");  //--> world hello

console.log(array1.reduce(func, "hello "));   //--> hello world


//1+2+3+4+5
console.log(array2.reduce(func));  //--> 15

//6+1+2+3+4+5
console.log(array2.reduce(func,6));   //--> 21

