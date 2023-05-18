// HOW DO I MAKE THE TIME CONTINUOUS?
var todayDate = dayjs().format("dddd, MMM DD, YYYY, h:mm A");
$("#currentDay").text(todayDate);

// When the save button is selected
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(text);
    console.log(time);

    // Save to the local storage
    localStorage.setItem(time, text);
  });
});

//Pulling from the local storage

// Pulls the local storage Item
var result = localStorage.getItem("hour-9")
//stores the HTML element with the ID Hour-9
var hour9 = document.querySelector("#hour-9")
//selects the description class in the HTML and saves it to a variable
var hour9description = hour9.querySelector(".description")
//sets text of the description as the result.
hour9description.textContent = result


var result = localStorage.getItem("hour-10")
var hour10 = document.querySelector("#hour-10")
var hour10description = hour10.querySelector(".description")
hour10description.textContent = result

var result = localStorage.getItem("hour-11")
var hour11 = document.querySelector("#hour-11")
var hour11description = hour11.querySelector(".description")
hour11description.textContent = result

var result = localStorage.getItem("hour-12")
var hour12 = document.querySelector("#hour-12")
var hour12description = hour12.querySelector(".description")
hour12description.textContent = result

var result = localStorage.getItem("hour-13")
var hour13 = document.querySelector("#hour-13")
var hour13description = hour13.querySelector(".description")
hour13description.textContent = result

var result = localStorage.getItem("hour-14")
var hour14 = document.querySelector("#hour-14")
var hour14description = hour14.querySelector(".description")
hour14description.textContent = result

var result = localStorage.getItem("hour-15")
var hour15 = document.querySelector("#hour-15")
var hour15description = hour15.querySelector(".description")
hour15description.textContent = result

var result = localStorage.getItem("hour-16")
var hour16 = document.querySelector("#hour-16")
var hour16description = hour16.querySelector(".description")
hour16description.textContent = result

var result = localStorage.getItem("hour-17")
var hour17 = document.querySelector("#hour-17")
var hour17description = hour17.querySelector(".description")
hour17description.textContent = result




// The time blocks are highlighted to indicate the past, present, future
// for each time-block class, run the following function
$(".time-block").each(function () {
  
  var time = parseInt($(this).attr("id").split("-")[1]);
  console.log(time);

  var currentHour = dayjs().hour();
  console.log(currentHour);
  // if the time is less than current time, it is past
  if (time < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
    // if time is equal to current time, it is present
  } else if (time === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
    // if time is more than current time, it is future
  } else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
});
