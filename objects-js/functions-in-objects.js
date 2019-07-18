const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)) // [ 'Rebeca', 2, 13 ]
console.log(Object.entries(pessoa)) // [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

Object.entries(pessoa).forEach(([chave, valor]) => {
    // console.log(`${param[0]}: ${param[1]}`);
        // nome: Rebeca
        // idade: 2
        // peso: 13
    console.log(`${chave}: ${valor}`);
        // nome: Rebeca
        // idade: 2
        // peso: 13
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    whitable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento); // 01/01/2019
console.log(pessoa); // { nome: 'Rebeca', idade: 2, peso: 13, dataNascimento: '01/01/2019' }

// Object.assign (ES6)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log(obj); // { a: 4, b: 2, c: 3 }

Object.freeze(obj);
obj.c = 1234;
console.log(obj); // { a: 4, b: 2, c: 3 }
