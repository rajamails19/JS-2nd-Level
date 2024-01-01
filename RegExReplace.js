
const regex = /John/g;

const text = 'John and John and John';

const replacedText = text.replace(regex, 'Jane');

console.log(replacedText);

// "Jane and Jane and Jane"
