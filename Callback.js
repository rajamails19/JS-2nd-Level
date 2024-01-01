function fetchData(callback) {
  // Simulate fetching data asynchronously
  setTimeout(() => {
    const data = 'Hello, Callbacks!';
    callback(data);
  }, 1000);
}
 
function processData(data) {
  console.log(`Processing data: ${data}`);
}
 
fetchData(processData);
 
// Output: Processing data: Hello, Callbacks!
