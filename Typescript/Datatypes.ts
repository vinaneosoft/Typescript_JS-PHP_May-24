
// TS: strict typed language

let salary2:number; // type annotations
salary2=78000;
//salary2="sdsd"; //  Type 'string' is not assignable to type 'number'
console.log(salary2);
console.log(typeof salary2);

// string, boolean





let empId:any;
empId=678;
empId="sixseveneight"

// declare a variable which has either boolean value or number value

let powerStatus: boolean | number;
powerStatus=true;
powerStatus=1;
//powerStatus="ON";

let companyName="Neosoft";
//companyName=9;


let address; address="Rabale"; // any

// type assertion / type casting
let newaddress=<string>address;

const lowervalue=(<string>address).toLowerCase();

// class : custom data types
console.log(lowervalue);

function add(...nums:number[]) : number  {
    return nums.reduce((acc,curr)=>acc+curr);
}
console.log(add(56,67));
console.log(add(67,34,89));
console.log(add(67,34,3,4,5,6,6,77));
function xyz(){   // void
}
function xyz2(){    // number
 return 9;
}
