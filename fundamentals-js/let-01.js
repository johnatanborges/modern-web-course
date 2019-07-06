var numero = 1;
{
    let numero = 2;
    console.log('dentro = ', numero); // 2
}

console.log('fora = ', numero); // 1

// ----------------------------

let numero2 = 1;
{
    let numero2 = 2;
    console.log('dentro = ', numero2); // 2
}

console.log('fora = ', numero2); // 1

// -----------------------------

let numero3 = 1;
{
    let numero4 = 2;
    console.log('dentro = ', numero3); // 1
}

console.log('fora = ', numero3); // 1

// -----------------------------

let numero5 = 1;
{
    // var numero5 = 2;
    // console.log('dentro = ', numero5); // SyntaxError: Identifier 'numero5' has already been declared
}

console.log('fora = ', numero5); // 1

// -----------------------------

let number1 = 1;
console.log(number1); // 1

{
    let number1 = 2;
    console.log(number1); // 2
    {
        let number1 = 3;
        console.log(number1); // 3
        {
            let number1 = 4;
            console.log(number1); // 4
        }
        console.log(number1); // 3
    }
    console.log(number1); // 2
}

console.log(number1); // 1
