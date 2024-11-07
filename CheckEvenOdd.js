class NumberChecker {
    constructor() { }

    // Polymorphic function to check if numbers are odd or even
    checkOddEven(input) {
        // Checks if the input is a number or an array of numbers
        if (typeof input === 'number') {
            if (input % 2 === 0) {
                return 'Even';
            } else {
                return 'Odd';
            }
        } else if (Array.isArray(input) && input.every(item => typeof item === 'number')) {
            return input.map(item => this.checkOddEven(item));
        } else {
            return 'Invalid input';
        }
    }
}

// Instructor's test cases
// ===== ===== ===== ===== =====

const numberChecker = new NumberChecker();

console.log(numberChecker.checkOddEven(5));
// Expected Output: Odd
console.log(numberChecker.checkOddEven(10));
// Expected Output: Even
console.log(numberChecker.checkOddEven([3, 5, 7, 10]));
// Expected Output: ['Odd', 'Odd', 'Odd', 'Even']
console.log(numberChecker.checkOddEven('Hello'));
// Expected Output: Invalid input