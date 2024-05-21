var BankAccount = /** @class */ (function () {
    function BankAccount(accountType, accountBalance, customerId, accountNumber) {
        if (accountType === void 0) { accountType = "current"; }
        if (accountBalance === void 0) { accountBalance = 0; }
        if (customerId === void 0) { customerId = 0; }
        if (accountNumber === void 0) { accountNumber = 0; }
        this.accountType = accountType;
        this.accountBalance = accountBalance;
        this.customerId = customerId;
        this.accountNumber = accountNumber;
        console.log("in constructor...");
        BankAccount.accountCount++;
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
    BankAccount.getAccountCount = function () {
        return BankAccount.accountCount;
    };
    return BankAccount;
}());
(function () {
    console.log("in static block 1....");
    BankAccount.accountCount = 0;
})();
(function () {
    console.log("in static block 2....");
})();
console.log(BankAccount.getAccountCount());
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
console.log(account1.accountNumber);
console.log(BankAccount.getAccountCount());
