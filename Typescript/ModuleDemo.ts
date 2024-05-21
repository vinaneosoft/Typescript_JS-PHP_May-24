import {BankAccount, bankName, changeBank as change } from "./Modules/bank"; // do not put .ts

import * as col from "./Modules/college";

import BankD from './Modules/bank'; // we can use same name or nickname

let account1=new BankAccount();
let account2=new BankAccount("current");
let account3=new BankAccount("savings",23000, 4500, 6666666666); 

console.log(account3);
account2.accType="Savings";
console.log("Bank Name :"+bankName);
/*Cannot assign to 'bankName' because it is an import. */
//bankName="Axis Bank";
change("Axis Bank");
console.log("Bank Name :"+bankName);

let college=new col.College();
let department=new col.Department();

let bankDetails=new BankD();