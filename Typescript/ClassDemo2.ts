// captical case Bank, Account, BankAccount
let varname=899;
// no any accessmodifier allowed for class
 class BankAccount{
   public accountNumber =0; 
   custId =0;   
   accountType ="savings";
   accountBalance=0;
   depositMoney(amount:number):number{
    this.accountBalance=this.accountBalance+amount; // this current object : compulsory
    return this.accountBalance;
   }
   withdrawMoney(amount:number):number{
    if(amount<=this.accountBalance)          
        this.accountBalance=this.accountBalance-amount;
    else
        throw new Error("Insufficient Balance");
    return this.accountBalance;
   }
   xyz=function(){
            console.log("annonymous");     
   }
   arrow=()=>{
    console.log("arrow function");
    }
}

let account1:BankAccount; // custom Data types
account1=new BankAccount();  // default constructor : no parameters // default values
let account2=new BankAccount();
console.log(account1);
console.log(account1.accountNumber);

console.log(account2);
console.log(account2.custId);

account1.accountBalance=45000; // state change
account2.accountBalance=89000; // diff memory

account1.depositMoney(10000); // instance method
account2.depositMoney(20000);
console.log(account1.accountBalance);
console.log(account2.accountBalance);



