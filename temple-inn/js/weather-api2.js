const apiURL = "https://api.openweathermap.org/data/2.5/onecall?&lat=32.8473&lon=-117.2742&units=imperial&appid=b49e75d70c70bd1d4ce79a14b0dd0b12";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
   document.querySelector('#current-temp').textContent = jsObject.current.temp;
 document.querySelector('#humidity').textContent = jsObject.daily;
 document.querySelector('#windspeed').textContent = jsObject.current.wind_speed;
 document.querySelector('#humidity').textContent = `humidity: ${jsObject.current.humidity}%`;
document.querySelector('#windspeed').textContent = `windspeed: ${jsObject.current.wind_speed}mph`;
 let iconsrc= `https://openweathermap.org/img/wn/${jsObject.daily.weather[0].icon}.png`;
 const desc = jsObject.day.weather[0].description;
document.querySelector('#current-temp').textContent =`current temp: ${day.weather.temp}`;
 document.querySelector('#icon-src').textContent = iconsrc;
document.querySelector('#weathericon').setAttribute('src', iconsrc);
document.querySelector('#weathericon').setAttribute('alt', desc);
document.querySelector('figcaption').textContent = jsObject.daily[0];
} );

/*
let cards = document.querySelector('.weather .card');
cards.innerHTML = response.daily.map((day,idx) => {
  if (idx <= 2) {
  let dt = new Date(day.dt * 1000);
  let sr = new Date(day.sunrise * 1000).toTimeString();
  let ss = new Date(day.sunset * 1000).toTimeString();
   return
`<p>card</p>`
   `<div class="card">
     <h5 class="card-title">Date</h5>
     <img
      src="https://openweathermap.org/img/wn/${}@4x.png"
      class="card-img-top"
      alt="Weather description"
      />
     <div class="card-body">
        <h3 class="card-title">Weather lable</h3>
        <p class="card-text"></p>
        <p class="card-text"></p>
        <p class="card-text"></p>
        <p class="card-text"></p>
        <p class="card-text"></p>
        <p class="card-text"></p>

     </div>
   </div>`
}
 } );

*/




