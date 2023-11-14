const hours = document.getElementById("hour");
const minutes = document.getElementById("mins");
const seconds = document.getElementById("secs");
const milliseconds = document.getElementById("mili");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime;
let running = false;
let elapsed = 0;
let time;

start.addEventListener("click", (event) => {
  event.stopPropagation();

  startStopwatch();
});

stop.addEventListener("click", (event) => {
  event.stopPropagation();
  stopStopwatch();
});

reset.addEventListener("click", (event) => {
  event.stopPropagation();
  resetStopwatch();
});

const startStopwatch = () => {
  if (running) {
    return;
  }

  startTime = Date.now() - elapsed;
  time = setInterval(() => {
    updateTime();
  }, 10);

  running = true;
};

const stopStopwatch = () => {
  if (running) {
    elapsed = Date.now() - startTime;
    running = false;
    clearInterval(time);
  }
};

const resetStopwatch = () => {
  elapsed = 0;
  running = false;
  clearInterval(time);
  resetFields();
};

const updateTime = () => {
  const elapsed = Date.now() - startTime;
  const updatedHours = Math.floor(elapsed / 3600000);
  const updatedMinutes = Math.floor((elapsed % 3600000) / 60000);
  const updatedSeconds = Math.floor((elapsed % 60000) / 1000);
  const updatedMilliseconds = elapsed % 1000;

  milliseconds.innerText = updatedMilliseconds;
  seconds.innerText = updatedSeconds;
  minutes.innerText = updatedMinutes;
  hours.innerText = updatedHours;
};

const resetFields = () => {
  milliseconds.textContent = "000";
  seconds.innerText = "0";
  minutes.innerText = "0";
  hours.innerText = "0";
};
