const name = 'Rebeca';
const concatenation = 'Hello, ' + name + '!'; // Hello, Rebeca!

const template = `
    Hello,
    ${name}!`;

/* output:
    Hello,
    Rebeca!
*/

console.log(concatenation, template);

// expression
console.log(`1 + 1 = ${1 + 1}`); // 1 + 1 = 2

const up = text => text.toUpperCase();
console.log(`Hey... ${up('you')}`); // Ei... YOU
