// УСЛОВИЕ .......................................................................................

// function getStatus(age) {
//     if(age <14) return 'Children'
//     if(age <20) return 'Teenager'
//     if(age <50) return 'Adult'

//     return 'Old'
// }
// console.log(getStatus(10))



// Тернарное выражение ..........................................................................

// const getAge = (age) => age < 14 ? 'Children' : age < 20 ? 'Teenager' : age < 50 ? 'Adult' :'Old'
// console.log(getAge(60)) 

// Switch .......................................................................................
function getPrice(model) {
    switch(model) {
        case "Merc":
        case "Volga":
        case "Taxi":
            return "1000p"
        case "BMW":
            return "50p"
        case "Vag":
            return "99p"
        default:
            return null
        }
}

console.log(getPrice('Taxi')) 