// Array, Set, Map

let salaryArray=[45000,"Hi",67000,56000,23000, true];
let salaryArray2=new Array();
salaryArray2.push(45000);
salaryArray2.push("hi");

let salArray=new Array<number>();
salArray.push(67000); /* push(...items: number[]): number */
//salArray.push("hello");
salArray.push(67000);
salArray.push(56000);
console.log(salArray);

// use pop method
let names=new Array<string>();
names.push("Mahi"); /* push(...items: string[]): number */
names.push("Kiran");
//names.push(67);
names.push("pooja","mohan","kirti","pooja");
console.log(names);

// use pop method

/* 
push(...items: T[]): number  : type safe method
*/

let idSet=new Set<number>();
idSet.add(5678);
idSet.add(4555);
idSet.add(1111);
idSet.add(5678);
idSet.add(4545);
idSet.add(2323);
//idSet.add(new Number(56));

console.log(idSet);


//word==>meaning

let dictionary=new Map<string, string>();

dictionary.set("sun","xyz.....");
dictionary.set("watch", "abc.....");
dictionary.set("sun", "pqr.....");
dictionary.set("moon", "abc.....");
console.log(dictionary);

let test=new Array<Number>();
test.push(56,78,89);
test.push(new Number(567));
