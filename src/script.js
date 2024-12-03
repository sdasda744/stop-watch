const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const continueBtn = document.querySelector("#continueBtn");
const restartBtn = document.querySelector("#restartBtn");

const hourText = document.querySelector(".hour-text");
const minuteText = document.querySelector(".minute-text");
const secondText = document.querySelector(".second-text");
const millisecondsText = document.querySelector(".milliseconds-text");

let second = 1, minute = 0, hour = 0, milliseconds = 0;

const startTime = () => {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        second += 1;

        if (second === 60) {
            second = 0;
            minute += 1;

            if (minute === 60) {
                hour += 1;
            }
        }
    }

    hourText.textContent = hour < 10 ? "0" + hour.toString() : hour;
    minuteText.textContent = minute < 10 ? "0" + minute.toString() : minute;
    secondText.textContent = second < 10 ? "0" + second.toString() : second;
    millisecondsText.textContent = milliseconds;
}

let intervalID;

startBtn.addEventListener("click", () => {
    intervalID = setInterval(startTime, 10);
})

pauseBtn.addEventListener("click", () => {
    clearInterval(intervalID);
})

continueBtn.addEventListener("click", () => {
    clearInterval(intervalID);
    intervalID = setInterval(startTime, 10);
})

restartBtn.addEventListener("click", () => {
    second = 0, minute = 0, hour = 0;
    clearInterval(intervalID);
    hourText.textContent = "0" + 0;
    minuteText.textContent = "0" + 0;
    secondText.textContent = "0" + 0;
    intervalID = setInterval(startTime, 10);
})

