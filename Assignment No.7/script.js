// // Write a JS program to find maximum between two numbers.
// function findMax(a, b) {
//     return Math.max(a, b);
//   }
//   console.log(findMax(5, 10)); // Output: 10
//   console.log(findMax(100, 25)); // Output: 100


//   // Write a JS program to find maximum between three numbers.
//   function findMax(a, b, c) {
//     return Math.max(a, b, c);
//   }
//   console.log(findMax(5, 10, 15)); // Output: 15
//   console.log(findMax(100, 25, 50)); // Output: 100



//   // Write a JS program to check whether a number is negative, positive or zero.
//   function checkNumber(num) {
//     if (num > 0) {
//       console.log(num + " is a positive number");
//     } else if (num < 0) {
//       console.log(num + " is a negative number");
//     } else {
//       console.log(num + " is zero");
//     }
//   }

//   checkNumber(5); // Output: 5 is a positive number
//   checkNumber(-10); // Output: -10 is a negative number
//   checkNumber(0); // Output: 0 is zero


//   // Write a JS program to check whether a number is divisible by 5 and 11 or not.
//   function checkDivisibility(num) {
//     if (num % 5 == 0 && num % 11 == 0) {
//       console.log(num + " is divisible by 5 and 11");
//     } else {
//       console.log(num + " is not divisible by 5 and 11");
//     }
//   }

//   checkDivisibility(55); // Output: 55 is divisible by 5 and 11
//   checkDivisibility(25); // Output: 25 is not divisible by 5 and 11


//   // Write a js program to check whether a number is even or odd.
//   function isEven(num) {
//     if (num % 2 == 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   // Example Usage
//   console.log(isEven(4)); // true
//   console.log(isEven(7)); // false



//   // Write a js program to check whether a year is leap year or not.
//   function isLeapYear(year) {
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   // Example Usage
//   console.log(isLeapYear(2000)); // true
//   console.log(isLeapYear(1900)); // false

//   // Write a js program to check whether a character is alphabet or not.
//   function isAlphabet(char) {
//     if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   // Example Usage
//   console.log(isAlphabet("a")); // true
//   console.log(isAlphabet("1")); // false


//   // Write a js program to input any alphabet and check whether it is vowel or consonant.
//   function isVowel(char) {
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u" ||
//       char == "A" ||
//       char == "E" ||
//       char == "I" ||
//       char == "O" ||
//       char == "U"
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   // Example Usage
//   console.log(isVowel("a")); // true
//   console.log(isVowel("b")); // false


//   // Write a js program to input any character and check whether it is alphabet, digit or special character.
//   function checkCharType(char) {
//     if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//       return "Alphabet";
//     } else if (char >= "0" && char <= "9") {
//       return "Digit";
//     } else {
//       return "Special Character";
//     }
//   }

//   // Example Usage
//   console.log(checkCharType("a")); // Alphabet
//   console.log(checkCharType("1")); // Digit
//   console.log(checkCharType("%")); // Special Character



//   // Write a js program to check whether a character is uppercase or lowercase alphabet.

//   function isUpperCase(char) {
//     if (char >= "A" && char <= "Z") {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   function isLowerCase(char) {
//     if (char >= "a" && char <= "z") {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   // Example Usage
//   console.log(isUpperCase("A")); // true
//   console.log(isLowerCase("b")); // true


//   // Write a js program to input week number and print week day.
//   var weekNum = parseInt(prompt("Enter week number: "));
//   var days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   console.log(`Week day: ${days[weekNum - 1]}`);


//   // Write a js program to input month number and print number of days in that month.
//   var monthNum = parseInt(prompt("Enter month number: "));
//   var daysInMonth;

//   if (monthNum === 2) {
//     daysInMonth = 28;
//   } else if (
//     monthNum === 4 ||
//     monthNum === 6 ||
//     monthNum === 9 ||
//     monthNum === 11
//   ) {
//     daysInMonth = 30;
//   } else {
//     daysInMonth = 31;
//   }

//   console.log(`Number of days in month: ${daysInMonth}`);



//   // Write a js program to count total number of notes in given amount.
//   var amount = parseInt(prompt("Enter the amount: "));
//   var notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
//   var count = [];

//   for (var i = 0; i < notes.length; i++) {
//     count[i] = Math.floor(amount / notes[i]);
//     amount %= notes[i];
//   }

//   for (var i = 0; i < notes.length; i++) {
//     if (count[i] !== 0) {
//       console.log(`${count[i]} notes of Rs. ${notes[i]}`);
//     }
//   }
//   // Example: If the user enters 2519, the output will be:
//   // 1 notes of Rs. 2000
//   // 1 notes of Rs. 500
//   // 1 notes of Rs. 10
//   // 1 notes of Rs. 5
//   // 4 notes of Rs. 2


//   // Write a js program to input angles of a triangle and check whether triangle is valid or not.
//   var angle1 = parseInt(prompt("Enter angle 1: "));
//   var angle2 = parseInt(prompt("Enter angle 2: "));
//   var angle3 = parseInt(prompt("Enter angle 3: "));
//   var sumOfAngles = angle1 + angle2 + angle3;
//   var isValid =
//     sumOfAngles === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0;

//   if (isValid) {
//     console.log("Triangle is valid");
//   } else {
//     console.log("Triangle is not valid");
//   }


