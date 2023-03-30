var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Regular class
var Waifu = /** @class */ (function () {
    function Waifu() {
    }
    return Waifu;
}());
var lappland = new Waifu();
lappland.name = "lappland";
console.log(lappland.name);
// Stricter class with visibility, readonly and named parameters
var StrictWaifu = /** @class */ (function () {
    function StrictWaifu(_a) {
        var name = _a.name;
        this.name = name;
    }
    StrictWaifu.prototype.getName = function () {
        return this.name;
    };
    return StrictWaifu;
}());
var schawrz = new StrictWaifu({ name: "Schwarz" });
console.log(schawrz.getName());
var ArknightWaifu = /** @class */ (function () {
    function ArknightWaifu(name) {
        this.name = name;
    }
    ArknightWaifu.prototype.getName = function () {
        return this.name;
    };
    return ArknightWaifu;
}());
var mostima = new ArknightWaifu("Mostima");
console.log(mostima.getName());
// Inheritance: extends
var LuposWaifu = /** @class */ (function (_super) {
    __extends(LuposWaifu, _super);
    function LuposWaifu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LuposWaifu.prototype.howl = function () {
        console.log(this.name, ": Awoooooo !!!");
    };
    return LuposWaifu;
}(ArknightWaifu));
var lappy = new LuposWaifu("Lappland");
lappy.howl();
// Abstract class
var PotentialWaifu = /** @class */ (function () {
    function PotentialWaifu() {
    }
    return PotentialWaifu;
}());
var FoundWaifu = /** @class */ (function (_super) {
    __extends(FoundWaifu, _super);
    function FoundWaifu(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    FoundWaifu.prototype.sayHello = function () {
        console.log("Hello my name is ", this.name);
    };
    return FoundWaifu;
}(PotentialWaifu));
var potentialLappy = new FoundWaifu("lappy");
potentialLappy.sayHello();
