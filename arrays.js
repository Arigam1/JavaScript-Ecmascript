// MAP .............................................................................
// const  studentsName = ['Max', 'Vlad', 'Elena']
// console.log(studentsName.map((name, index) => `${index + 1}. ${name}` ).join('\n'))


// FILTER ........................................................................
const students = [{
    name: 'Max',
    age: 23
}, {
    name: 'Dima',
    age: 40
}, {
    name: 'Elena',
    age: 50
}]

// console.log(students.filter((student) => student.age > 40).map(student => student.name).join('\n'))

// PUSH .....................................................................
// students.push({
//     name:'Jorg',
//     age: 24
// })
// console.log(students)

// Slice .....................................................................
// console.log(students.slice(0, 2))

// FIND ........................................................................
console.log(students.find(student => student.name === 'Max'))