
//Math.pow(x, y)
// t = temp  s = wind

let t = parseFloat(document.querySelector("#t").textContent);
let s = parseFloat(document.querySelector("#s").textContent);
let windchill = 35.74 + (0.6215*t) - ((35.75 * t)*(math.power(s^0.16))) + ((0.4275*t) * (math.power(s^0.16)));
// temp needs to be less than 50 and wind needs to be greater than 3
if (t <= 50 && s > 3){
    windchill = windchill(t,s);
} else {
    windchill = "N/A";
}
//output
 document.querySelector("#chill").textContent = windchill();
 function wc(temp, speed){
     return "success";
 }