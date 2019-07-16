console.log(soma(3, 4)); // 7
// console.log(sub(3, 4)); // ReferenceError: Cannot access 'sub' before initialization
// console.log(mult(3, 4)); // ReferenceError: Cannot access 'mult' before initialization

// function declaration
function soma (x, y) {
    return x + y;
}

// function expression
const sub = function(x, y) {
    return x - y;
}
console.log(sub(3, 4)); // -1

// name function expression
const mult = function multi(x, y) {
    return x * y;
}
console.log(mult(3, 4)); // 12
