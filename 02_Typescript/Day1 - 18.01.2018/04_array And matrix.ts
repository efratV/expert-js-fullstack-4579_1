//----------------------------------Array---------------------------------
let arr1: number[];
let arr2: Array<number>;


//init empty array
let arr3: number[]=[];  //empty array
let arr4: Array<number> = new Array<number>();  //empty array
let arr5: Array<number> = new Array<number>(0);  //empty array - 0 elements


//init array with values
let arr6: number[] = [1,3,6,8];  //array with 4 elements
let arr7: Array<number> = new Array<number>(1, 3, 6, 8);  //array with 4 elements



let arr8: number[] = [3];  //--> arr8=[3]
let arr9: Array<number> = new Array<number>(3);  //--> arr9=[undefined,undefined,undefined]

arr9[18] = 20;
arr9.push(30);
console.log("arr9", arr9);


let arr10: number[];


//Type 'string' is not assignable to type 'number'
//arr10[0] = "Zohar"; //-->compilation error



//Uncaught TypeError: Cannot set property '0' of undefined
//arr10[0] = 3;  //--> runTime error - arr10 is undefined


let arr11: number[]=[];
arr11[9] = 3;
console.log("arr11", arr11.toString());


//----------------------------------Matrix---------------------------------
let mat1: number[][];
let mat2: Array<number[]>;
let mat3: Array<Array<number>>;




let mat5: number[][];  //mat5=undefined
mat5 = new Array<Array<number>>(3);  //mat5= [undefined,undefined,undefined]
for (let i: number = 0; i < mat5.length; i++) {
    mat5[i] = new Array<number>(3);
}
/*
mat5= [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
      ]
*/

for (let i: number = 0; i < mat5.length; i++) {
    for (let j: number = 0; j < mat5[i].length; j++) {
        mat5[i][j] = i+j;
    }
}
/*
mat5= [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
]
*/

console.log("mat5", mat5);



let mat6: number[][];  //mat5=undefined
mat6 = new Array<Array<number>>(3);  //mat6= [undefined,undefined,undefined]
for (let i: number = 0; i < mat6.length; i++) {
    mat6[i] = new Array<number>(i+1);
}
/*
mat6= [
        [undefined],
        [undefined, undefined],
        [undefined, undefined, undefined],
      ]
*/

for (let i: number = 0; i < mat6.length; i++) {
    for (let j: number = 0; j < mat6[i].length; j++) {
        mat6[i][j] = i + j;
    }
}

/*
mat6= [
    [0],
    [1, 2],
    [2, 3, 4],
]
*/


mat6[0][9] = 9;

/*
mat6= [
    [0,undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 9],
    [1, 2],
    [2, 3, 4],
]
*/

console.log("mat6", mat6);