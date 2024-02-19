// Question 1: FizzBuzz
// Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for
// multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print
// "FizzBuzz".


const printFizzBuzz =() => {
    //for loop to iterate through numbers from 1 to 100
    for (let i = 1; i <= 100; i++) {
        //To check if the number is divisible by both 3 and 5 first
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        // To check if the number is divisible by 3 only
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        // To check if the number is divisible by 5 only
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        // If the number is not divisible by 3 or 5, then the number itself will be console logged
        else {
            console.log(i);
        }
    }
}

printFizzBuzz();