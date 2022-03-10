

const requestURL = 'https://mswain430.github.io/wdd230/chamber/data/data.json';

const cards = document.querySelector('div.cards');
const listBtn = document.querySelector('#listBtn');
const cardBtn = document.querySelector('#cardBtn');

 fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const localbusiness = jsonObject['localbusiness'];
    localbusiness.forEach(displayBusiness);
   /* localbusiness.forEach(displayBusinessTable); */
});

function displayBusiness(localbusiness) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let logo = document.createElement('img');
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

  logo.setAttribute('src', `${localbusiness.logourl}`);
  logo.setAttribute('alt', `logo for ${localbusiness.name}`);
  logo.setAttribute('class', '.logo');
  logo.setAttribute('loading', 'lazy');

  // Change the innerHTML property of the h3 element to contain the business' info
  h2.innerHTML = `${localbusiness.bizname}`;
  p1.innerHTML = `${localbusiness.phone}`;
  p2.innerHTML = `${localbusiness.address} ${localbusiness.city} ${localbusiness.zip}`;
  p3.innerHTML = `${localbusiness.address} <br> ${localbusiness.city} ${localbusiness.zip}`;
  p4.innerHTML = `<a href="${localbusiness.website}">website</a>`;
  p5.innerHTML = `<a href="${localbusiness.contact}">${localbusiness.contact}</a>`;
  mem.innerHTML = `${localbusiness.membership} sponsor`;

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
   cards.classList.replace("list-view","card-view")
});




