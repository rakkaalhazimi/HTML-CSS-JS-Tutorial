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