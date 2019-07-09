console.log('1)', '1' == 1); // true
console.log('2)', '1' === 1); // false
console.log('3)', '3' != 3); // false
console.log('4)', '3' !== 3); // true

console.log('5)', 3 < 2); // false
console.log('6)', 3 > 2); // true
console.log('7)', 3 <= 2); // false
console.log('8)', 3 >= 2); // true


const d1 = new Date(0);
const d2 = new Date(0);
console.log('9)', d1 == d2); // false
console.log('10)', d1 === d2); // false
console.log('11', d1.getTime() === d2.getTime()); // true

console.log('12)', null == undefined); // true
console.log('13)', null === undefined); // false
