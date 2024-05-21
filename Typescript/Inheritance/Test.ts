class Father{
    dream(){

    }
}

class Mother{
    dream(){

    }
}

class Child extends Father, Mother{
    call(){
        this.dream();
    }
}