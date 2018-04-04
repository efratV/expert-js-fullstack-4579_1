/*
variable declaration syntax: 
[let / var] [variable_name] : [variable_type]
*/

let num: number;
let str: string;
let bool: boolean=true;
let anyVal: any;


let test;  //implicit typing to any (because no value is assigned in the declartion)
let inlineTest = 6;  //implicit typing to number

//Type 'string' is not assignable to type 'number'
//num = "Hello";  //--> compilation error

num = 3;


//Type 'string' is not assignable to type 'number'
//inlineTest = "zohar";//--> compilation error


//"any" - dinamyc type 
anyVal = 3;
anyVal = "Zohar";
anyVal = false;
anyVal = [1, 2, 3, 4];


//"any" - dinamyc type 
test = 3;
test = "Zohar";
test = false;
test = [1, 2, 3, 4];