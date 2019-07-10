function teste1(num) {
    if(num > 7)
        console.log(num);

    console.log('Final');
}

teste1(6); // Final
teste1(8); // 8 Final

function test2(num) {
    // be careful with ;
    if(num > 7); {
        console.log(num);
    }
}

test2(6); // 6
test2(8); // 8
