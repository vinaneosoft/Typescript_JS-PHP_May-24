 class BankAccount{
    accountNumber : number;
    custId : number;
    accountType : string;
    accountBalance:number;

    constructor(){
        console.log("in non p constructor");
        this.accountNumber=0;
        this.custId=0;
        this.accountType="savings";
        this.accountBalance=0;
    }
   /*  Multiple constructor implementations are not allowed
    constructor(custId:number){
     
    } */
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
 }
 
 let account1:BankAccount; // custom Data types
 account1=new BankAccount();  // default constructor of class : no parameters // default values
 let account2=new BankAccount();
 console.log(account1);
 console.log(account1.accountNumber);
 console.log(account2);
 console.log(account2.custId);
 account1.accountBalance=45000; // state change
 account2.accountBalance=89000; // diff memory
 console.log(account1.accountBalance);
 console.log(account2.accountBalance);
 account1.depositMoney(10000); // instance method
 account2.depositMoney(20000);
 console.log(account1.accountBalance);
 console.log(account2.accountBalance);
 console.log(account1);
 console.log(account2);