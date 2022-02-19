const t = parseFloat(document.getElementById('temp').textContent);
const s = parseFloat(document.getElementById('speed').textContent);

// temp needs to be less than 50 and wind needs to be greater than 3
if(t <= 50 && s > 3){
    const windchill = 35.74 + (0.6215 * t) - 35.75 * Math.pow(s, 0.16) + (0.4275 * t) * Math.pow(s, 0.16);
    document.querySelector('#chill').innerHTML = `${Math.round(windchill).toFixed(2)}`;
} else {
    document.querySelector('#chill').innerHTML = 'N/A';
}
