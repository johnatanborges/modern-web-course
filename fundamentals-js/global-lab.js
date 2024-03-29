let a = 3;

globalThis.b = 123;

this.c = 456;
this.d = false;
this.e = 'test';

console.log(a); // 3
console.log(global.b); // 123
console.log(this.c); // 456
console.log(module.exports.c); // 456
console.log(module.exports === this); // true
console.log(module.exports); // { c: 456, d: false, e: 'test' }

// no let and var variable
abc = 3;
console.log(global.abc); // 3

// module.exports = { e: 456, f: false, g: 'test" }
console.log(module.exports); // { c: 456, d: false, e: 'test' }
