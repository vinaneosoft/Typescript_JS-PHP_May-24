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

class Animal{
        eat(){
            console.log("Animal eat..."); 
        }
}
class Tiger extends Animal{
        eat(){
            console.log("Tiger eat other Animals...");
        }
}
class Sheep extends Animal{
    eat(){
        console.log("Sheep eats grass and other veggies...");
    }
}
let animal=new Animal();
let tiger=new Tiger();
let sheep =new Sheep();
callEat(animal);
callEat(tiger);
callEat(sheep);
function callEat(obj:Animal){
        obj.eat(); // run time polymorphism
}