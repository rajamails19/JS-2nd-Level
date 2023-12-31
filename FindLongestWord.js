const findLongestWord = sentence => sentence.split(' ').reduce((longest, word) => (word.length > longest.length ? word : longest), '');

// Example usage
let sentence = "The quick brown fox jumped over the lazy dog";
let longest = findLongestWord(sentence);
console.log("The longest word is:", longest);


// "The longest word is:", "jumped"
