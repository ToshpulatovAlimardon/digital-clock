const hourEl = document.querySelector("#hour"),
  minuteEl = document.querySelector("#minutes"),
  secondEl = document.querySelector("#seconds"),
  ampmEl = document.querySelector("#ampm");

function updateClock() {
  let h = new Date().getHours(),
    m = new Date().getMinutes(),
    s = new Date().getSeconds(),
    ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
