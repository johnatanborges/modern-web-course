{
    {
        {
            {
                var sera = 'Será???';
                console.log(sera); // Será???
            }
        }
    }
}

console.log(sera); // Será???

function test() {
    var local = 123;
    console.log(local); // 123
}

test();
// console.log(local); // ReferenceError: local is not defined
