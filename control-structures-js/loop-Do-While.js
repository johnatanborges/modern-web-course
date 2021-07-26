function getIntBetween(min, max) {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

let option = -1;

do {
    option = getIntBetween(-1, 10);
    console.log(`Chosen option was ${option}.`);
} while (option != -1);

console.log('Bye bye');

/*
Chosen option was 2.
Chosen option was 1.
Chosen option was 1.
Chosen option was 7.
Chosen option was 2.
Chosen option was 9.
Chosen option was 2.
Chosen option was 2.
Chosen option was 5.
Chosen option was 9.
Chosen option was 0.
Chosen option was 4.
Chosen option was -1.
Bye bye
*/
