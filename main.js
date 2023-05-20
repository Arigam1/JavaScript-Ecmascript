// FETCH .....................................................
let isLoading = true

fetch('https://jsonplaceholder.typicode.com/todos/3')
    .then(responce => responce.json())
    .then(json => console.log(json))
    .catch(e => console.error(e))   // for error
    .finally(() => {
        isLoading = false
    })