// Question 3: Power of Two
// Write a program that takes an integer as input and returns true if the input is a power of two.
//Examples:
// 8=> returns true
// 6=> returns false



// a function to check if the inputNumber is a power of two
function isPowerOfTwo(inputNumber) {
   // to check for if the inputNumber is 0 which should return false since it is not a power of two
   if (inputNumber === 0) {
     return false;
   }
 
   // repeatedly divide the inputNumber by 2 until it reaches 1
   while (inputNumber !== 1) {
     // to check if the inputNumber is not divisible by 2 which returns false since  it's not  a power of two
     if (inputNumber % 2 !== 0) {
       return false;
     }
 
     // divide the inputNumber by 2 to check for the next smaller power
     inputNumber = inputNumber / 2;
   }
 
   // if the loop finishes without returning false, the inputNumber is a power of two
   return true;
 }
 
 console.log(isPowerOfTwo(8));  // true
 console.log(isPowerOfTwo(6)); // false

 