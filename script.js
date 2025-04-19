function updateTime() {

let capeTownElement = document.querySelector("#cape-town");
if(capeTownElement){
let capeTownDateElement = document.querySelector(".date");
let capeTownTimeElement = document.querySelector(".time");
let capeTownTime = moment().tz("Africa/Johannesburg");

capeTownDateElement.innerHTML = capeTownTime.format("MMM Do YYYY");
capeTownTimeElement.innerHTML = capeTownTime.format("h:mm:ss [<small>]A[</small>]");
}


  let parisElement = document.querySelector("#paris");
  if(parisElement){
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "h:mm:ss [<small>]A[</small>]");
}
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    `;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  
  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);









