const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=38.5733&lon=-109.5498&appid=3fb6f8f674efc66c36c4937fc382eb03';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    document.querySelector('#windspeed').textContent = jsObject.wind.speed;

 //   const ctemp = document.querySelector('#current-temp');
 //   const wspeed = document.querySelector('#windspeed');
 //   let ctemp = jsObject.main.temp;
 //   let wspeed = jsObject.wind.speed;

temp.textContent = ctemp.toFixed(2);
windspeed.textContent = wspeed.toFixed(2);
  });

  if (ctemp <= 50 && wspeed > 3) {
      let windchill = ();
      windchill = Math.round(windchill + Number.epsilon) * 10) / 10;
      document.querySelector("#windchill")
  }
  else {
      document.querySelector("#windchill").innerHTML = "N/A"
  }