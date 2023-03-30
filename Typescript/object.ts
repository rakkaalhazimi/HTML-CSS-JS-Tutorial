// Declare object by specifying the type
// all attribute must be included, or else it will throw an error
let myObject: {name: string, age: number, isMarried: boolean} = {
    name: "rakka",
    age: 10,
    isMarried: false
}

console.log(myObject)


// Alternatively, we can specify optional attribute
let myOptionalObject: {name: string, age: number, isMarried?: boolean} = {
    name: "rakka",
    age: 10,
}

console.log(myOptionalObject)