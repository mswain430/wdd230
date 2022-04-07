
/* ****************** DISPLAY FEATURED TEMPLES**************** */
const requestURL = 'https://mswain430.github.io/wdd230/temple-inn/data/temples.json';


let featured1 = document.querySelector('.featured1');
let featured2 = document.querySelector('.featured2');
let featured3 = document.querySelector('.featured3');
let featuredtemples = document.querySelector('.featuredtemples');
let featuredFilled = 0;
 fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   //  temporary checking for valid response and data parsing
    const localtemple = jsonObject['temples'];
   // localbusiness.forEach(displayBusiness);
     let featuredtemple = localtemple.filter(x =>(x.state === "CA"));
    featuredtemple = featuredtemple.sort((a, b) => 0.5 - Math.random());
     let specialtemple = featuredtemple.filter((x,index) => index <= 2);
    specialtemple.forEach((temple, index) => displaytemple(temple, index+1));
 //   let goldbusiness = localbusiness.filter((x,index) => index < 3);
 //   goldbusiness.forEach((business, index) => displaySpotlight(business, index+1));
});

function displaytemple(specialtemple, index) {
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let templeimg = document.createElement('img');
    let p1 = document.createElement('p1');
    let p3 = document.createElement('p3');
    let p4 = document.createElement('p4');

    card.setAttribute('class', `featured${index}`);
 // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    templeimg.setAttribute('src', `${specialtemple.logourl}`);
    templeimg.setAttribute('alt', `picture of ${specialtemple.name} temple`);
    templeimg.setAttribute('class', 'templeimg');

  // Change the innerHTML property of the h3 element to contain the business' info
    h3.innerHTML = `${specialtemple.name}`;
    p1.innerHTML = `${specialtemple.phone}`;
    p3.innerHTML = `${specialtemple.address} <br> ${specialtemple.city} ${specialtemple.zip}`;
    p4.innerHTML = `<a href="${specialtemple.website}">website</a>`;

  // Add/append the section(card) with the h2 element

    card.appendChild(h3);
    card.appendChild(templeimg);
    card.appendChild(p1);
    card.appendChild(p3);
    card.appendChild(p4);

  // Add/append the existing HTML div with the cards class with the section(card)
 featuredtemples.appendChild(card);

}