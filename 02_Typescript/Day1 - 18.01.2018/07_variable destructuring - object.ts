let student: { firstName: string, age: number, grade:number, city:string }  = {
    firstName: "Zohar",
    age: 15,
    grade: 100,
    city:"Tel-Aviv"
};

let {firstName:firstName1, age}: { firstName: string, age:number} = student ;

/*
name1=student.name
age1=student.age
*/

console.log("firstName", firstName1);
console.log("age", age);


let {firstName: name1, age: age1}: { firstName: string, age: number } = student;

console.log("name1", name1);
console.log("age1", age1);


let { firstName: f1, age: f2, grade: f3, city: f4 }: { firstName: string, age: number, grade: number, city: string } = student;


console.log("student", student);
console.log("f1", f1);

f1 = "Moshiko";



console.log("student", student);
console.log("f1", f1);