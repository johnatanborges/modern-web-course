// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'};
pessoa.nome = 'Pedro';
console.log(pessoa); // { nome: 'Pedro' }

// pessoa -> 456 -> {...}
// pessoa =  {nome: 'Ana' }; // TypeError: Assignment to constant variable.

Object.freeze(pessoa);
pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC';
delete pessoa;

console.log(pessoa.nome); // Pedro
console.log(pessoa); // { nome: 'Pedro' }

const pessoaConstante = Object.freeze({ nome: 'João' });
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante); // { nome: 'João' }
