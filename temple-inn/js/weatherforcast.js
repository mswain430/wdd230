// https://api.openweathermap.org/data/2.5/onecall?&lat=32.8473&lon=-117.2742&units=imperial&appid=9421950099da8441c44c6cedafb441dd

const app = {
    init: () => {
        document.getElementById('btnGet').addEventListener('click', app.fetchWeather);
        document.getElementById('btnCurrent').addEventListener('click', app.getLocation);
    },
    fetchWeather: (ev) => {
        //use values from long & lat to fetch weather
        let lat = document.getElementById('latitude').value;
        let lon = document.getElementById('longitude').value;
        let key = '9421950099da8441c44c6cedafb441dd'
        let lang = 'en';
        let units = 'imperial';
        let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&lang=${lang}&appid=9421950099da8441c44c6cedafb441dd`;
        //fetch weather
       // https://api.openweathermap.org/data/2.5/onecall?&lat=32.8473&lon=-117.2742&units=imperial&lang=en&appid=9421950099da8441c44c6cedafb441dd
       fetch(url)
       .then(resp=>{
           if(!resp.ok) throw new Error(resp.statusText);
           return resp.json();
       })
       .then((data) => {
         app.showWeather(data);
       })
       .catch(console.err);
    },
    getLocation: (ev) => {
        let opts = {
            enableHighAccuracy: true,
            timeout: 1000 * 10, //10s
            maximumAge: 1000 * 60 * 5, //5m
        };
        navigator.geolocation.getCurrentPosition(app.ftw,appwtf,opts);
    },
    ftw: (position) => {
        // success got position
        document.getElementById('latitude').value = position.coords.latitude.toFixed(2);
        document.getElementById('longitude').value = position.coords.longitude.toFixed(2);
    },
    wtf: (err) => {
        //geolocation failed
        console.error(err);
    },
    showWeather: (resp)=> {
      console.log(resp);
      let row = document.querySelector('.weather.row');
      //cear out old weather and add the new
      // row.innerHTML = '';
      let currenttemp = document.querySelector('#current-temp');
      currenttemp.innerHTML = `Current Temperature: ${resp.current.temp}`;
      row.innerHTML = resp.daily
      .map((day, idx) => {
          if(idx <= 2) {
            let dt = new Date(day.dt * 1000); //timestamp * 1000
            let sr = new Date(day.sunrise * 1000).toTimeString();
            let ss = new Date(day.sunset * 1000).toTimeString();
            return ` <div class="col">
   <div class="wcard">
     <h4 class="card-title">${dt.toDateString()}</h4>
     <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" class="card-img-top" alt="${day.weather[0].description}"/>
     <div class="card-body">
         <h3 class="card-title">${day.weather[0].main}</h3>
         <p class="card-text">High ${day.temp.max}&deg;F<br/> Low ${day.temp.min}&deg;F</p>
         <p class="card-text">Feels like ${day.feels_like.day}</p>
         <p class="card-text">Pressure ${day.pressure}</p>
         <p class="card-text">Humidity ${day.humidity}</p>
         <p class="card-text">Precipitation ${day.pop * 100}</p>
         <p class="card-text">Dew Point ${day.dew_point}</p>
         <p class="card-text">Wind Speed ${day.wind_speed}</p>
         <p class="card-text">Sunrise ${sr}</p>
         <p class="card-text">Sunset ${ss}</p>
      </div> <!-- end card-body -->
    </div> <!-- end card -->
  </div> <!-- end col -->`;
          }
      }).join(' ');
    }
};

app.init();