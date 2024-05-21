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
    function NeoEmployee() {
        this.employeeId = 0;
        this.employeeName = "";
        this.basicSalary = 0;
        this.deptCode = "";
    }
    // instance methods
    // gross salary = bs+ta+da+hra : 5%, 10%, 12%
    NeoEmployee.prototype.getGrossSalary = function () {
        console.log("in NeoEmployee method...");
        return this.basicSalary + (0.05 * this.basicSalary) + (0.1 * this.basicSalary) + (0.12 * this.basicSalary);
    };
    return NeoEmployee;
}());
var NeoTrainer = /** @class */ (function (_super) {
    __extends(NeoTrainer, _super);
    function NeoTrainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.trainingTechnologies = [];
        _this.payPerHr = 0;
        _this.extraPay = 0;
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
    return NeoTrainer;
}(NeoEmployee));
var employee = new NeoEmployee();
employee.basicSalary = 90000;
employee.deptCode = "LD";
employee.employeeName = "Karan Patil";
employee.employeeId = 111;
console.log("Gross salary of Employee:" + employee.getGrossSalary());
var trainer1 = new NeoTrainer();
trainer1.employeeId = 123;
trainer1.employeeName = "Seema Pawar";
trainer1.deptCode = "JS";
trainer1.basicSalary = 90000;
trainer1.trainingTechnologies = ["Java", "Angular", "React"];
trainer1.payPerHr = 1000;
console.log("Count:" + trainer1.getTechCount());
console.log("Month Extra Pay" + trainer1.getMonthlyPay(30));
console.log("Gross salary of Trainer 1:" + trainer1.getGrossSalary());
