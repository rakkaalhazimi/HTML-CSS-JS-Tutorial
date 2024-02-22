# Typescript Tutorial
Compile typescript into javascript by this command
```
tsc <name of typescript file>
```

## Intro
```typescript
// Basic javascript syntax
console.log("hello world")

// Somehow declaring variable with name of "name" will throw an error
let myName: string = "rakka"
console.log(myName)
```

## Array
```typescript
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
```

## Object
```typescript
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
```

## Function
```typescript
// Return type
function getWeapon(): string {
    return "sword"
}

// Void return type
function summonWeapon(): void {
    console.log("Sword summoned")
}

// Parameters type
function enhanceWeapon(weaponName: string) {
    console.log("Enhance ", weaponName)
}

// Optional parameters
function infuseWeapon(weaponName: string, attribute?: string) {
    if (attribute) {
        console.log("Infused ", weaponName, " with attribute ", attribute)
    } else {
        console.log("Infused ", weaponName)
    }
}

// Default parameters
function buyWeapon(weaponName: string, count: number = 1) {
    console.log("Bought ", count, "x ", weaponName)
}

// Named parameters
function sellWeapon({weaponName, count = 1}: {weaponName: string, count: number}) {
    console.log("Sold ", count, "x ", weaponName)
}

// Type alias
type Amplify = (multiplier: number) => number
let amplifyWeapon = (multiplier) => multiplier
```

## Tuple
```typescript
let myTuple: [number, string, boolean] = [0, "zero", false]
console.log(myTuple)

// Readonly tuple
let myReadonlyTuple: readonly [number, string, boolean] = [0, "zero", false]
// Modification will throw an error
// myReadonlyTuple.push(1)
console.log(myReadonlyTuple)
```

## Union
```typescript
// Union of number and string type
let numberOfWaifus: number | string = "10"
console.log(numberOfWaifus)

let alsoNumberOfWaifus: number | string = 10
console.log(alsoNumberOfWaifus)
```

## Enum
```typescript
enum WindDirection {
    North = "north",
    East = "east",
    South = "south",
    West = "west"
}
console.log(WindDirection.North)
```

## Type Casting
```typescript
// Casting with as
let mystery: unknown = "mystery"
console.log((mystery as string).length)

// Casting with <>
let anotherMystery: unknown = 7
console.log((<number>anotherMystery).toString())
```

## Class
```typescript
// Regular class
class Waifu {
    name: string
}
const lappland: Waifu = new Waifu()
lappland.name = "lappland"
console.log(lappland.name)
```

## Strict Class
```typescript
// Stricter class with visibility, readonly and named parameters
class StrictWaifu {
    private readonly name: string

    public constructor({name}: {name: string}) {
        this.name = name
    }

    public getName(): string {
        return this.name
    }
}
const schawrz: StrictWaifu = new StrictWaifu({name: "Schwarz"})
console.log(schawrz.getName())
```

## Inheritance
```typescript
// Inheritance: Implements
interface Waifu {
    getName: () => string
}

class ArknightWaifu implements Waifu {

    public name: string

    public constructor(name: string) {
        this.name = name
    }

    public getName(): string {
        return this.name
    }
}
const mostima: Waifu = new ArknightWaifu("Mostima")
console.log(mostima.getName())


// Inheritance: extends
class LuposWaifu extends ArknightWaifu {

    public howl(): void {
        console.log(this.name, ": Awoooooo !!!")
    }
}
const lappy: LuposWaifu = new LuposWaifu("Lappland")
lappy.howl()
```

## Abstract Class
```typescript
// Abstract class
abstract class PotentialWaifu {

    public abstract sayHello(): void

}

class FoundWaifu extends PotentialWaifu {

    private name: string

    public constructor(name: string) {
        super()
        this.name = name
    }

    public sayHello() {
        console.log("Hello my name is", this.name)
    }
}

const potentialLappy = new FoundWaifu("lappy")
potentialLappy.sayHello()
```

## Type Alias
```typescript
// Type alias
type catName = string
type catColor = string
type catAge = number

let myCatName: catName = "tenyom"
let myCatColor: catColor = "orange"
let myCatAge: catAge = 2

console.log(myCatName, myCatAge, myCatColor)
```

## Interface
```typescript
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
```


## Extending Interface
```typescript
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
```