/* class A{
    test():Animal{
        return new Animal();
    }
    test2():NeoEmployee{
        return new NeoEmployee();
    }
    test3():any{
        return ""
    }
}

class B extends A{
    test():Tiger{
        return new Tiger();
    }
    test2(): NeoTrainer{
        return new NeoTrainer();
    }
    test3():number{
        return 0;
    }
} */
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log("Animal eat...");
    };
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tiger.prototype.eat = function () {
        console.log("Tiger eat other Animals...");
    };
    return Tiger;
}(Animal));
var Sheep = /** @class */ (function (_super) {
    __extends(Sheep, _super);
    function Sheep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sheep.prototype.eat = function () {
        console.log("Sheep eats grass and other veggies...");
    };
    return Sheep;
}(Animal));
var animal = new Animal();
var tiger = new Tiger();
var sheep = new Sheep();
callEat(animal);
callEat(tiger);
callEat(sheep);
function callEat(obj) {
    //  obj : Animal/Tiger/Sheep
    obj.eat(); // run time polymorphism
}
