
const regex = /(?<=@)\w+/;

const text = 'user@example.com';

const match = text.match(regex);

console.log(match); 

// ["example"]
