/* module name : bank */
export class BankAccount{
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
 }// class body end


 export let bankName="SC Bank";

 export function changeBank(bank:string){
    bankName=bank;
 }
/* in one module we can have only one default export  */
 export default class BankDetails{


 } 

