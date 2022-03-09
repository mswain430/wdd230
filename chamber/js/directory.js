const requestURL = 'https://mswain430.github.io/wdd230/chamber/data/data.json';

const bizcards = document.querySelector('.bizcards');
const bizlist = document.querySelector('.bizbody');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const localbusiness = jsonObject['localbusiness'];
    localbusiness.forEach(displayBusiness);
    localbusiness.forEach(displayBusinessTable);
});


function displayBusiness(localbusiness) {
  // Create elements to add to the document
  let bizcard = document.createElement('section');
  let logo = document.createElement('img');
  let h3 = document.createElement('h3');
  let addr = document.createElement('p');
  let phone = document.createElement('p');
  let web = document.createElement('p');
  let mem = document.createElement('p');
  let ordersuffix = ``;

  bizcard.setAttribute('class', 'bizcard');
 // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).

  logo.setAttribute('src', `${localbusiness.logourl}`);
  logo.setAttribute('alt', `logo for ${localbusiness.name}`);
  logo.setAttribute('class', '.logo');
  logo.setAttribute('loading', 'lazy');

  // Change the innerHTML property of the h3 element to contain the business' info
  h3.innerHTML = `${localbusiness.bizname}`;
  phone.innerHTML = `${localbusiness.phone}`;
  addr.innerHTML = `${localbusiness.address}`;
  web.innerHTML = `<a href="${localbusiness.website}">website</a>`;
  mem.innerHTML = `${localbusiness.membership} sponsor`;

  // Add/append the section(card) with the h2 element

  bizcard.appendChild(h3);
  bizcard.appendChild(logo);
  bizcard.appendChild(phone);
  bizcard.appendChild(addr);
  bizcard.appendChild(web);


  // Add/append the existing HTML div with the cards class with the section(card)
    bizcards.prepend(bizcard);
}

function displayBusinessTable(localbusiness) {
    let row = document.createElement('tr');
    let bizname = document.createElement('td');
    let addr = document.createElement('td');
    let phone = document.createElement('td');
    let web = document.createElement('td');


    bizname.innerHTML = `${localbusiness.bizname}`;
    addr.innerHTML = `${localbusiness.address}`;
    phone.innerHTML = `${localbusiness.phone}`;
    web.innerHTML = `<a href="${localbusiness.website}">website</a>`;

    row.appendChild(bizname);
    row.appendChild(addr);
    row.appendChild(phone);
    row.appendChild(web);


    bizlist.appendChild(row)
}

