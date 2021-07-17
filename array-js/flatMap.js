const school =
[
    {
        name: 'Class M1',
        students: [
            {
                name: 'Gustava',
                grade: 8.1
            },
            {
                name: 'Ana',
                grade: 9.3
            }
        ]
    },
    {
        name: 'Class M2',
        students: [
            {
                name: 'Rebeca',
                grade: 8.9
            },
            {
                name: 'Roberto',
                grade: 7.3
            }
        ]
    }
]

const getStudentGrade = students => student.grade
const getClassGrade = myClass => myClass.students.map(getStudentGrade)

const grades1 = school.map(getClassGrade)
console.log(grades1) // [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const grades2 = school.flatMap(getClassGrade)
console.log(grades2) // [ 8.1, 9.3, 8.9, 7.3 ]
