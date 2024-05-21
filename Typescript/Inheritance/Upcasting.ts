class NeoEmployee{
    public  employeeId=0;
    public employeeName="";
    public basicSalary=0;
    public deptCode="";
    // instance methods
    // gross salary = bs+ta+da+hra : 5%, 10%, 12%
     getGrossSalary(){
        console.log("in NeoEmployee method...");
        return this.basicSalary+(0.05*this.basicSalary)+(0.1*this.basicSalary)+(0.12*this.basicSalary)
    }
}
class NeoTrainer extends NeoEmployee{
    trainingTechnologies:string[]=[];
    payPerHr=0;
    extraPay=0;
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
        return this.basicSalary+(0.05*this.basicSalary)+(0.1*this.basicSalary)+(0.12*this.basicSalary)
        +this.extraPay;
    }
}

class NeoDeveloper extends NeoEmployee{
    // properties
    // methods

    // override method from super class
    getGrossSalary(){
        return 0;
        // formula change
    }
}

let employee=new NeoEmployee();
employee.basicSalary=90000;
employee.deptCode="LD";
employee.employeeName="Karan Patil";
employee.employeeId=111;
console.log("Gross salary of Employee:"+ employee.getGrossSalary());

let trainer1=new NeoTrainer();
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

let emp:NeoEmployee;

emp=new NeoEmployee();
emp.getGrossSalary();

emp=new NeoTrainer();
emp.getGrossSalary();

emp=new NeoDeveloper();
emp.getGrossSalary();