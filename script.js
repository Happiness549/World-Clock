function updateTime() {

let capeTownElement = document.querySelector("#cape-town");
let capeTownDateElement = document.querySelector(".date");
let capeTownTimeElement = document.querySelector(".time");
let capeTownTime = moment().tz("Africa/Johannesburg");

capeTownDateElement.innerHTML = capeTownTime.format("MMM Do YYYY");
capeTownTimeElement.innerHTML = capeTownTime.format("h:mm:ss [<small>]A[</small>]");


let parisElement = document.querySelector("#paris");
let parisDateElement = document.querySelector(".date");
let parisTimeElement = document.querySelector(".time");
let parisTime = moment().tz("Africa/Johannesburg");

parisDateElement.innerHTML = parisTime.format("MMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);