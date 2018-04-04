enum COLOR {
    Blue,
    Green,
    Yellow
}

let c1: COLOR = COLOR.Blue;

//let c2: COLOR = COLOR.Red;  --> error

for (let i in COLOR) {
    console.log(i);
}

/*
output:
--------------------------
0
1
2
Blue
Green
Yellow
*/


for (let i: number = 0; COLOR[i]; i++){
    console.log("COLOR[i]", COLOR[i]);
}

/*
output:
--------------------------
Blue
Green
Yellow
*/


console.log("COLOR[0]", COLOR[0]);
/*
output:
--------------------------
Blue
*/
