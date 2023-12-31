function findMissingNumber(arr) {
    const n = arr.length + 1; // Incremented length to account for the missing number
    const totalSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to N using the formula n*(n+1)/2

    const arrSum = arr.reduce((sum, num) => sum + num, 0); // Calculate sum of array elements
    return totalSum - arrSum; // Missing number is the difference between expected sum and actual sum
}

// Example usage
let numbersArray = [1, 2, 4, 5, 6];
let missingNumber = findMissingNumber(numbersArray);
console.log("The missing number is:", missingNumber);


// "The missing number is:", 3
