// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.
// eg " Hello World " => returns 3

function countVowels(inputString) {
    // define a string containing all vowels (both uppercase and lowercase)
    const vowels = 'aAeEiIoOuU';
    
    // initialize a variable to store the vowelsCount and assign it a value of 0
    let vowelsCount = 0;
  
    // iterate through each character in the inputString
    for (let i = 0; i < inputString.length; i++) {
  
        // check if the current character is a vowel
        if (vowels.includes(inputString[i])) {
            // if the character is a vowel,the vowelsCount is incremented by 1
            vowelsCount++;
        }
    }
  
    // Return the total count of vowels in the string
    return vowelsCount;
  }
  
  console.log(countVowels("Hello World")); // Output: 3
  