// Anonymous function
const printSum = function (a, b) {
    console.log(a + b);
};

printSum(2, 3); // 5

// Arrow function
const sum = (a, b) => {
    return a + b;
};

console.log(sum(2, 3)); // 5

// implicit return
const sub = (a, b) => a - b;

console.log(sub(5, 3)); // 2

const print = a => console.log(a);

print('Nice!!!'); // Nice!!!
