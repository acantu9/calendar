// Call to jQuery to ensure that the code runs after all html elements render

$(document).ready(function () {
  // Get the current date
  const currentDate = new Date();

  // Get the current day of the week, month and date
  const currentDayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const currentMonth = currentDate.toLocaleDateString('en-US', { month: 'long' });
  const currentDateOfMonth = currentDate.getDate();

  // Display the current day of the week, month, and date in the HTML elements
  const currentDayOfWeekElement = document.getElementById("currentDay");
  currentDayOfWeekElement.textContent = currentDayOfWeek + ", " + currentMonth + " " + currentDateOfMonth;

  // Apply the past, present, or future class to each textarea
  // Get the current hour
  // Select all description elements
  // Loop through each description element
  // Get the hour value from the id attribute of the description
  const currentHour = new Date().getHours();
  const timeBlocks = document.querySelectorAll(".description");
  timeBlocks.forEach((description) => {
  const hour = parseInt(description.id.split("-")[1]);

    // Check if the hour is in the past, present, or future & render accordingly
    if (hour < currentHour) {
      description.classList.add("past");
    } else if (hour === currentHour) {
      description.classList.add("present");
    } else {
      description.classList.add("future");
    }
  });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // Step 1: Identify the save button element
  const saveButton = document.querySelectorAll('saveBtn');

  // Step 2: Add a click event listener to the save button
  saveButton.addEventListener('click', function() {
    console.log(`Save Button Clicked`);
    // Step 3: Callback function executed when the button is clicked
    
    // Step 4: Access the user input from the corresponding time-block
    const userInput = this.parentNode.querySelector('description').value;

    // Step 5: Retrieve the id of the containing time-block element
    const timeBlockId = this.parentNode.getAttribute('id');

    // Step 6: Create an object or data structure to store the user input
    const data = {
    [timeBlockId]: userInput
    };

    // Step 7: Convert the data to a string
    const dataString = JSON.stringify(data);

    // Step 8: Save the stringified data in local storage
    localStorage.setItem(timeBlockId, dataString);
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
});
