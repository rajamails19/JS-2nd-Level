

// Function that simulates an event listener with a callback
function addEventListener(eventType, callback) {
  // Simulate an event occurring
  console.log(`Event ${eventType} occurred.`);
  callback(); // Invoke the callback when the event occurs
}

// Callback function to handle the event
function handleEvent() {
  console.log('Event handled!');
}

// Using the addEventListener function with a callback
addEventListener('click', handleEvent);

/*
"Event click occurred."
"Event handled!"
"Event message occurred."
*/
