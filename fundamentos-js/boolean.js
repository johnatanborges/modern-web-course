let isAtivo = false;
console.log(isAtivo); //false

isAtivo = true;
console.log(isAtivo); // true

isAtivo = 1;
console.log(!!isAtivo); // true

// os verdadeiros
console.log(!!3); // true
console.log(!!-1); // true
console.log(!!' '); // true - espaço em branco é verdadeiro
console.log(!!'Texto'); // true
console.log(!![]); // true
console.log(!!{}); // true
console.log(!!Infinity); // true
console.log(!!(isAtivo = true)); // true

// os falsos
console.log(!!0); // false
console.log(!!''); // false - string vazia é falso
console.log(!!null); // false
console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!(isAtivo = false)); // false

// pra finalizar...
console.log(!!('' || null || 0 || ' ')); // true
console.log('' || null || 0 || 123); // 123
console.log('' || null || 0 || 'epa' || 123); // epa


let nome = '';
console.log(nome || 'Desconhecido');