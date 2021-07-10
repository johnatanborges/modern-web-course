const result = grade => grade >= 7 ? 'Approved' : 'Disapproved';

console.log(result(7.1)); // Approved
console.log(result(6.8)); // Disapproved
