// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    //Listener for click events on the save button
$('.saveBtn').on('click', function() {
    let timeBlockId = $(this).closest('.time-block').attr('id');
    let userInput = $(this).siblings('description').val();
    localStorage.setItem(timeBlockId, userInput);
});
    // Code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. 
    let currentHour = dayjs().hour();

    $('.time-block').each(function() {
        let blockHour = parseInt($(this).attr('id').split('-')[1]);

        if (blockHour < currentHour) {
            $(this).addClass('past').removeClass('present future');
        } else if (blockHour === currentHour) {
            $(this).addClass('present').removeClass('past future');
        } else {
            $(this).addClass('future').removeClass('past present');
        }
    });
    // Code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. 
    $('.time-block').each(function(){
        timeBlockId = $(this).attr('id');
        let savedInput = localStorage.getItem(timeBlockId);
        if(savedInput) {
            $(this).find('.description').val(savedInput);
        }
    });
    // TODO: Add code to display the current date in the header of the page.
  });
  