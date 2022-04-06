const apiURL = "https://api.openweathermap.org/data/2.5/onecall?&lat=32.8473&lon=-117.2742&units=imperial&appid=b49e75d70c70bd1d4ce79a14b0dd0b12";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
   document.querySelector('#current-temp').textContent = jsObject.current.temp;
  document.querySelector('.humidity').textContent = jsObject.current.humidity;
 document.querySelector('#windspeed').textContent = jsObject.current.wind_speed;
 document.querySelector('.humidity').textContent = `humidity: ${jsObject.current.humidity}%`;
document.querySelector('#windspeed').textContent = `windspeed: ${jsObject.current.wind_speed}mph`;
const iconsrc= `http://openweathermap.org/img/wn/${jsObject.weather.icon[0]}.png`;
const desc = jsObject.weather.description;
document.querySelector('#current-temp').textContent =`current temp: ${jsObject.current.temp}`;
 document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
});

