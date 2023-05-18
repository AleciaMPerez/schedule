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
    localStorage.setItem(text, time);
  });
});

// pull from the local storage

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
    $(time).removeClass("future");
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
