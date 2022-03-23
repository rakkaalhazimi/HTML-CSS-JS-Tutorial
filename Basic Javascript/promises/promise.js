// Promise is an object that acts as a placeholder to some values that is soon to come.
// The value of the promise isn't necessarily known when the promise is created.
// 

// // Without promise the reply will immediately run
// // before greet is finished
// function greet() {
//     setTimeout(() => {
//         console.log("Hey, how are you?")
//     }, 3000)
// }

// function reply () {
//     console.log("Hi, I'm great")
// }

// greet()
// reply()


// With Promise, you can make a callback whether a promise is success
// or not success.
const succeeded = false
function greet() {
    // Promise object, resolve will run if your Promise is success
    // else it will run reject
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hey, how are you?")
            if (succeeded == true) {
                resolve()
            } else {
                reject()
            }
        }, 3000)
    })
}

function reply () {
    console.log("Hi, I'm great")
}

// greet() now return a promise
// .then() is what you want to do if you resolve your promise
// .catch() will be called whenever your promise is rejected
greet().then(() => {
    reply()
})
.catch(() => {
    console.log("rejected")
})
