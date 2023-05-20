// OBJECTS ..................................................................
const person = {
    name: 'Max',
    age: 23,
    city: 'Minsk',
    getName(){
        return person.name
    }
}

// console.log(person.getName())

const dividend ={
    profit: '$100 000'
}

// Объединение объектов ............................................................
// console.log(Object.assign(person, dividend))
// console.log({...person, ...dividend})

// Keys and values .................................................................
console.log(Object.keys(person))
console.log(Object.values(person))