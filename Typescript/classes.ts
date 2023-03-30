// Regular class
class Waifu {
    name: string
}
const lappland: Waifu = new Waifu()
lappland.name = "lappland"
console.log(lappland.name)


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