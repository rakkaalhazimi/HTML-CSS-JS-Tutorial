// Async in Javascript is intented to create a cleaner asynchronous code

// // With synchronhous code the functions is run by order
// function buyBread() {
//     return "bought bread"
// }
// function makeSandwich() {
//     return "made sandwich"
// }
// function init() {
//     const boughtBread = buyBread()
//     const madeSandwich = makeSandwich()

//     console.log(boughtBread)
//     console.log(madeSandwich)
// }
// init()


// // When we set a timeout on buyBread, it will immediately jump into makeSandwich
// // while waiting for buyBread to finished, making it undefined.
// function buyBread() {
//     setTimeout(() => {
//         return "Buy Bread"
//     }, 3000)
// }
// function makeSandwich() {
//     return "made sandwich"
// }
// function init() {
//     const boughtBread = buyBread()
//     const madeSandwich = makeSandwich()

//     console.log(boughtBread)
//     console.log(madeSandwich)
// }
// init()



function buyBread() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("bought bread")
        }, 3000)
    })
}
function makeSandwich() {
    return "made sandwich"
}
// Adding async in front of function's name will make us able to use await keyword
async function init() {
    // Await keyword can only be used in in front of function that returns Promise object
    // Await here will force wait the current line to be finished first before continuing to another line
    const boughtBread = await buyBread()
    const madeSandwich = makeSandwich()

    console.log(boughtBread)
    console.log(madeSandwich)
}
init()