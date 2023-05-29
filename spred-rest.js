// ES6+...............................................


// Spread/rest ........................................

// const language = {
//     name: 'RU',
//     level: 'difficult'
// }



// const languagePopulation = {
//     population: 400000000,
// }
// console.log({...language})



// const nameFirst = ['Max', 'Anya', 'Evgeny ']
// const nameSecond = ['Poly', 'TAnya', 'Sex']
// console.log([ ...nameFirst, ...nameSecond])



const { name, ...rest } = {
    name: 'RU',
    level: 'difficult'
}

const [nameFirst, nameSecond, nameLast] = ['Poly', 'TAnya', 'Sex']

console.log(nameSecond)