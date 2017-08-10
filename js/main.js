// The Countdown
var countDownDate = new Date("dec 7, 2017 13:30:00").getTime();

// Get date
var now = new Date();
//now.setDate(9);

// Setting day
var day = now.getDay();
// Setting up the Background Colour change
console.log (day)
setColor(day);

// Update every second & Function to set the output
var countdownfunction = setInterval(function(/*now*/) {

    // Get time
    var time = new Date().getTime();
    
    // Distance between now & the selected date
    var distance = countDownDate - time;
    
    // The time calculations
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // How to output the result
    document.getElementById("info").innerHTML = days + " d  ·  " + hours + " h  ·  "
    + minutes + " m  ·  " + seconds + " s";
    
    // If the countdown is over, display the following
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("info").innerHTML = "Enjoy The Holiday!";
    }
}, 1000);


// The Background Colour
function setColor(day) {
  var background = document.querySelector('.container');
  
  if( day == "0" ) {
    background.style.backgroundColor = "#d886c5";
  } else if( day == "1" ) {
    background.style.backgroundColor = "#0b99ac";
  } else if ( day == "2" ) {
    background.style.backgroundColor = "#ff9e2c";
  } else if ( day == "3" ) {
    background.style.backgroundColor = "#2fb234";
  } else if ( day == "4" ) {
    background.style.backgroundColor = "#f03d7b";
  } else if ( day == "5" ) {
    background.style.backgroundColor = "#0c4569";
  } else {
    background.style.backgroundColor = "#505050";
  } 
}

