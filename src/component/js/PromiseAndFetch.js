// Promise and Fetch
// Promise is a JavaScript object for asynchronous operation.
// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.
// The Fetch API provides an interface for fetching resources (including across the network). 
// It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.
// The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request, whether it is successful or not.
// You can also optionally pass in an init options object as the second argument (see Request).
// // Example of Fetch API

fetch('https://api.github.com/users')
    .then(response => {
        if (!response.ok) {  // Check if response is not OK (status code 200)
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
    
//   // Output: Array of GitHub users


//ASYNC AND AWAIT   
// Async functions enable you to write promise-based code as if it were synchronous, but without blocking the execution thread.
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
// The async function declaration defines an asynchronous function, which returns an AsyncFunction object.
// The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.
// // Example of Async and Await

async function fetchUsers() {
    try {
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchUsers();