function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

// Example usage
let sentence = "Hello, how are you?";
let vowelCount = countVowels(sentence);
console.log("Number of vowels:", vowelCount);


// "Number of vowels:", 7
