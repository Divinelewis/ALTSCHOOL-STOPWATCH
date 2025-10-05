// JavaScript Stopwatch Logic
let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval = null;
let running = false;

const timerDisplay = document.getElementById("timer");
const startStopBtn = document.getElementById("startStopBtn");
const clearText = document.getElementById("clearText");

function updateDisplay() {
  const h = hours.toString().padStart(2, "0");
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");
  timerDisplay.textContent = `${h}:${m}:${s}`;
}

function incrementTime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

startStopBtn.addEventListener("click", () => {
  if (!running) {
    timerInterval = setInterval(incrementTime, 1000);
    running = true;
    startStopBtn.textContent = "STOP";
  } else {
    clearInterval(timerInterval);
    running = false;
    startStopBtn.textContent = "START";
  }
});

clearText.addEventListener("click", () => {
  clearInterval(timerInterval);
  running = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
  startStopBtn.textContent = "START";
});
