const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const newYear = new Date("2023-12-25 00:00:00");
const headliner = document.getElementById("headline");

function countdownTimer() {
  let dif = newYear - Date.now();
  if (dif > 0) {
    let d = Math.floor(dif / 1000 / 60 / 60 / 24);
    let h = Math.floor(dif / 1000 / 60 / 60) % 24;
    let m = Math.floor(dif / 1000 / 60) % 60;
    let s = Math.floor(dif / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
  } else {
    days.innerHTML = 0;
    hours.innerHTML = 0;
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;
    headliner.innerHTML = "Merry Christmas!!!";
    clearInterval(timer);
    timer = null;
  }
}

let timer = setInterval(countdownTimer, 1000);
