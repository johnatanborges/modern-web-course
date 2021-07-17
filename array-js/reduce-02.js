const students = [
    { name: 'João', grade: 7.3, colleger: false },
    { name: 'Maria', grade: 9.2, colleger: true },
    { name: 'Pedro', grade: 9.8, colleger: false},
    { name: 'Ana', grade: 8.7, colleger: true },
]

const allColleger = (result, colleger) => result && colleger
console.log(students.map(student => student.colleger).reduce(allColleger)) // false

const someColleger = (result, colleger) => result || colleger
console.log(students.map(a => a.colleger).reduce(someColleger)) // true

