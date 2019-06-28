const escola = 'Cod3r';

console.log(escola.charAt(4)); // r
console.log(escola.charAt(5)); // (vazio)

console.log(escola.charCodeAt(3)); // Retorna o código Unicode do parãmetro -> output: 51

console.log(escola.indexOf('3')); // Retorna o indíce do elemento analisado, caso exista na variável -> output: 3

console.log(escola.substring(1)); // Retorna uma string do índice 1 para frente -> output: od3r

console.log(escola.substring(0,3)); // Retorna uma string com 3 caracteres a partir do índice 0 -> output: Cod

console.log('Escola '.concat(escola).concat('!')); // Escola Cod3r!

console.log(escola.replace(3, 'e')); // Coder

console.log('Ana,Maria,Pedro'.split(',')); // ['Ana', 'Maria', 'Pedro']

