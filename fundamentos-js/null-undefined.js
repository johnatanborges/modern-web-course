
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

// ---------------------------------

let valor; // não inicializado
console.log(valor); // undefined

// console.log(novoValor); // ReferenceError: novoValor is not defined


valor = null; // ausência de valor
console.log(valor); // null
// console.log(valor.toString()); // TypeError: Cannot read property 'toString' of null

const produto = {};
console.log(produto.preco); // undefined
// console.log(produto.preco.unidade); // TypeError: Cannot read property 'unidade' of undefined

console.log(produto); // {}

produto.preco = 3.50;
console.log(produto); // { preco: 3.5 }

produto.preco = undefined;
console.log(!!produto.preco); // false
console.log(produto); // { preco: undefined }

produto.preco = null;
console.log(!!produto.preco); // false
console.log(produto); // { preco: null }

