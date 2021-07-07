// Function whitout return
function printSum(a, b) {
    console.log(a + b);
}

printSum(2, 3); // 5
printSum(2); // NaN
printSum(2, 10, 4, 5, 6, 7); // 12
printSum(); // NaN

// Function with return
function sum(a, b = 1) {
    return a + b;
}

console.log(sum(2, 3)); // 5
console.log(sum(2)); // 3
console.log(sum()); // NaN
