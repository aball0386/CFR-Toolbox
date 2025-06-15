let stopwatchInterval = null;
let elapsedTime = 0;
const startStopBtn = document.getElementById('startStopBtn');

function updateStopwatchDisplay() {
  // ...
}

function toggleStopwatch() {
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    startStopBtn.textContent = 'Start';
  } else {
    stopwatchInterval = setInterval(() => {
      elapsedTime++;
      updateStopwatchDisplay();
    }, 1000);
    startStopBtn.textContent = 'Stop';
  }
}

function resetStopwatch() {
  if (stopwatchInterval) {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    startStopBtn.textContent = 'Start';
  }
  elapsedTime = 0;
  updateStopwatchDisplay();
}

updateStopwatchDisplay();




