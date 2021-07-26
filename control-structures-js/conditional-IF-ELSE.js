const printResult = function(grade) {
    if (grade >= 7) {
        console.log('Approved');
    } else {
        console.log('Disapproved');
    }
};

printResult(10); // Approved
printResult(4); // Disapproved
printResult('Hoop!'); // Disapproved
