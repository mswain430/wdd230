
//Math.pow(x, y)
// t = temp  s = wind

let t = parseFloat(document.querySelector("#temp").value);
let s = parseFloat(document.querySelector("#speed").value);
//const t = 10;
//const s = 10;

// temp needs to be less than 50 and wind needs to be greater than 3
let windchill = windchill(t,s);

if (t <= 50 && s > 3){
    let wc = 35.74 + (0.6215 * t) - (35.75 * t) * Math.pow(s,0.16) + (0.4275 * t) * Math.pow(s,0.16);
    windchill = Math.round(wc);
    } else {
    windchill = "N/A";
  }
  
//output
 document.querySelector("#chill").innerHTML = windchill;
  function wc(temp, speed){
     return "success";
 }