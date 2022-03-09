const requestURL = 'https://mswain430.github.io/wdd230/chamber/data/data.json';

const bizDir = document.querySelector('#bizDir');

 fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const localbusiness = jsonObject['localbusiness'];
    localbusiness.forEach(displayBusiness);
});

function displayBusiness(localbusiness) {
  // Create elements to add to the document
  let bizcard = document.createElement('section');
  let logo = document.createElement('img');
  let h3 = document.createElement('h3');
  let addr = document.createElement('p');
  let addr2 = document.createElement('p');
  let phone = document.createElement('p');
  let web = document.createElement('p');
  let contact = document.createElement('p');
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
  addr.innerHTML = `${localbusiness.address} <span> ${localbusiness.city} ${localbusiness.zip}</span>`;
  addr2.innerHTML = `${localbusiness.address} <br> ${localbusiness.city} ${localbusiness.zip}`;
  web.innerHTML = `<a href="${localbusiness.website}">${localbusiness.website}</a>`;
  contact.innerHTML = `<a href="mailto:${localbusiness.contact}">${localbusiness.contact}</a>`;
  mem.innerHTML = `${localbusiness.membership} sponsor`;

  // Add/append the section(card) with the h2 element

  bizcard.appendChild(h3);
  bizcard.appendChild(logo);
  bizcard.appendChild(phone);
  bizcard.appendChild(addr);
  bizcard.appendChild(addr2);
  bizcard.appendChild(web);
  bizcard.appendChild(contact);
  bizcard.appendChild(mem);


  // Add/append the existing HTML div with the cards class with the section(card)
  bizDir.prepend(bizcard);
}

getDirectory();
  async function getDirectory() {
    console.log ("get data"); //temp
    const response = await fetch(requestData);
    const bizDir = await response.json();
    bizDir.forEach(displayBusiness)
  }