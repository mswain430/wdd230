const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=blanding&units=imperial&appid=3fb6f8f674efc66c36c4937fc382eb03";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
   document.querySelector('#current-temp').textContent = jsObject.main.temp;
const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;



});

