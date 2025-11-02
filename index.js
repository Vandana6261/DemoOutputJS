let hour = document.getElementById("hour")
let minute = document.getElementById("minute")
let second = document.getElementById("second")
let start = document.getElementById("start")
let reset = document.getElementById("reset")

let secValue = 0;
let minValue = 50;
let hourValue = 0;

second.textContent = "00"
minute.textContent = "00"
hour.textContent = "00"


let intervalFun = function() {
    secValue += 60;
    if(secValue)
    if(secValue < 10) {
        second.textContent = "0" + secValue 
    } else {
        second.textContent = secValue
    }

    if(secValue === 60) {
        minValue++;
        if(minValue < 10) {
            minute.textContent = "0" + minValue
        } else {
            minute.textContent = minValue
        }
        secValue = 0;
        second.textContent = "0" + secValue
    }

    if(minValue === 60) {
        hourValue++;
        if(hourValue < 10) {
            hour.textContent = "0" + hourValue
        } else {
            hour.textContent = hourValue
        }
        minValue = 0;
        minute.textContent = "0" + minValue
    }
}

let id = 0

start.addEventListener("click", (e) => {
    // console.log(e.target.textContent)
    if(e.target.textContent === "Start") {
        e.target.textContent = "Pause"
        id = setInterval(intervalFun, 1000)
    } else if(e.target.textContent === "Pause") {
        e.target.textContent = "Resume"
        clearInterval(id)
    } else if(e.target.textContent === "Resume") {
        e.target.textContent = "Start"
        id = setInterval(intervalFun, 1000)
    }
})

reset.addEventListener("click", (e) => {
    clearInterval(id)
    secValue =  0;
    minValue = 0;
    hourValue = 0;
    second.textContent = "0" + secValue;
    minute.textContent = "0" + minValue;
    hour.textContent = "0" + hourValue;
    start.textContent = "Start"
})


var tl = gsap.timeline()
// tl.from(".box", {
//     y: -200,
//     duration: 0.5,
//     opacity: 0,
//     stagger: 1,
//     // rotation: 360,
// })

gsap.from("#hour", {
    x: -100,
    duration: 0.6,
})
gsap.from("#minute", {
    y: -100,
    duration: 0.6,
})
gsap.from("#second", {
    x: 100,
    duration: 0.6,
})
gsap.from("#start", {
    x: 400,
    duration: 0.8,
})
gsap.from("#reset", {
    x: -400,
    duration: 0.8,
})



