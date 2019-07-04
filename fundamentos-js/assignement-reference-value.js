// atribuição por Referência
let a = {name: 'Teste'};
console.log(a); // { name: 'Teste' }

let b = a;
console.log(b); // { name: 'Teste' }

b.name = 'Opa';
console.log(b); // { name: 'Opa' }
console.log(a); // { name: 'Opa' }

b = null;
console.log(b); // null
console.log(a); // { name: 'Opa' }

b = a;
console.log(b); // { name: 'Opa' }
console.log(a); // { name: 'Opa' }

b.age = 2;
console.log(b); // { name: 'Opa', age: 2 }
console.log(a); // { name: 'Opa', age: 2 }

b = 10;
console.log(b); // 10
console.log(a); // { name: 'Opa', age: 2 }

b = a;
console.log(b); // { name: 'Opa', age: 2 }
console.log(a); // { name: 'Opa', age: 2 }

b = undefined;
console.log(b); // undefined
console.log(a); // { name: 'Opa', age: 2 }

// atribuição por valor (Tipos primitivos são passados por valor)
let c = 3;
console.log(c); // 3

let d = c;
console.log(d); // 3

d++;
console.log(d); // 4
console.log(c); // 3