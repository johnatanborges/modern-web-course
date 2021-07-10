// name-value
const greeting = 'Hey'; // lexical context

function exec() {
    const greeting = 'Hoop'; // lexical context 2
    return greeting;
}

// object
const client = {
    name: 'Pedro',
    age: 32,
    weight: 90,
    addres: {
        street: 'Carlos Drummond',
        number: 100
    }
};

console.log(greeting); // Hey
console.log(exec()); // Hoop
