 class BankAccount{
    private static accountCount:number;
    constructor(
        public accountType="current",
        public accountBalance=0, 
        public customerId=0, 
        public accountNumber=0
    ){
        console.log("in constructor...");
        BankAccount.accountCount++;
    }
    static{
        console.log("in static block 1....");
        BankAccount.accountCount=0;
    }
    static{
        console.log("in static block 2....");
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
    static getAccountCount(){
        return BankAccount.accountCount;
    }
 }
 console.log(BankAccount.getAccountCount());
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
console.log(account1.accountNumber);
console.log(BankAccount.getAccountCount());


 