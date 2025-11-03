let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let period = document.getElementById("am-pm")

let date = new Date();

setInterval(function () {
  date = new Date();
  if (date.getSeconds() < 10) {
    second.textContent = "0" + date.getSeconds();
  } else {
    second.textContent = date.getSeconds();
  }

  if (date.getMinutes() < 10) {
    minute.textContent = "0" + date.getMinutes();
  } else {
    minute.textContent = date.getMinutes();
  }

  if (date.getHours() < 10) {
    hour.textContent = "0" + date.getHours();
  } else {
    hour.textContent = date.getHours();
  }

  let hr = date.getHours();

  if(hr < 12){
    period.textContent = "AM";
  } else {
    period.textContent = "PM";
  }
}, 1000);

// setInterval(function () {
//   if (date.getMinutes() < 10) {
//     minute.textContent = "0" + date.getMinutes();
//   } else {
//     minute.textContent = date.getMinutes();
//   }
// }, 1000 * 60);

// setInterval(function () {
//   if (date.getHours() < 10) {
//     hour.textContent = "0" + date.getHours();
//   } else {
//     hour.textContent = date.getHours();
//   }
// }, 1000 * 60 * 60);





gsap.to("#hour", {
    x: -200,
    duration: 0.6,
    repeat: 1,
    yoyo: true
})
gsap.to("#minute", {
    y: -200,
    duraion: 0.6,
    repeat: 1,
    yoyo: true
})
gsap.to("#second", {
    x: 200,
    duration: 0.6,
    repeat: 1,
    yoyo: true
})
