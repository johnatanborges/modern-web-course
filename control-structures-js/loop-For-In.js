const grade = [6.7, 7.4, 9.8, 8.1, 7.7];

for(let i in grade) {
    console.log(i, grade[i]);
}

/*
0 6.7
1 7.4
2 9.8
3 8.1
4 7.7
*/

const person = {
    name: 'Ana',
    lastName: 'Silva',
    age: 29,
    weight: 64,
};

for (let attribute in person) {
    console.log(`${attribute}: ${person[attribute]}`);
}

/*
name: Ana
lastName: Silva
age: 29
weight: 64
*/
