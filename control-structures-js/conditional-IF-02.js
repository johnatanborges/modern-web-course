function test1(number) {
    if(number > 7)
        console.log(number);

    console.log('Final');
}

test1(6); // Final
test1(8); // 8 Final

function test2(number) {
    // be careful with ;
    if(number > 7); {
        console.log(number);
    }
}

test2(6); // 6
test2(8); // 8
