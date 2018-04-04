let arr: number[] = [1, 2, 3, 4,5];
let num1 = arr[0];
let num2 = arr[1];
let num3 = arr[2];


let [n1, n2, n3] = arr;
/*
n1:number=arr[0]
n2:number=arr[1]
n3:number=arr[2]
*/


console.log("num1", num1);
console.log("num2", num2);
console.log("num3", num3);

console.log("n1", n1);
console.log("n2", n2);
console.log("n3", n3);


let [a1, a2] = arr;
/*
a1:number=arr[0]
a2:number=arr[1]
*/

console.log("a1", a1);
console.log("a2", a2);



let [,b1,, b2] = arr;
/*
b1:number=arr[1]
b2:number=arr[3]
*/


console.log("b1", b1);
console.log("b2", b2);


//... - rest parameter syntax

let [c1,...c2] = arr;
/*
c1:number=arr[0]
c2:number[]=[arr[1],arr[2],arr[3],arr[4]]
*/
console.log("c1", c1);
console.log("c2", c2);


let [ ...d1] = arr;  //copy of array value (not ref)
/*
d1:number[]=[arr[0],arr[1],arr[2],arr[3],arr[4]]
*/
console.log("before change - d1", d1);  //[1, 2, 3, 4, 5]
console.log("before change - arr", arr);  //[1, 2, 3, 4, 5]

d1[0] = 9;  //will not effect arr[0]

console.log("after change - d1", d1);  //[9, 2, 3, 4, 5]
console.log("after change - arr", arr);  //[1, 2, 3, 4, 5]


let firstNum: number = 5;
let secondNum: number = 3;


console.log("before change - firstNum", firstNum);  //5
console.log("before change - secondNum", secondNum);  //3

[firstNum, secondNum] = changeNum(firstNum, secondNum);

console.log("after change - firstNum", firstNum);  //3
console.log("after change - secondNum", secondNum);  //5


let [x1, x2] = [6, 9];

console.log("before change - x1", x1);  //6
console.log("before change - x2", x2);  //9

[x1, x2] = [x2, x1];

console.log("after change - x1", x1);  //9
console.log("after change - x2", x2);  //6

function changeNum(n1:number,n2:number):number[]{

    let temp = n1;
    n1 = n2;
    n2 = temp;
    return [n1, n2];

}

function changeNum1(n1: number, n2: number): number[] {

    return [n2, n1];

}