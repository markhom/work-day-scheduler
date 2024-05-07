$(function () {
  // Display current date in the header
  function displayCurrentDate() {
      var currentDate = dayjs().format('dddd, MMMM D, YYYY');
      $('#currentDay').text(currentDate);
  }
  displayCurrentDate();

  // Add an event listener to the save button
  $('.saveBtn').on('click', function() {
      var timeBlock = $(this).closest('.time-block'); // Get the closest time block
      var hourId = timeBlock.attr('id'); // Get the ID of the time block (e.g., hour-9)
      var textArea = timeBlock.find('.description'); // Find the textarea element
      var userInput = textArea.val(); // Get the user input from the textarea

      // Save the user input in local storage using the hour ID as the key
      localStorage.setItem(hourId, userInput);
  });

  // Load saved data from local storage
  function loadSavedData() {
      $('.time-block').each(function() {
          var hourId = $(this).attr('id'); // Get the ID of the time block
          var savedData = localStorage.getItem(hourId); // Retrieve data from local storage

          // Set the value of the textarea to the saved data
          $(this).find('.description').val(savedData);
      });
  }
  loadSavedData();

  // Function to update time block classes based on the current hour
  function updateTimeBlocks() {
      var currentHour = dayjs().hour(); // Get the current hour in 24-hour time

      $('.time-block').each(function() {
          var hourId = $(this).attr('id'); // Get the ID of the time block (e.g., hour-9)
          var blockHour = parseInt(hourId.split('-')[1]); // Extract the hour from the ID

          // Remove existing time-related classes
          $(this).removeClass('past present future');

          // Compare blockHour with currentHour and add appropriate class
          if (blockHour < currentHour) {
              $(this).addClass('past');
          } else if (blockHour === currentHour) {
              $(this).addClass('present');
          } else {
              $(this).addClass('future');
          }
      });
  }

  updateTimeBlocks(); // Call the function initially

  // Update the time blocks every minute (60000 milliseconds)
  setInterval(updateTimeBlocks, 60000);
});