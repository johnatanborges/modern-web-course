Number.prototype.between = function(init, end) {
    return this >= init && this <= end;
};

const printResult = function(grade) {
    if(grade.between(9, 10)) {
        console.log('Honor board');
    } else if(grade.between(7, 8.99)) {
        console.log('Approved');
    } else if(grade.between(4, 6.99)) {
        console.log('Recovery');
    } else if(grade.between(0, 3.99)) {
        console.log('Disapproved');
    } else {
        console.log('Invalid grade');
    }
};

printResult(10); // Honor board
printResult(8.9); // Approved
printResult(6.55); // Recovery
printResult(2); // Disapproved
printResult(-1); // Invalid grade
printResult(11); // Invalid grade
