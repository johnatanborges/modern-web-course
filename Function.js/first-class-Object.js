// Function in JS is First-Class Object (Citizens)
// Higher-order function

// literal function
function fun1() {};

// function in variable
const fun2 = function() {};

const array = [function (a, b) { return a + b }, fun1, fun2];
console.log(array[0](2, 3)); // 5
