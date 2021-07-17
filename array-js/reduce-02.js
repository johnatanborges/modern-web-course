const students = [
    { name: 'João', grade: 7.3, isColleger: false },
    { name: 'Maria', grade: 9.2, isColleger: true },
    { name: 'Pedro', grade: 9.8, isColleger: false},
    { name: 'Ana', grade: 8.7, isColleger: true },
]

const allColleger = (result, isColleger) => result && isColleger
console.log(students.map(student => student.isColleger).reduce(allColleger)) // false

const someColleger = (result, isColleger) => result || isColleger
console.log(students.map(a => a.isColleger).reduce(someColleger)) // true

