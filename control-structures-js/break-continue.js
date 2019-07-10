const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x in num) {
    if (x == 5) {
        break;
    }

    console.log(`x = ${x}: ${num[x]}`);
}

/*
x = 0: 1
x = 1: 2
x = 2: 3
x = 3: 4
x = 4: 5
*/

for (let y in num) {
    if (y == 5) {
        continue;
    }

    console.log(`y = ${y}: ${num[y]}`);
}

/*
y = 0: 1
y = 1: 2
y = 2: 3
y = 3: 4
y = 4: 5
y = 6: 7
y = 7: 8
y = 8: 9
y = 9: 10
*/
