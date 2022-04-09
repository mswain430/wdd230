const requestURL = 'https://mswain430.github.io/wdd230/temple-inn/data/temples.json';

const cards = document.querySelector('div.cards');
const listBtn = document.querySelector('#listBtn');
const cardBtn = document.querySelector('#cardBtn');
const temple_detail = document.querySelector('#temple_detail');

 fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const localtemple = jsonObject['temples'];
     let templedetail = localtemple.filter((x,index) => index <= 7);
  // templedetail.forEach((temple, index) => displaytemple(temple, index+1));
     localtemple.forEach(displaytemple);
    console.log();
});

function displaytemple(localtemple) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h3 = document.createElement('h3');
  let templeimg = document.createElement('img');
  let p1 = document.createElement('p1');
  let p2 = document.createElement('p2');
  let p3 = document.createElement('p3');
  let p4 = document.createElement('p4');
  let p5 = document.createElement('p5');
  let more = document.createElement('more');
  let ordersuffix = ``;
// card img class .templeimg
  templeimg.setAttribute('src', `${localtemple.logourl}`);
  templeimg.setAttribute('alt', `${localtemple.name}`);
  templeimg.setAttribute('class', '.templeimg');
  templeimg.setAttribute('loading', 'lazy');

  // Change the innerHTML property of the h3 element to contain the business' info
  h3.innerHTML = `${localtemple.name}`;
  p1.innerHTML = `${localtemple.phone}`;
  p2.innerHTML = `${localtemple.address} ${localtemple.city} ${localtemple.state} ${localtemple.zip}`;
  p3.innerHTML = `${localtemple.address} <br/> ${localtemple.city}, ${localtemple.state}<br/> ${localtemple.zip}`;
  p4.innerHTML = `<a href="${localtemple.website}">website</a>`;
  p5.innerHTML = `<a href="${localtemple.email}">${localtemple.email}</a>`;

  // Add/append the section(card) with the h3 element

  card.appendChild(h3);
  card.appendChild(templeimg);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
  card.appendChild(p4);
  card.appendChild(p5);
  // Add/append the existing HTML div with the cards class with the section(card)
  temple_detail.appendChild(card);
}

// add event listener to determine which temple

switch(temple_idx) {
  case 'Fresno California Temple':
     0;
    break;
  case 'Los Angeles California Temple':
      1;
    break;
  case 'Newport Beach California Temple':
      2;
    break;
  case 'Oakland California Temple':
     3;
    break;
  case 'Redlands California Temple':
      4;
    break;
   case 'Sacramento California Temple':
      5;
    break;
   case 'San Diego California Temple':
     6;
    break;
    case 'Yorba Lina California Temple':
     7;
    break;

  default:
      message2 = "unknown - Try again" + temple_idx;
}