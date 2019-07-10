// Hoisting effect
console.log('a = ', a); // a = undefined
var a = 2;
console.log('a = ', a); // a = 2

// Hoisting code
var a;
console.log('a = ', a); // a = undefined
a = 2;
console.log('a = ', a); // a = 2

// -----------------------------

// console.log('b = ', b); // ReferenceError: Cannot access 'b' before initialization
let b = 2;
console.log('b =', b); // b = 2
