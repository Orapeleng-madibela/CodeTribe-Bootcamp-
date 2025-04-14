//Temperature check(if else)
let temperature = 17; 

if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
  console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
  console.log("It's mild.");
} else {
  console.log("It's warm.");
}
//switch statements
switch (true) {
  case (temperature < 0):
    console.log("It's freezing!");
    break;
  case (temperature >= 0 && temperature <= 15):
    console.log("It's cold.");
    break;
  case (temperature >= 16 && temperature <= 25):
    console.log("It's mild.");
    break;
  default:
    console.log("It's warm.");
    break;
}

//Divisibility check(If else statement)
let number = 18; 

if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}
//Switch statement
switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
      console.log("Divisible by both.");
      break;
    case (number % 2 === 0):
      console.log("Divisible by 2.");
      break;
    case (number % 3 === 0):
      console.log("Divisible by 3.");
      break;
    default:
      console.log("Not divisible by 2 or 3.");
      break;
  }

//For Loops
//Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  //even numbers between 1 and 20
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
  //sum of all numbers from 1 to 100
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log("Sum from 1 to 100 is: " + sum);
  
  const numbers1 = [1, 2, 3, 4, 5]; //array
  for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
  }
  const numbers2 = [3, 7, 2, 5, 10, 6]; //get bigger number
  let largest = numbers2[0];
  for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > largest) {
      largest = numbers2[i];
    }
  }
  console.log("Largest number is: " + largest);
  
//While Loops
let count1 = 1;
while (count1 <= 10) { //numbers from 1 to 10
  console.log(count1);
  count1++;
}
//even numbers between 1 and 20
let count2 = 1;
while (count2 <= 20) {
  if (count2 % 2 === 0) {
    console.log(count2);
  }
  count2++;
}
//Sum of numbers from 1 to 100
let total = 0;
let i = 1;
while (i <= 100) {
  total += i;
  i++;
}
console.log("Sum from 1 to 100 is: " + total);

//mitiples of 5<50
let num = 1;
while (num < 50) {
  if (num % 5 === 0) {
    console.log(num);
  }
  num++;
}

//Do While Loop
//numbers from 1 to 10
let doCount = 1;
do {
  console.log(doCount);
  doCount++;
} while (doCount <= 10);
//sum of number from 1 to 100
let doSum = 0;
let doNum = 1;
do {
  doSum += doNum;
  doNum++;
} while (doNum <= 100);
console.log("Sum from 1 to 100 is: " + doSum);

//Prompt user to enter number greater than 10
let userInput;
do {
  userInput = parseInt(prompt("Enter a number greater than 10:"));
} while (userInput <= 10 || isNaN(userInput));
console.log("You entered: " + userInput);
//guessing game
const secretNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (isNaN(guess) || guess !== secretNumber);
console.log("Correct! The secret number was: " + secretNumber);



