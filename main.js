const  studentsName = ['Max', 'Vlad', 'Elena']
console.log(studentsName.map((name, index) => `${index + 1}. ${name}` ).join('\n'))