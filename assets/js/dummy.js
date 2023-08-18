// Set the interval in milliseconds
var interval = 5000;

// Get all the radio buttons
var radioButtons = document.querySelectorAll('input[type="radio"][name="select"]');

// Set the initial index
var index = 0;

// Start the interval
setInterval(function() {
  // Increment the index
  index++;

  // If the index is greater than the number of radio buttons, reset it to 0
  if (index >= radioButtons.length) {
    index = 0;
  }

  // Simulate a click on the current radio button
  radioButtons[index].click();
}, interval);
