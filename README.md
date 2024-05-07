# Work Day Scheduler

The Work Day Scheduler is a simple calendar application that allows users to schedule their workday. It includes time blocks for each hour of the workday (from 9 AM to 5 PM) and enables users to save their tasks or notes for each hour. The application uses Day.js for date and time manipulation and jQuery for DOM interactions.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Technologies Used](#technologies-used)


## Features

- **Current Date Display:** Displays the current date at the top of the page.
- **Time Block Scheduling:** Users can schedule tasks or notes for each hour of the workday.
- **Saving Tasks:** Users can save tasks or notes in each time block by clicking the save button.
- **Local Storage:** Saves and retrieves tasks from local storage, so data is persisted even if the page is refreshed.
- **Time Block Styling:** Time blocks are styled based on whether the hour is in the past, present, or future compared to the current time.

## Usage

- Upon opening the application, the current date will be displayed at the top of the page.
- The application includes time blocks for each hour of the workday (from 9 AM to 5 PM).
- Each time block consists of an hour label, a text area for task input, and a save button.
- Enter your tasks or notes in the appropriate time block text area.
- Click the save button to save the task for that hour. The data will be saved in local storage.
- The time blocks are color-coded based on the current time:
    - **Past:** Gray background (the time block is before the current time).
    - **Present:** Red background (the time block is the current hour).
    - **Future:** Green background (the time block is after the current time).

## How It Works

- **Time Block Status:** The application uses Day.js to determine the current time and compares it with each time block's hour to apply appropriate classes (`past`, `present`, `future`).
- **Save Button:** When the save button is clicked, the task input in the corresponding text area is saved to local storage using the time block's ID as the key.
- **Loading Saved Data:** When the page loads, the application retrieves saved tasks from local storage and populates the text areas with the stored data.
- **Auto Update:** The application continuously updates the time block statuses every minute to keep them consistent with the current time.

## Technologies Used

- [jQuery](https://jquery.com/)
- [Day.js](https://day.js.org/)
- [Bootstrap](https://getbootstrap.com/)
- HTML
- CSS

## Example 
![Work Day Scheduler App](assets/05-third-party-apis-homework-demo.gif)

## Links
Github Repository Link: https://github.com/markhom/work-day-scheduler 

Deployed Link on Github: