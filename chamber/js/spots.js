const requestURL = 'https://mswain430.github.io/wdd230/chamber/data/data.json';
let spot1 = document.querySelector('div.spot1');
let spot2 = document.querySelector('div.spot2');
let spot3 = document.querySelector('div.spot3');
let spot = document.querySelector('.spot');
let spotFilled = 0;
 fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   //  temporary checking for valid response and data parsing
    const localbusiness = jsonObject['localbusiness'];
   // localbusiness.forEach(displayBusiness);
    let goldbusiness = localbusiness.filter(x => (x.membership === 'gold'));
      goldbusiness.forEach(displaySpotlight);
   //   localbusiness.filter(function(currentValue, index, arr), thisValue)
});

function displaySpotlight(goldbusiness) {
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let logo = document.createElement('img');
    let p1 = document.createElement('p1');
    let p3 = document.createElement('p3');
    let p4 = document.createElement('p4');
    let mem = document.createElement('mem');

    card.setAttribute('class', 'spotcard');
 // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', `${goldbusiness.logourl}`);
    logo.setAttribute('alt', `logo for ${goldbusiness.bizname}`);
    logo.setAttribute('class', 'logo');

  // Change the innerHTML property of the h3 element to contain the business' info
    h3.innerHTML = `${goldbusiness.bizname}`;
    p1.innerHTML = `${goldbusiness.phone}`;
    p3.innerHTML = `${goldbusiness.address} <br> ${goldbusiness.city} ${goldbusiness.zip}`;
    p4.innerHTML = `<a href="${goldbusiness.website}">website</a>`;
    mem.innerHTML = `${goldbusiness.membership} sponsor`;

  // Add/append the section(card) with the h2 element

    card.appendChild(h3);
    card.appendChild(logo);
    card.appendChild(p1);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(mem);

  // Add/append the existing HTML div with the cards class with the section(card)
   spot1.appendChild(card);


}

// Create elements to add to the document
function findSpotlight(goldbusiness) {
    if (spotFilled == 3)
        return;
    else {
        if (spotFilled == 0) {
            let spot1 = document.querySelector('.spot1');
            displaySpotlight(goldbusiness[0], spot1);
        }
        if (spotFilled == 1) {
            let spot2 = document.querySelector('.spot2');
            displaySpotlight(goldbusiness[1], spot2);
        }
        if (spotFilled == 2) {
            let spot3 = document.querySelector('.spot3');
            displaySpotlight(goldbusiness[2], spot3);
        }
        spotFilled++;
    }
}