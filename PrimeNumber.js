// Students write their code between these lines. 
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimesInRange(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number' || start > end) {
        return 'Invalid input. Please provide a number or a valid range (array of two numbers).';
    }
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return `Primes between ${start} and ${end}: ${primes}`;
}

// Polymorphic messageFormatter function
function messageFormatter(input) {
    if (typeof input === 'boolean') {
        return input ? `${input} is a prime number.` : `${input} is NOT a prime number.`;
    } else if (typeof input === 'string') {
        return input;
    } else {
        return 'Invalid input.';
    }
}
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output. 
//

// Write isPrime(num), which returns true if the number is prime and false otherwise.
function checkPrimeNum(num) {
    return messageFormatter(isPrime(num));
}

// Extend with findPrimesInRange(start, end) to return all prime numbers within a specified range.

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(checkPrimeNum(2));
// Expected Output: 2 is a prime number.

console.log(checkPrimeNum(1));
// Expected Output: 1 is NOT a prime number.

console.log(checkPrimeNum(13));
// Expected Output: 13 is a prime number.

console.log(checkPrimeNum(25));
// Expected Output: 25 is NOT a prime number.

console.log(findPrimesInRange([10, 20]));
// Expected Output: Primes between 10 and 20: [11, 13, 17, 19]

console.log(findPrimesInRange([30, 50]));
// Expected Output: Primes between 30 and 50: [31, 37, 41, 43, 47]

console.log(findPrimesInRange('test'));
// Expected Output: Invalid input. Please provide a number or a valid range (array of two numbers).