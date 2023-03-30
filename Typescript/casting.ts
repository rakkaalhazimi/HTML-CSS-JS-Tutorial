// Casting with as
let mystery: unknown = "mystery"
console.log((mystery as string).length)

// Casting with <>
let anotherMystery: unknown = 7
console.log((<number>anotherMystery).toString())