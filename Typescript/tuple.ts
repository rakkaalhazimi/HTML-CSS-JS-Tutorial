let myTuple: [number, string, boolean] = [0, "zero", false]

console.log(myTuple)


// Readonly tuple
let myReadonlyTuple: readonly [number, string, boolean] = [0, "zero", false]
// Modification will throw an error
// myReadonlyTuple.push(1)
console.log(myReadonlyTuple)