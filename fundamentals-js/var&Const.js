var a = 3;
let b = 4;

var a = 30;
// let b = 40; error: already declared;

console.log(a, b); // a = 30; b = 4;

a = 300;
b = 400;

console.log(a,b);

const c = 5;
// c = 50; error: assignment to constant variable;
console.log(c); // c = 5;
