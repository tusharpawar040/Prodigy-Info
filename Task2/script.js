let startTime;
let isRunning = false;
let elapsedTime = 0;
let lapTimes = [];

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        isRunning = true;
        updateDisplay();
        runStopwatch();
    }
}

function runStopwatch() {
    setTimeout(function () {
        if (isRunning) {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
            runStopwatch();
        }
    }, 10);
}

function pauseStopwatch() {
    isRunning = false;
}

function resetStopwatch() {
    isRunning = false;
    elapsedTime = 0;
    lapTimes = [];
    updateDisplay();
    clearLapTimes();
}

function recordLapTime() {
    if (isRunning) {
        const lapTime = elapsedTime;
       
        lapTimes.push(lapTime);
        updateLapTimes();
    }
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    const formattedTime = formatTime(elapsedTime);
    displayElement.textContent = formattedTime;
}

function formatTime(time) {
    const date = new Date(time);
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

function updateLapTimes() {
    const lapTimesElement = document.getElementById('lapTimes');
    const lapIndex = lapTimes.length;
    const lapTime = lapTimes[lapIndex - 1];
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapIndex}: ${formatTime(lapTime)}`;
    lapTimesElement.appendChild(lapItem);
}

function clearLapTimes() {
    const lapTimesElement = document.getElementById('lapTimes');
    lapTimesElement.innerHTML = '';
}
