/* const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=38.5733&lon=-109.5498&p=Blanding&units=imperial&appid=3fb6f8f674efc66c36c4937fc382eb03'; */
const apiURL = 'http://api.openweathermap.org/geo/1.0/zip?zip=84511,US&p=Blanding&units=imperial&appid=3fb6f8f674efc66c36c4937fc382eb03'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
const t =  document.querySelector('#ctemp').textContent = jsObject.main.temp;
const s =  document.querySelector('#ws').textContent = jsObject.wind.speed;

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = desc;
 // temp needs to be less than 50 and wind needs to be greater than 3
if(temp <= 50 && speed > 3){
    const windchill = 35.74 + (0.6215 * t) - 35.75 * Math.pow(s, 0.16) + (0.4275 * t) * Math.pow(s, 0.16);
    document.querySelector('#chill').innerHTML = `${Math.round(windchill).toFixed(2)}`;
} else {
    document.querySelector('#chill').innerHTML = 'N/A';
}

temp.textContent = temp.toFixed(2);
speed.textContent = speed.toFixed(2);

 });