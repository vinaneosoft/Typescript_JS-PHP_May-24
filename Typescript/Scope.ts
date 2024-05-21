class BankAccount{
    /* if we r declaring instance variables in constructor parenthesis, then
    compulsory need to use scope keywords */
    constructor(
        private accountType="current",
        public  accountBalance=0, 
        private customerId=0, 
        private accountNumber=0
    ){
    }

    depositMoney(amount:number):number{
     this.accountBalance=this.accountBalance+amount;
     return this.accountBalance;
    }
 
    withdrawMoney(amount:number):number{
     if(amount>=this.accountBalance)
         this.accountBalance=this.accountBalance-amount;
     else
         throw new Error("Insufficient Balance");
     return this.accountBalance;
    }


// we need some public properties which will returns us values of private varibles
// or to change the values of private variables

    get custId(){
        return this.customerId;
    }
    set custId(customerId:number){
        this.customerId=customerId;
    }
    get accType(){
        return this.accountType
    }
    set accType(accountType:string){
        this.accountType=accountType;
    }
    // implement getter setter for accountNumber and accountBalance
    
 }// class body end
 // scope of private properties ends here
 
 let account1:BankAccount; // custom Data types
 account1=new BankAccount("savings",23000, 4500, 6666666666);  // default constructor : no parameters
 let account2=new BankAccount("salary");
 let account3=new BankAccount("salary", 67000);
 let account4=new BankAccount("salary", 55000,666);
 let account5=new BankAccount();
 console.log(account1);
 console.log(account2);
 console.log(account3);
 console.log(account4);
 console.log(account5);
 

console.log("Customer Id of account 2:"+account2.custId);
account2.custId=4567;
account3.accType="savings";
console.log("Type of account 3: "+account3.accType);

