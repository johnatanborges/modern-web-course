const values = [7.7, 8.9, 6.3, 9.2];
console.log(values[0], values[3]); // 7.7 9.2
console.log(values[4]); // undefined

// values[10] = 20;
// console.log(values); // [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 20 ]
// console.log(values.length); // 11

values[4] = 10;
console.log (values); // [ 7.7, 8.9, 6.3, 9.2, 10 ]
console.log(values.length); // 5

values.push({id: 3}, false, null, 'test');
console.log(values); // [7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'test']

console.log(values.pop()); // test
delete values[0];
console.log(values); // [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]

console.log(typeof values); // object
