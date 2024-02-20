// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit
// ordering.
// Examples:
// For input 500, the program should return 5.
// For input -56, the program should return -65.
// For input -90, the program should return -9.
// For input 91, the program should return 19.



// function to reverse an input integer and return the reversed integer
function reverseInteger(inputNumber) {

    // convert the input number to a string, split it into an array of characters,
    // reverse the array, and join it back into a string.
    let reversedString = inputNumber.toString().split('').reverse().join('');
    
    // convert the reversed string back to a number, and multiply it by the sign of the original number
    // to preserve its sign.
    let reversedInteger = parseFloat(reversedString) * Math.sign(inputNumber);
  
    // return the reversed integer
    return reversedInteger;
  }
  
  console.log(reverseInteger(500)); // 5
  console.log(reverseInteger(-56)); // -65
  console.log(reverseInteger(-90)); // -9
  console.log(reverseInteger(91)); // 19