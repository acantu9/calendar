// Call to jQuery to ensure that the code runs after all html elements render completely

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
  const timeBlockEl = document.querySelectorAll(".timeBlockCont");
  const schedules = JSON.parse(localStorage.getItem("schedules")) || [];
  
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

  // Update Schedule
  /*schedules.forEach(function(schedule) {
    // Check if schedule matches description
    if (description.getAttribute("data-hour") === schedule.hour) {
      description.querySelector("textarea").value = schedule.text;
    }
  });*/
  
  timeBlockEl.forEach((element) => {
    element.addEventListener("click", function (event) {
      if (event.target.matches('.saveBtn')) {
        console.log("clicked button");
        console.log(event.target);
        saveSchedule(event);
      }
    });
  });
  
  function saveSchedule(event) {
    const hour = event.target.parentElement.getAttribute("data-hour");
    const text = event.target.parentElement.querySelector("textarea").value.trim();
    const newDescription = {
      hour: hour,
      text : text
    };

    console.log("hour", hour);
    console.log("text", text);
    console.log("description", newDescription);

    if(localStorage.getItem('description')) {
      // parse will take JSON string ---> JavaScript object/array
      const descriptions = JSON.parse(localStorage.getItem('.description'));

      // Check if description has existing hour event
      // If it does
      // Remove that event
      // Replace with the new description
      // If it does not
      // PUSH per usual

      // Check if the hour we are adding is in the description array
      const indexRmv = descriptions.findIndex(function (description) {
        console.log(description);
        if(newDescription.hour === description.hour) {
          return true;
        }
      });
      if (indexRmv !== - 1) {
        descriptions.splice(indexRmv, 1);
      }
      // push new description into descriptions array
      descriptions.push(newDescription);
      // add back into local storage
      localStorage.setItem('schedules', JSON.stringify(descriptions));
    } else {
      const schedules = [];
      schedules.push(newDescription);
      localStorage.setItem('schedules',JSON.stringify(schedules));
    }
  }

  // Update the page with content from local storage
  function loadDescriptions() {
    const schedules = JSON.parse(localStorage.getItem('schedules'));
  }

  window.onload = function() {
    loadDescriptions();
  };
  
});
