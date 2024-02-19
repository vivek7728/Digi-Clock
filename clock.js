const realTime = () => {
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  let session = document.getElementById("session");

  if (hrs >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }
  if (hrs > 12) {
    hrs = hrs - 12;
  }
  document.getElementById("hour").innerHTML = hrs;
  document.getElementById("minute").innerHTML = min;
  document.getElementById("second").innerHTML = sec;
};
setInterval(realTime, 1000);
