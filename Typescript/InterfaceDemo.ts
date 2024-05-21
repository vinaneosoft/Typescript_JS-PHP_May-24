
interface DemoIntf{
    experience:number;
    totalExperience():number;
}
class NeoDeveloper implements DemoIntf{
    experience: number;
    xyz:string
    totalExperience(): number {
       return 0;
    }
}
class NeoTester implements DemoIntf{
    experience: number;
    totalExperience(): number {
        return 0;
    }
}
let emp:DemoIntf;
emp=new NeoDeveloper();
emp.totalExperience();
emp=new NeoTester();
emp.totalExperience(); // run time polymorphism