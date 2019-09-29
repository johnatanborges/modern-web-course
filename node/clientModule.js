const moduleA = require('./moduleA')
const moduleB = require('./moduleB')

console.log(moduleA.ola) // Fala, pessoal
console.log(moduleA.bemVindo) // Bem vindo ao node
console.log(moduleA.ateLogo) // Até o próximo exemplo
console.log(moduleA)
// {
//     ola: 'Fala, pessoal',
//     bemVindo: 'Bem vindo ao node',
//     ateLogo: 'Até o próximo exemplo'
// }

console.log(moduleB.bomDia) // Bom dia
console.log(moduleB.boaNoite()) // Boa noite
console.log(moduleB) // { bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }
