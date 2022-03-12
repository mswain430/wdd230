const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=blanding&units=imperial&appid=803cd4031476c2dd2b8c10d59a9e1bde";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#current-temp').textContent = `${jsObject.main.temp}&#8457`;
document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
document.querySelector('.humidity').innerHTML = `Humidity: ${jsObject.main.humidity}`;
document.querySelector('#windspeed').textContent = `Windspeed: ${jsObject.wind.speed} mph`;

const temp = jsObject.main.temp;
const speed = jsObject.wind.temp;
// temp needs to be less than 50 and wind needs to be greater than 3
if(temp <= 50 && speed > 3){
    const windchill = 35.74 + (0.6215 * temp) - 35.75 * Math.pow(speed, 0.16) + (0.4275 * temp) * Math.pow(speed, 0.16);
    document.querySelector('#windchill').innerHTML = `Windchill: ${Math.round(windchill).toFixed(2)} mph`;
} else {
    document.querySelector('#windchill').innerHTML = `N/A`;
}

});

