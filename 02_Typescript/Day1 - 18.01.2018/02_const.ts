const PI: number = 3.14;

/*
Left-hand side of assignment expression cannot be a constant or a read-only property.	
--------------------
PI = 3;  //--> compilation error
*/


/*
'const' declarations must be initialized
---------------------
const TAX: number;  //--> compilation error
TAX = 0.17;
 */


const DAYS_IN_WEEK = 7;


const BESR_STUDENT: any = {};

BESR_STUDENT.name = "Zohar";
BESR_STUDENT.name = "Moshiko";
BESR_STUDENT.grade = 100;


document.write(BESR_STUDENT.name);


/*
Argument of type 'number' is not assignable to parameter of type 'string'
--------------------
document.write(DAYS_IN_WEEK);  //--> compilation error
*/

/*
Left-hand side of assignment expression cannot be a constant or a read-only property.	
--------------------
BESR_STUDENT = {};  //--> compilation error
*/
