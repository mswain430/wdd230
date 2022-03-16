let lastvisit = Number(window.localStorage.getItem('last-visit-date'));

if (lastvisit !=0) {
    let thisvisit = Date.now();
    let FACTOR = 8640000;  /* 1000 * 60 * 60 * 24 //milliseconds */
    let daysBetween = (thisvisit - lastvisit)/FACTOR;

    if (daysBetween.toFixed(0) != 1) {
        document.querySelector('#lastvisit').innerHtml = `It has been ${daysBetween}.toFixed(0) days between your last visit.`;
        window.localStorage.setiItem('last-visit-date', thisvisit);
    } else {
    /* thisvisit Null */
    document.querySelector('#lastvisit').innerHTML = `It has been ${daysBetween}.toFixed(0) days since your last visit.`;
    window.localStorage.setiItem('last-visit-date', thisvisit);
 }
} else {
        window.localStorage.setItem('last-visit-date', Date.now());
        document.querySelector('#lastvisit').innerHTML ="This is your first visit! Welcome!";
}
