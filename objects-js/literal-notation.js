const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c };
console.log(obj1, obj2); // { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }

const test = { [a]: a, [b]: b, [c]: c };
console.log(test); // { '1': 1, '2': 2, '3': 3 }

const obj = { first: a, second: b, third: c };
console.log(obj); // { first: 1, second: 2, third: 3 }

const nomeAttr = 'nota';
const valorAttr = 7.87;

const obj3 = {};
obj3.nomeAttr = valorAttr;
console.log(obj3); // { nomeAttr: 7.87 }
obj3[nomeAttr] = valorAttr;
console.log(obj3); // { nomeAttr: 7.87, nota: 7.87 }

const obj4 = { [nomeAttr]: valorAttr };
console.log(obj4); // { nota: 7.87 }

const obj5 = {
    funcao1: function() {
        // ...
    },
    funcao2() {
        // ...
    }
}

console.log(obj5); // { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
