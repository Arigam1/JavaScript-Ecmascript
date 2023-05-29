// FETCH .....................................................
let isLoading = true
// PROMISE...........................................................
fetch('https://jsonplaceholder.typicode.com/todos/3')
    .then(responce => responce.json())
    .then(json => console.log(json))
    .catch(e => console.error(e))   // for error
    .finally(() => {
        isLoading = false
    })

    // Async, await..................................................
    const fetchTodo = async() => {
        try {
            const responce = await fetch('https://jsonplaceholder.typicode.com/todos/3')
            const json = await responce.json()
            console.log(json)
        }
        catch(e) {
            console.error(e)
        } 
        finally {
            isLoading = false
        }
    }
    fetchTodo()