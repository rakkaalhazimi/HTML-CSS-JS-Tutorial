// Type alias
type catName = string
type catColor = string
type catAge = number

let myCatName: catName = "tenyom"
let myCatColor: catColor = "orange"
let myCatAge: catAge = 2

console.log(myCatName, myCatAge, myCatColor)


// Interface
interface ArknightWaifu {
    name: string,
    race: string,
    combatExperience: number,
    height: number
}

let myWaifu: ArknightWaifu = {
    name: "Lappland",
    race: "Lupo",
    combatExperience: 5,
    height: 162
}

console.log(myWaifu)


// Extending interface
interface WulfArknightWaifu extends ArknightWaifu {
    furColor: string
}

let myWulfWaifu: WulfArknightWaifu = {
    name: "Lappland",
    race: "Lupo",
    combatExperience: 5,
    height: 162,
    furColor: "silver"
}

console.log(myWulfWaifu)