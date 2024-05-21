"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bank_1 = require("./Modules/bank"); // do not put .ts
var account1 = new bank_1.BankAccount();
var account2 = new bank_1.BankAccount("current");
var account3 = new bank_1.BankAccount("savings", 23000, 4500, 6666666666);
console.log(account3);
account2.accType = "Savings";
console.log("Bank Name :" + bank_1.bankName);
/*Cannot assign to 'bankName' because it is an import. */
//bankName="Axis Bank";
(0, bank_1.changeBank)("Axis Bank");
console.log("Bank Name :" + bank_1.bankName);
