function rand({ min = 0, max = 1000}) {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

const obj = { max: 50, min: 40 };
console.log(rand(obj)); // random number 49

console.log(rand({ max: 50, min: 40 })); // random number 46
console.log(rand({ min: 955 })); // random number 961

console.log(rand({})); // random number 294 with default parameter

// console.log(rand()); // TypeError: Cannot destructure property `min` of 'undefined' or 'null'.
