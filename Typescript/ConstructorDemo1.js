var BankAccount = /** @class */ (function () {
    function BankAccount() {
        console.log("in non p constructor");
        this.accountNumber = 0;
        this.custId = 0;
        this.accountType = "current";
        this.accountBalance = 0;
    }
    BankAccount.prototype.depositMoney = function (amount) {
        this.accountBalance = this.accountBalance + amount;
        return this.accountBalance;
    };
    BankAccount.prototype.withdrawMoney = function (amount) {
        if (amount >= this.accountBalance)
            this.accountBalance = this.accountBalance - amount;
        else
            throw new Error("Insufficient Balance");
        return this.accountBalance;
    };
    return BankAccount;
}());
var account1; // custom Data types
account1 = new BankAccount(); // default constructor : no parameters
var account2 = new BankAccount();
console.log(account1);
console.log(account1.accountNumber);
console.log(account2);
console.log(account2.custId);
account1.accountBalance = 45000; // diff memory
account2.accountBalance = 89000; // diff memory
account1.depositMoney(10000); // instance method
console.log(account1.accountBalance);
console.log(account2.accountBalance);
var account3 = account1; // this is not new object // another ref to already created object
console.log(account3);
