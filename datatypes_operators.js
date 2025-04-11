// Numbers
let num1 = 10; // integer
let num2 = 3.142; // float

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;
let exponentiation = num1 ** 3;

console.log("Add : " + addition);
console.log("Subtraction : " + subtraction);
console.log("Multiply : " + multiplication);
console.log("Divide : " + division);
console.log("Modulus : " + modulus);
console.log("Exponentiation : " + exponentiation);

// Boolean and Operators

// Compare 2 numbers
let num3 = 10;  // Changed to avoid redeclaring num1
let num4 = 3;

let greater = num3 > num4;
let equal = num3 == num4;
let lessOrEqual = num3 <= num4;

console.log("Check if Num3 is greater than Num4 : " + greater);
console.log("Check if Num3 equals Num4 : " + equal);
console.log("Check if Num3 is less or Equal to Num4 : " + lessOrEqual);

// When x=8 and y=12
let x = 8;
let y = 12;

let isGreater = x > y;
let isLessOrEqual = x <= y;
let isEqual = x == y;
let isNotEqual = x != y;

console.log("Is x greater than y : " + isGreater);
console.log("Is x less or equal to y : " + isLessOrEqual);
console.log("Is x equal to y : " + isEqual);
console.log("Is x not equal to y : " + isNotEqual);

// Logical Operations
let a = true;
let b = false;

let add = a && b;
let or = a || b;
let notA = !a;

console.log("a AND b : " + add);
console.log("a OR b : " + or);
console.log("NOT a : " + notA);

// Assignment operator (p=10)
let p = 10;

p += 5;  // a
console.log("p += 5 : " + p);
p -= 5;  // b
console.log("p -= 5 : " + p);
p *= 5;  // c
console.log("p *= 5 : " + p);
p /= 5;  // d
console.log("p /= 5 : " + p);
p %= 5;  // e
console.log("p %= 5 : " + p);
