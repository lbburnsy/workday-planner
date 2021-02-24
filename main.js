const saveBtn = $(".saveBtn");
const textarea = $(".description");

let storedTasks = [];
let hour = moment().format("HH");
console.log(storedTasks);


// Checks time based on moment, and applies appropriate class styling to the textarea
function checkTime() {
    for (let i = 0; i < textarea.length; i++) {
        console.log(textarea[i])
        if (textarea[i].getAttribute("value") > hour) {
            textarea[i].classList.add("future");
        } else if (textarea[i].getAttribute("value") < hour) {
            textarea[i].classList.add("past")
        } else {
            textarea[i].classList.add("present");
        }
    }
}

// Function saves each task in each textarea, and sets it to local storage, then resets the array.
function saveTask() {
    saveBtn.on("click", ()=> {
        for (let i = 0; i < textarea.length; i++) {
            let task = textarea[i].value;
            storedTasks.push(task);
            localStorage.setItem("savedTasks", JSON.stringify(storedTasks));
        }
        storedTasks = [];
    })
}

function displayTasks() {
    let savedTasks = JSON.parse(localStorage.getItem("savedTasks"));
    console.log(savedTasks);
    for (let i = 0; i < textarea.length; i++) {
        textarea[i].textContent = savedTasks[i];
    }
}

function init() {
    checkTime();
    displayTasks();
    saveTask();
}

$(document).ready(init());