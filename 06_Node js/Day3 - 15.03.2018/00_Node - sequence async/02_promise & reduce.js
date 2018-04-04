const arrLength = 2;

const arr = Array.apply(null, Array(arrLength)).map(() => ({ num1: 0, num2: 0 }));


console.log(`before all promises: ${JSON.stringify(arr)}`);

allProises(arr).then(() => console.log(`after all promises: ${JSON.stringify(arr)}`));

let countNum = 1;

function singlePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(countNum++), 1000);
    });
}

function allProises(arr) {
    return arr.reduce(outerReduce, Promise.resolve());
}

/*
1. a -> sum result from all prev running
2. b -> content of currnt element
3. c -> index of current element
*/
function outerReduce(a, b, c) {
    return a.then(() => {
        return singlePromise().then(x => {
            arr[c].num1 = x;
            return singlePromise();
        })
            .then(x => arr[c].num2 = x);
    })
        .catch(console.error);
}

