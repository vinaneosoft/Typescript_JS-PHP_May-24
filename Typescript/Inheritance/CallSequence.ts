class NeoEmployee{
    public  employeeId;
    public employeeName;
    public basicSalary;
    public deptCode;
    // instance methods
    // gross salary = bs+ta+da+hra : 5%, 10%, 12%
    constructor(){
        console.log("in NeoEmployee constructor...."); 
        this.employeeId=0; 
    }
     getGrossSalary(){
        console.log("in NeoEmployee method...");
        return this.basicSalary+(0.05*this.basicSalary)+(0.1*this.basicSalary)+(0.12*this.basicSalary)
    }
}
class NeoTrainer extends NeoEmployee{
    trainingTechnologies:string[]=[];
    payPerHr=0;
    extraPay=0;
    /*Constructors for derived classes must contain a 'super' call. */
    constructor(){
        super(); // super class contr
        console.log("in NeoTrainer constr....");
        this.trainingTechnologies=[];
        
    }
    getTechCount(){
        return this.trainingTechnologies.length;
    }
    getMonthlyPay(extraHrs=0){
        this.extraPay=extraHrs*this.payPerHr;
        return this.extraPay;
    }
    /* */
      getGrossSalary(){
        console.log("in NeoTrainer method...");
        return super.getGrossSalary()+this.extraPay;
    }
}

let employee=new NeoEmployee();
employee.basicSalary=90000;
employee.deptCode="LD";
employee.employeeName="Karan Patil";
employee.employeeId=111;
console.log("Gross salary of Employee:"+ employee.getGrossSalary());
console.log("________________");

let trainer1=new NeoTrainer(); // super class contr, sub class contr
//with sub class object we can directly access super class visible properties
trainer1.employeeId=123;
trainer1.employeeName="Seema Pawar";
trainer1.deptCode="JS";
trainer1.basicSalary=90000;
trainer1.trainingTechnologies=["Java","Angular","React"];
trainer1.payPerHr=1000;
console.log("Count:"+trainer1.getTechCount());
console.log("Month Extra Pay"+trainer1.getMonthlyPay(30));
/* getGrossSalary method is getting called from sub class */
console.log("Gross salary of Trainer 1:"+ trainer1.getGrossSalary());// auto polymorphism runtime
//console.log("Total salary of Trainer 1:"+ trainer1.getTotalSalary());
//

/*
Function overriding rules
1. we can keep same scope or increase it but can not decrease
2. if primitive return type then: must be same
3. if void return type then : allowed to change the return type
4. if return type is object(super type) then : co variants allowed
*/