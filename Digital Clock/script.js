const hour = document.getElementById("hour");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");
const ampm = document.getElementById("ampm");

function timeupdator() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  if (h > 12) {
    ampm.innerHTML = "PM";
  } else {
    ampm.innerHTML = "AM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  mins.innerHTML = m;
  secs.innerHTML = s;
}

timeupdator();
setInterval(() => {
  timeupdator();
}, 1000);
