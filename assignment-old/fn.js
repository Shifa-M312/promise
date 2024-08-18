// Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)
function calculateFactorial(n) {
    if (n < 0) {
        return -1; // Invalid input
    } else if (n === 0) {
        return 1; // Base case: factorial of 0 is 1
    } else {
        return n * calculateFactorial(n - 1);
    }
}
console.log(calculateFactorial(5));

// Create an anonymous function that takes an array of numbers as an argument and returns the array with each number doubled. Assign this function to a variable called doubleArray.

const numbers = [1, 2, 3, 4, 5];

const doubleArray = numbers.map(num => num * 2);

console.log(doubleArray);

// Define a function expression factorial that takes one number as a parameter and returns its factorial

const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};
console.log(factorial(5));

// Write a function processArray that takes an array and a callback function as parameters. The function should apply the callback function to each element of the array and return a new array with the results. Use an anonymous function as the callback to double each number in the array.

function processArray(arr, callback) {
    const result = [];
    for (const item of arr) {
        result.push(callback(item));
    }
    return result;
}

const number= [1, 2, 3, 4, 5];

const double = processArray(number, (num) => num * 2);

console.log(double);