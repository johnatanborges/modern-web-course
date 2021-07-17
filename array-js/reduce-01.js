const students = [
    { name: 'João', grade: 7.3, isColleger: false },
    { name: 'Maria', grade: 9.2, isColleger: true },
    { name: 'Pedro', grade: 9.8, isColleger: false},
    { name: 'Ana', grade: 8.7, isColleger: true },
]

console.log(students.map(student => student.grade)) // [ 7.3, 9.2, 8.7 ]

const result = students.map(student => student.grade).reduce(function(acumulator, actual) {
    console.log(acumulator, actual)
    return acumulator + actual
}, 0)

// 0 7.3
// 7.3 9.2
// 16.5 9.8
// 26.3 8.7

console.log(result) // 35
