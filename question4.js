// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the
// string, and then returns the result string.
// Examples:
// "hi"=> returns "Hi"
// "i love programming"=> returns "I Love Programming"


// a function to capitalize the first letter of each word in the inputString
function capitalizeWords(inputString) {
    // Split the input string into an array of words
    let words = inputString.split(" ");

    // iterate through each word in the array
    for (let i = 0; i < words.length; i++) {
        // console.log(words[i]);
        // capitalize the first letter of each word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    console.log( words);
    // join the words back into a single string
    let resultString = words.join(" ");

    return resultString;
}

console.log(capitalizeWords("hi")); // "Hi"
console.log(capitalizeWords("i love programming")); // "I Love Programming"


