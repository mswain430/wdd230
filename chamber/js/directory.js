const requestURL = 'https://mswain430.github.io/wdd230/chamber/data/data.json';
const biz_cards = document.querySelector('.biz-cards');
const biz_list = document.querySelector('.biz-list');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const localbusiness = jsonObject['localbusiness'];
    prophets.forEach(displayBusiness);
});


function displayBusiness(localbusiness) {
  // Create elements to add to the document
  let card = document.createElement('section');
  card.setAttribute('class', 'card');
  let logo = document.createElement('img');
  let h2 = document.createElement('h2');
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');

  /* let ordersuffix = ``;

  if(prophet.order === 1){
      prophet.order = `${prophet.order}st`;
  }  else if (prophet.order === 2) {
      prophet.order = `${prophet.order}nd`;
  }  else if (prophet.order === 3) {
      prophet.order = `${prophet.order}rd`;
  }  else {
      prophet.order = `${prophet.order}th`;
  }
*/
 // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).

  logo.setAttribute('src', localbusiness.logo);
  logo.setAttribute('alt', `logo for ${localbusiness.name}`);
  logo.setAttribute('class', 'logo');
  logo.setAttribute('loading', 'lazy');

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.innerHTML = `${localbusiness.name}`;
  p.innerHTML = `${localbusiness.address}`;
  p2.innerHTML = `${localbusiness.phone}`;
  p3.innerHTML = ` ${localbusiness.website} `;

  // Add/append the section(card) with the h2 element
  card.appendChild(logo);
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(p2);
  card.appendChild(p3);


  // Add/append the existing HTML div with the cards class with the section(card)
  biz_cards.appendChild(card);
 // biz_list.appendChild(card);
}
