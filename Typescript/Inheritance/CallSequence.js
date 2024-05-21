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
var NeoEmployee = /** @class */ (function () {
    // instance methods
    // gross salary = bs+ta+da+hra : 5%, 10%, 12%
    function NeoEmployee() {
        this.employeeId = 0;
        this.employeeName = "";
        this.basicSalary = 0;
        this.deptCode = "";
        console.log("in NeoEmployee constructor....");
    }
    NeoEmployee.prototype.getGrossSalary = function () {
        console.log("in NeoEmployee method...");
        return this.basicSalary + (0.05 * this.basicSalary) + (0.1 * this.basicSalary) + (0.12 * this.basicSalary);
    };
    return NeoEmployee;
}());
var NeoTrainer = /** @class */ (function (_super) {
    __extends(NeoTrainer, _super);
    /*Constructors for derived classes must contain a 'super' call. */
    function NeoTrainer() {
        var _this = _super.call(this) || this; // super class contr
        _this.trainingTechnologies = [];
        _this.payPerHr = 0;
        _this.extraPay = 0;
        console.log("in NeoTrainer constr....");
        return _this;
    }
    NeoTrainer.prototype.getTechCount = function () {
        return this.trainingTechnologies.length;
    };
    NeoTrainer.prototype.getMonthlyPay = function (extraHrs) {
        if (extraHrs === void 0) { extraHrs = 0; }
        this.extraPay = extraHrs * this.payPerHr;
        return this.extraPay;
    };
    /* */
    NeoTrainer.prototype.getGrossSalary = function () {
        console.log("in NeoTrainer method...");
        return _super.prototype.getGrossSalary.call(this) + this.extraPay;
    };
    return NeoTrainer;
}(NeoEmployee));
var employee = new NeoEmployee();
employee.basicSalary = 90000;
employee.deptCode = "LD";
employee.employeeName = "Karan Patil";
employee.employeeId = 111;
console.log("Gross salary of Employee:" + employee.getGrossSalary());
console.log("________________");
var trainer1 = new NeoTrainer(); // super class contr, sub class contr
//with sub class object we can directly access super class visible properties
trainer1.employeeId = 123;
trainer1.employeeName = "Seema Pawar";
trainer1.deptCode = "JS";
trainer1.basicSalary = 90000;
trainer1.trainingTechnologies = ["Java", "Angular", "React"];
trainer1.payPerHr = 1000;
console.log("Count:" + trainer1.getTechCount());
console.log("Month Extra Pay" + trainer1.getMonthlyPay(30));
/* getGrossSalary method is getting called from sub class */
console.log("Gross salary of Trainer 1:" + trainer1.getGrossSalary()); // auto polymorphism runtime
//console.log("Total salary of Trainer 1:"+ trainer1.getTotalSalary());
//
/*
Function overriding rules
1. we can keep same scope or increase it but can not decrease
2. if primitive return type then: must be same
3. if void return type then : allowed to change the return type
4. if return type is object(super type) then : co variants allowed
*/ 
