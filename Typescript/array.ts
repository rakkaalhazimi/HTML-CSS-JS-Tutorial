
let list: string[] = ["a", "b"]

for (let item of list) {
    console.log(item)
}

// Readonly array
let readonlyList: readonly string[] = ["a", "b"]
// Modification will throw an error
// readonlyList.push("c")

for (let item of readonlyList) {
    console.log(item)
}