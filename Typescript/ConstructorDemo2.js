var BankAccount = /** @class */ (function () {
    /* Multiple constructor implementations are not allowed. */
    function BankAccount(accountType, accBal, custId, accNum) {
        if (accountType === void 0) { accountType = "current"; }
        if (accBal === void 0) { accBal = 0; }
        if (custId === void 0) { custId = 0; }
        if (accNum === void 0) { accNum = 0; }
        this.accountNumber = accNum;
        this.accountBalance = accBal;
        this.accountType = accountType;
        this.customerId = custId;
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
account1 = new BankAccount("savings", 23000, 4500, 6666666666); // default constructor : no parameters
var account2 = new BankAccount("salary");
var account3 = new BankAccount("salary", 67000);
var account4 = new BankAccount("salary", 55000, 666);
var account5 = new BankAccount();
console.log(account1);
console.log(account2);
console.log(account3);
console.log(account4);
console.log(account5);
