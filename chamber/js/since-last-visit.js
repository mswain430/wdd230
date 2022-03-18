let lastvisit = Number(window.localStorage.getItem("visits-ls"));

if (lastvisit !=0) {
    let thisvisit = Date.now();
    let FACTOR = 8640000;  /* 1000 * 60 * 60 * 24 //milliseconds */
    let daysBetween = (thisvisit - lastvisit)/FACTOR;
    console.log();
    if (daysBetween.toFixed(4) != 1) {
        document.querySelector('#lastvisit').innerHtml = `It has been ${daysBetween}.toFixed(4) days between today and your last visit.`;
        window.localStorage.setItem('visits-ls', thisvisit);
        console.log();
    } else {
    /* When thisvisit Null */
    document.querySelector('#lastvisit').innerHTML = `It has been ${daysBetween}.toFixed(4) days since your last visit.`;
    window.localStorage.setItem('visits-ls', thisvisit);
 }
} else {
        window.localStorage.setItem('visits-ls', Date.now());
        document.querySelector('#lastvisit').innerHTML =`This is your first visit! Welcome!`;
}
