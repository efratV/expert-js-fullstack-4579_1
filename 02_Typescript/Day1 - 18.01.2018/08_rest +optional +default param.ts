
let res1: number = f1("first call", 1, 2, 3, 4, 5);
console.log("res1:", res1);

let res2: number = f1("second call");
console.log("res2:", res2);


let arr: number[] = [1, 2, 3, 4];

//	Argument of type 'number[]' is not assignable to parameter of type 'number'
//let res3: number = f1("third call", arr);


let res3: number = f1("third call", arr[0],arr[1]);
console.log("res2:", res1);


function f1(n1: string, ...n2: number[]): number {
    console.log("in f1 n1 is:", n1);

    let res: number = 0;
    for (let i: number = 0; i < n2.length; i++)
        res += n2[i];

    return res / n2.length;
}



f2("First call to f2");
f2("Second call to f2",4);

//n2? is optional - must be at the end
function f2(n1: string,n2?: number): void {
    console.log("in f2 n1 is:", n1);
    console.log("in f2 n2 is:", n2);
}



f3("First call to f3");
f3("Second call to f3", 4);


function f3(n1: string, n2: number=8): void {
    console.log("in f3 n1 is:", n1);
    console.log("in f3 n2 is:", n2);
}


f4();  //n1: string="Zohar", n2: number = 8
f4(undefined, 10);  //n1: string="Zohar", n2: number = 10
f4("Second call to f4");  //n1: string="Second call to f4", n2: number = 8
f4("Third call to f4", 10);  //n1: string="Third call to f4", n2: number = 10


//n2? is optional
function f4(n1: string="Zohar", n2: number = 8): void {
    console.log("in f4 n1 is:", n1);
    console.log("in f4 n2 is:", n2);
}

f5();
function f5(n1: string = "Zohar", n2: string = n1): void {
    console.log("in f5 n1 is:", n1);
    console.log("in f5 n2 is:", n2);
}



f6(undefined,"Have A nice weekend!!!");
function f6(n1: string = "Zohar", n2: string): void {
    console.log("in f6 n1 is:", n1);
    console.log("in f6 n2 is:", n2);
}