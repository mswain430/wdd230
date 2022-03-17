const apiURL = "http://api.openweathermap.org/geo/1.0/zip?zip=84511,US&p=Blanding&units=imperial&appid=3fb6f8f674efc66c36c4937fc382eb03";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    document.querySelector('#windspeed').textContent = jsObject.wind.speed;
const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#current-temp').textContent =`${jsObject.main.temp}`;
document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
document.querySelector('.humidity').innerHTML = `Humidity: ${jsObject.main.humidity}&percnt;`;
document.querySelector('#windspeed').textContent = `Windspeed: ${jsObject.wind.speed}mph`;

const temp = jsObject.main.temp;
const speed = jsObject.wind.speed;
// temp needs to be less than 50 and wind needs to be greater than 3
if(temp <= 50 && speed > 3){
    const windchill = 35.74 + (0.6215 * temp) - 35.75 * Math.pow(speed, 0.16) + (0.4275 * temp) * Math.pow(speed, 0.16);
    document.querySelector('#windchill').innerHTML = `Windchill: ${Math.round(windchill).toFixed(1)}`;
} else {
    document.querySelector('#windchill').innerHTML = `N/A`;
}

});
