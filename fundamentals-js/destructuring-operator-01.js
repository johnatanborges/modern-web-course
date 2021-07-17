// ES5 Destructuring Object

const person = {
    name: 'Ana',
    age: 15,
    addres: {
        street: 'ABCD',
        number: 100
    }
};

const { name, age } = person;
console.log(name, age); // Ana 15

const { name: n, age: a} = person;
console.log(n, a); // Ana 15

const { lastName, happy = true } = person;
console.log(lastMame, happy); // undefined true

const { addres: { street, number, cep } } = person;
console.log(street, number, cep); // ABCD 100 undefined
