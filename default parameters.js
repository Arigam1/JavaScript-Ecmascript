// ES7
// Default parameter.........................................

const getPrice = (name = 'Mercedes') => {
    if(name === 'Mercedes') return 180000
    if(name === 'Lada') return 1000

}

console.log(getPrice())
