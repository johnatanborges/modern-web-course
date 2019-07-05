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
