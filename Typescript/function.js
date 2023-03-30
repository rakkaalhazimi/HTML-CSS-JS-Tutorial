// Return type
function getWeapon() {
    return "sword";
}
// Void return type
function summonWeapon() {
    console.log("Sword summoned");
}
// Parameters type
function enhanceWeapon(weaponName) {
    console.log("Enhance ", weaponName);
}
// Optional parameters
function infuseWeapon(weaponName, attribute) {
    if (attribute) {
        console.log("Infused ", weaponName, " with attribute ", attribute);
    }
    else {
        console.log("Infused ", weaponName);
    }
}
// Default parameters
function buyWeapon(weaponName, count) {
    if (count === void 0) { count = 1; }
    console.log("Bought ", count, "x ", weaponName);
}
// Named parameters
function sellWeapon(_a) {
    var weaponName = _a.weaponName, _b = _a.count, count = _b === void 0 ? 1 : _b;
    console.log("Sold ", count, "x ", weaponName);
}
var amplifyWeapon = function (multiplier) { return multiplier; };
