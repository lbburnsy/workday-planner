const saveBtn = $(".saveBtn");
const textarea = $(".description");

let hour = moment().format("HH");
console.log(hour);


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

$(document).ready(checkTime());