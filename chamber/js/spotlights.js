const requestURL = 'https://mswain430.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('div.cards');
let spot1 = document.querySelector('.spot1');
let spot2 = document.querySelector('.spot2');
let spot3 = document.querySelector('.spot3');

 fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   //  temporary checking for valid response and data parsing
    const localbusiness = jsonObject['localbusiness'];
   // localbusiness.forEach(displayBusiness);
    let goldbusiness = localbusiness.filter(x => (x.membership === 'gold') && (x.order === '1'));
      goldbusiness.forEach(displaySpot);

   let goldbusiness2 = localbusiness.filter(y => (y.membership === 'gold') && (y.order === '4'));
      goldbusiness2.forEach(displaySpot2);

   let goldbusiness3 = localbusiness.filter(z => (z.membership === 'gold') && (z.order === '7'));
      goldbusiness3.forEach(displaySpot3);
   console.log();
});

function displaySpot(goldbusiness, card) {
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let logo = document.createElement('img');
    let p1 = document.createElement('p1');
    let p3 = document.createElement('p3');
    let p4 = document.createElement('p4');
    let mem = document.createElement('mem');


    card.setAttribute('class', 'card');
 // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', `${goldbusiness.logourl}`);
    logo.setAttribute('alt', `logo for ${goldbusiness.bizname}`);
    logo.setAttribute('class', '.logo');

  // Change the innerHTML property of the h3 element to contain the business' info
    h3.innerHTML = `${goldbusiness.bizname}`;
    p1.innerHTML = `${goldbusiness.phone}`;
    p3.innerHTML = `${goldbusiness.address} <br> ${goldbusiness.city} ${goldbusiness.zip}`;
    p4.innerHTML = `<a href="${goldbusiness.website}">website</a>`;
    mem.innerHTML = `${goldbusiness.membership} sponsor`;

  // Add/append the section(card) with the h2 element

    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(p1);
    card.appendChild(p3);
    card.appendChild(p4);

    card.appendChild(mem);

  // Add/append the existing HTML div with the cards class with the section(card)
  card.appendChild();
}

         spot1 = spot1.displaySpot(goldbusiness, card);
         spot2 = spot2.displaySpot(goldbusiness2, card);
         spot3 = spot3.displaySpot(goldbusiness3, card);

