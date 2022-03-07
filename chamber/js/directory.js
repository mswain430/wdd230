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
  let addr = document.createElement('p');
  let phone = document.createElement('p');
  let web = document.createElement('p');
  let mem = document.createElement('p');
  let ordersuffix = ``;

  if(localbusiness.order === 1){
      localbusiness.order = `${localbusiness.order}`;
  }  else if (localbusiness.order === 2) {
      localbusiness.order = `${localbusiness.order}`;
  }  else if (localbusiness.order === 3) {
      localbusiness.order = `${localbusiness.order}`;
  }  else if (localbusiness.order === 4) {
      localbusiness.order = `${localbusiness.order}`;
  }  else if (localbusiness.order === 5) {
      localbusiness.order = `${localbusiness.order}`;
  }  else if (localbusiness.order === 6) {
      localbusiness.order = `${localbusiness.order}`;
  }  else if (localbusiness.order === 7) {
      localbusiness.order = `${localbusiness.order}`;
   }  else if (localbusiness.order === 8) {
      localbusiness.order = `${localbusiness.order}`;
  }  else if (localbusiness.order === 9) {
      localbusiness.order = `${localbusiness.order}`;
  }  else if (localbusiness.order === 10) {
      localbusiness.order = `${localbusiness.order}`;
        }  else if (localbusiness.order === 11) {
      localbusiness.order = `${localbusiness.order}`;
        }  else if (localbusiness.order === 12) {
      localbusiness.order = `${localbusiness.order}`;
        }  else if (localbusiness.order === 13) {
      localbusiness.order = `${localbusiness.order}`;
        }  else if (localbusinesst.order === 14) {
      localbusiness.order = `${localbusiness.order}`;
        }  else if (localbusiness.order === 15) {
      localbusiness.order = `${localbusiness.order}`;
  }  else {
      localbusiness.order = `${localbusiness.order}`;
  }

 // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).

  logo.setAttribute('src', localbusiness.logo);
  logo.setAttribute('alt', `logo for ${localbusiness.name}`);
  logo.setAttribute('class', 'logo');
  logo.setAttribute('loading', 'lazy');

  // Change the textContent property of the h2 element to contain the business' info
  h2.innerHTML = `${localbusiness.name}`;
  addr.innerHTML = `${localbusiness.address}`;
  phone.innerHTML = `${localbusiness.phone}`;
  web.innerHTML = ` ${localbusiness.website} `;
  mem.innerHTML = `${localbusiness.membership}`;

  // Add/append the section(card) with the h2 element

  card.appendChild(h2);
  card.appendChild(logo);
  card.appendChild(addr);
  card.appendChild(phone);
  card.appendChild(web);
  card.appendChild(mem);


  // Add/append the existing HTML div with the cards class with the section(card)
  biz_cards.appendChild(card);
  //biz_list.appendChild(table);
}
