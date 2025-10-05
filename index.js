// JavaScript Stopwatch Logic
let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval = null;
let running = false;

const timerDisplay = document.getElementById("timer");
const startStopBtn = document.getElementById("startStopBtn");
const clearText = document.getElementById("clearText");
