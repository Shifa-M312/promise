function isOdd(n) {
    return Boolean(n % 2);
}

function findSum(limit) {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        if (isOdd(i)) {
            sum += i;
        }
    }
    return sum;
}

const limit = 10;
console.log(`Sum of odd numbers up to ${limit}: ${findSum(limit)}`);
