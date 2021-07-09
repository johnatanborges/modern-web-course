let isActive = false;
console.log(isActive); //false

isActive = true;
console.log(isActive); // true

isActive = 1;
console.log(!!isActive); // true

// True
console.log(!!3); // true
console.log(!!-1); // true
console.log(!!' '); // true - blank space
console.log(!!'Text'); // true
console.log(!![]); // true
console.log(!!{}); // true
console.log(!!Infinity); // true
console.log(!!(isActive = true)); // true

// False
console.log(!!0); // false
console.log(!!''); // false - empty string
console.log(!!null); // false
console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!(isActive = false)); // false

// To finish
console.log(!!('' || null || 0 || ' ')); // true
console.log('' || null || 0 || 123); // 123
console.log('' || null || 0 || 'Hoop' || 123); // Hoop


let text = '';
console.log(text || 'unknown');
