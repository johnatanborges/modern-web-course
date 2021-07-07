{
    {
        {
            {
                var test = 'test???';
                console.log(test); // test???
            }
        }
    }
}

console.log(test); // test???

function myFunction() {
    var localVariable = 123;
    console.log(localVariable); // 123
}

myFunction();
// console.log(localVariable); // ReferenceError: localVariable is not defined
