interface Test1{
    demo1():void;
    demo():void;
}
interface Test2{
    demo2():void;
    demo():void;
}

class A implements Test1, Test2{
    demo(): string {
        throw new Error("Method not implemented.");
    }
   
    demo1(): void {
        throw new Error("Method not implemented.");
    }
    demo2(): void {
        throw new Error("Method not implemented.");
    }

    
}
// interface inheritance : muitple inheritance is allowed with some rules
interface Test3 extends Test2, Test1{
    demo3():void;
}
class B implements Test3{
    demo(): number {
        throw new Error("Method not implemented.");
    }
    demo1(): void {
        throw new Error("Method not implemented.");
    }
    demo3(): void {
        throw new Error("Method not implemented.");
    }
    demo2(): void {
        throw new Error("Method not implemented.");
    }

}