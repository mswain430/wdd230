const requestURL = 'https://mswain430.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('div.cards');
let spot1 = document.querySelector('#spot1');
let spot2 = document.querySelector('#spot2');
let spot3 = document.querySelector('#spot3');

 fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   //  console.table(jsonObject);  temporary checking for valid response and data parsing
    const localbusiness = jsonObject['localbusiness'];
    localbusiness.forEach(displayBusiness); 
    let goldbusiness1 = localbusiness.filter(x => (x.membership === 'gold') && (x.order === '1'));
    goldbusiness1.forEach(displaySpot1);
 //   let goldbusiness2 = localbusiness.filter(y => (x.membership === 'gold') && (y.order === '2'));
 //   goldbusiness2.forEach(displaySpot2);
 //   let goldbusiness3 = localbusiness.filter(z => (x.membership === 'gold') && (z.order === '3'));
  //  goldbusiness3.forEach(displaySpot3);
});

function displaySpot1(goldbusiness1) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let h3 = document.createElement('h3');
    let p1 = document.createElement('p1');
    let p3 = document.createElement('p3');
    let p4 = document.createElement('p4');
    let mem = document.createElement('mem');
 
  
    card.setAttribute('class', 'spotcard');
 // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', `${goldbusiness1.logourl}`);
    logo.setAttribute('alt', `logo for ${goldbusiness1.bizname}`);
    logo.setAttribute('class', '.logo');

  // Change the innerHTML property of the h3 element to contain the business' info
    h3.innerHTML = `${goldbusiness1.bizname}`;
    p1.innerHTML = `${goldbusiness1.phone}`;
    p3.innerHTML = `${goldbusiness1.address} <br> ${goldbusiness1.city} ${goldbusiness1.zip}`;
    p4.innerHTML = `<a href="${goldbusiness1.website}">website</a>`;
    mem.innerHTML = `${goldbusiness1.membership} sponsor`;

  // Add/append the section(card) with the h2 element

    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(p1);
    card.appendChild(p3);
    card.appendChild(p4);

    card.appendChild(mem);
 
  // Add/append the existing HTML div with the cards class with the section(card)
  spot1.appendChild();
}



