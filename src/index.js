import "./styles.css";

var secondsInAMinute = 60;
var secondsInAnHour = 60 * secondsInAMinute;
var secondsInADay = secondsInAnHour * 24;
var hoursInADay = 24;
var minutesInAnHour = 60;

var speed = 1;
var countdown = secondsInADay * 2;

var daysEl = document.querySelector("#days");
var hoursEl = document.querySelector("#hours");
var minutesEl = document.querySelector("#minutes");
var secondsEl = document.querySelector("#seconds");

function updateView(time) {
  daysEl.innerHTML = time.days;
  hoursEl.innerHTML = time.hours;
  minutesEl.innerHTML = time.minutes;
  secondsEl.innerHTML = time.seconds;
}

function calculateTime() {
  var remainingSeconds, days, hours, minutes;
  countdown -= 1;
  remainingSeconds = countdown;

  days = Math.floor(remainingSeconds / secondsInADay);
  remainingSeconds -= days * secondsInADay;

  hours = Math.floor(remainingSeconds / secondsInAnHour) % hoursInADay;
  remainingSeconds -= hours * secondsInAnHour;

  minutes = Math.floor(remainingSeconds / secondsInAMinute) % minutesInAnHour;
  remainingSeconds -= minutes * secondsInAMinute;

  updateView({
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: remainingSeconds
  });
}

calculateTime();
setInterval(calculateTime, 1000 / speed);
