const school = 'Cod3r';

console.log(school.charAt(4)); // r
console.log(school.charAt(5)); // (empty)

console.log(school.charCodeAt(3)); // Return unicode -> output: 51

console.log(school.indexOf('3')); // output: 3

console.log(school.substring(1)); // output: od3r

console.log(school.substring(0,3)); //output: Cod

console.log('school '.concat(school).concat('!')); // school Cod3r!

console.log(school.replace(3, 'e')); // Coder

console.log('Ana,Maria,Pedro'.split(',')); // ['Ana', 'Maria', 'Pedro']
