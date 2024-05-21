"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeBank = exports.bankName = exports.BankAccount = void 0;
/* module name : bank */
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
    Object.defineProperty(BankAccount.prototype, "custId", {
        get: function () {
            return this.customerId;
        },
        set: function (customerId) {
            this.customerId = customerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "accType", {
        get: function () {
            return this.accountType;
        },
        set: function (accountType) {
            this.accountType = accountType;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}()); // class body end
exports.BankAccount = BankAccount;
exports.bankName = "SC Bank";
function changeBank(bank) {
    exports.bankName = bank;
}
exports.changeBank = changeBank;
