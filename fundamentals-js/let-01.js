var number = 1;
{
    let number = 2;
    console.log('inside = ', number); // 2
}

console.log('outside = ', number); // 1

// ----------------------------

let number2 = 1;
{
    let number2 = 2;
    console.log('inside = ', number2); // 2
}

console.log('outside = ', number2); // 1

// -----------------------------

let number3 = 1;
{
    console.log('inside = ', number3); // 1
}

console.log('outside = ', numero3); // 1

// -----------------------------

let number5 = 1;
{
    // var number5 = 2;
    // console.log('inside = ', number5); // SyntaxError: Identifier 'number5' has already been declared
}

console.log('outside = ', number5); // 1

// -----------------------------

let number6 = 1;
console.log(number6); // 1

{
    let number6 = 2;
    console.log(number6); // 2
    {
        let number6 = 3;
        console.log(number6); // 3
        {
            let number6 = 4;
            console.log(number6); // 4
        }
        console.log(number6); // 3
    }
    console.log(number6); // 2
}

console.log(number6); // 1
