const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!'; // Olá Rebeca!

const template = `
    Olá
    ${nome}!`;

/* output:
    Olá
    Rebeca!
*/

console.log(concatenacao, template);

// expressões
console.log(`1 + 1 = ${1 + 1}`); // 1 + 1 = 2

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}`); // Ei... CUIDADO
