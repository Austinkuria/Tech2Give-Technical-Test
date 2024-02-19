// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100
/*The Fibonacci sequence is a series of numbers where a number is the sum of previous two numbers in the series.
  Starting with 0 and 1.It begins 0, 1, 1, 2, 3,...*/


// arrow function to generate the Fibonacci sequence up to a given numlimit which is 100 our case)
const generateFibonacciSequence = (numLimit) => {
  // initialize the first two Fibonacci numbers
  let previousNumber = 0;
  let currentNumber = 1;

  // print the initial values(0 and 1)
  console.log(previousNumber);
  console.log(currentNumber);

  // while loop iterates if the current number is less than or equal to the numLimit
  while (currentNumber <= numLimit) {
    // calculate the next Fibonacci number
    const nextNumber = previousNumber + currentNumber;

        // break the loop if the nextNumber exceeds the numLimit
      if (nextNumber > numLimit) {
          break;
      }

    // print the next number
    console.log(nextNumber);

    // update the previous and current numbers for the next iteration
    previousNumber = currentNumber;
    currentNumber = nextNumber;
  }
}

// generate the Fibonacci sequence up to 100
generateFibonacciSequence(100);




 