// General DOM queries
const saveBtn = $(".saveBtn");
const textarea = $(".description");

// Initializes tasks array for storage
let storedTasks = [];

// Sets the hour variable for the checkTime function.
let hour = moment().format("HH");

// Sets the current day text with a moment query
const currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do"));

// Checks time based on moment, and applies appropriate class styling to the textarea
function checkTime() {
  for (let i = 0; i < textarea.length; i++) {
    if (textarea[i].getAttribute("value") > hour) {
      textarea[i].classList.add("future");
    } else if (textarea[i].getAttribute("value") < hour) {
      textarea[i].classList.add("past");
    } else {
      textarea[i].classList.add("present");
    }
  }
}

// Function saves each task in each textarea, and sets it to local storage, then resets the array.
function saveTask() {
  saveBtn.on("click", () => {
    for (let i = 0; i < textarea.length; i++) {
      let task = textarea[i].value;
      storedTasks.push(task);
      localStorage.setItem("savedTasks", JSON.stringify(storedTasks));
    }
    storedTasks = [];
  });
}

// Parses the local Storage, and populates the text areas with the correct data
function displayTasks() {
  let savedTasks = JSON.parse(localStorage.getItem("savedTasks"));
  for (let i = 0; i < textarea.length; i++) {
    textarea[i].textContent = savedTasks[i];
  }
}

// A simple init function to call on page ready
function init() {
  checkTime();
  displayTasks();
  saveTask();
}

$(document).ready(init());
