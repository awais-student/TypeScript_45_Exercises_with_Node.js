"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mango = "Mango";
let upperCase = "mango";
let ten = 10;
let twenty = 20;
let fruits = ["mango", "orange", "apple"];
console.log("Is mango is equal to mango");
console.log(mango == mango);
console.log("\nIs mango is not equal to mango");
console.log(mango != mango);
console.log("\nIs MANGO is equal to mango after converting to lowercase?");
console.log(upperCase.toLowerCase() == "mango");
console.log("\n Is MANGO is not equal to mango after converting to lowercase?");
console.log(upperCase.toLowerCase() != "mango");
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
console.log("\nIs ten is greater than zero?");
console.log(10 > 0);
console.log("\nIs twenty is less than 10?");
console.log(twenty < ten);
console.log("\nIs ten greater than or equal to 5?");
console.log(ten >= 5);
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);
console.log("\nTwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\nTwenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
console.log("\nTwenty is greater than 50 OR 20 is equal to 20");
console.log(twenty > 50 || twenty == 20);
console.log("\nTwenty is greater than 50 OR 20 is not equal to 20");
console.log(twenty > 50 || twenty != 20);
console.log("\nIs Mango include in my fruits Array?");
console.log(fruits.includes("mango"));
console.log("\nIs Mango not include in my Array?");
console.log(!fruits.includes("mango"));
