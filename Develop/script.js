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

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
 
  // Apply the past, present, or future class to each textarea
  // Get the current hour
  const currentHour = new Date().getHours();

  // Select all time-block elements
  const timeBlocks = document.querySelectorAll(".description");

  // Loop through each time-block element
  timeBlocks.forEach((description) => {
  // Get the hour value from the id attribute of the time-block
  const hour = parseInt(description.id.split("-")[1]);

    // Check if the hour is in the past, present, or future
    if (hour <= currentHour) {
      description.classList.add("past");
    } else if (hour === currentHour) {
      description.classList.add("present");
    } else {
      description.classList.add("future");
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
});
