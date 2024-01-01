

const person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet();


// Output: Hello, my name is John
