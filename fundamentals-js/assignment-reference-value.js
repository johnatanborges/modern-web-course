// assignment by reference
let a = {name: 'Test'};
console.log(a); // { name: 'Test' }

let b = a;
console.log(b); // { name: 'Test' }

b.name = 'Hoop';
console.log(b); // { name: 'Hoop' }
console.log(a); // { name: 'Hoop' }

b = null;
console.log(b); // null
console.log(a); // { name: 'Hoop' }

b = a;
console.log(b); // { name: 'Hoop' }
console.log(a); // { name: 'Hoop' }

b.age = 2;
console.log(b); // { name: 'Hoop', age: 2 }
console.log(a); // { name: 'Hoop', age: 2 }

b = 10;
console.log(b); // 10
console.log(a); // { name: 'Hoop', age: 2 }

b = a;
console.log(b); // { name: 'Hoop', age: 2 }
console.log(a); // { name: 'Hoop', age: 2 }

b = undefined;
console.log(b); // undefined
console.log(a); // { name: 'Hoop', age: 2 }

// assignment by value (Primitive types)
let c = 3;
console.log(c); // 3

let d = c;
console.log(d); // 3

d++;
console.log(d); // 4
console.log(c); // 3
