const requestURL = 'https://mswain430.github.io/wdd230/temple-Inn-Suites/data/temples.json';

const cards = document.querySelector('div.cards');
const listBtn = document.querySelector('#listBtn');
const cardBtn = document.querySelector('#cardBtn');

 fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   //  console.table(jsonObject);  temporary checking for valid response and data parsing
    const localtemple = jsonObject['temples'];
    localtemple.forEach(displaytemple);
   /* localbusiness.forEach(displayBusinessTable); */
});

function displaytemple(localtemple) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let templeimg = document.createElement('img');
  let h2 = document.createElement('h2');
  let p1 = document.createElement('p1');
  let p2 = document.createElement('p2');
  let p3 = document.createElement('p3');
  let p4 = document.createElement('p4');
  let p5 = document.createElement('p5');
  let mem = document.createElement('mem');
  let ordersuffix = ``;


 // card.setAttribute('class', 'bizcard');
 // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).

  logo.setAttribute('src', `${localtemple.logourl}`);
  logo.setAttribute('alt', `logo for ${localtemple.name}`);
  logo.setAttribute('class', '.templeimg');
  logo.setAttribute('loading', 'lazy');

  // Change the innerHTML property of the h3 element to contain the business' info
  h2.innerHTML = `${localtemple.name}`;
  p1.innerHTML = `${localtemple.phone}`;
  p2.innerHTML = `${localtemple.address} ${localtemple.city} ${localtemple.zip}`;
  p3.innerHTML = `${localtemple.address} <br> ${localtemple.city} ${localtemple.zip}`;
  p4.innerHTML = `<a href="${localtemple.website}">website</a>`;
  p5.innerHTML = `<a href="${localtemple.email}">${localtemple.email}</a>`;

  // Add/append the section(card) with the h2 element

  card.appendChild(h2);
  card.appendChild(logo);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
  card.appendChild(p4);
  card.appendChild(p5);
  card.appendChild(mem);
  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}

listBtn.addEventListener("click", ()=> {
   cards.classList.replace("card-view","list-view")

});

cardBtn.addEventListener("click", ()=> {
  cardBtn.classList.add("activeBtn")
  cards.classList.replace("list-view","card-view")
});

/* ****************** DISPLAY FEATURED TEMPLES**************** */
let spot1 = document.querySelector('.featured1');
let spot2 = document.querySelector('.featured2');
let spot3 = document.querySelector('.featured3');
let spot = document.querySelector('.featuredtemples');
let featuredFilled = 0;
 fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   //  temporary checking for valid response and data parsing
    const localtemple = jsonObject['localtemples'];
   // localbusiness.forEach(displayBusiness);
     let featuredtemple = localtemple.filter(x=>(x.state === "CA" || x.state === "CA"));
     featuredtemple.sort((a, b) => 0.5 - Math.random());
     let specialtemple = featuredtemple.filter((x,index) => index < 3);
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
    let mem = document.createElement('mem');

    card.setAttribute('class', `featured${index}`);
 // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', `${specialtemple.logourl}`);
    logo.setAttribute('alt', `picture of ${specialtemple.name} temple`);
    logo.setAttribute('class', 'logo');

  // Change the innerHTML property of the h3 element to contain the business' info
    h3.innerHTML = `${specialtemple.name}`;
    p1.innerHTML = `${specialtemple.phone}`;
    p3.innerHTML = `${specialtemple.address} <br> ${specialtemple.city} ${specialtemple.zip}`;
    p4.innerHTML = `<a href="${specialtemple.website}">website</a>`;
    mem.innerHTML = `${specialtemple.membership} sponsor`;

  // Add/append the section(card) with the h2 element

    card.appendChild(h3);
    card.appendChild(templeimg);
    card.appendChild(p1);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(mem);

  // Add/append the existing HTML div with the cards class with the section(card)
 featuredtemples.appendChild(card);

}