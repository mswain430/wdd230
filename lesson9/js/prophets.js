const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
});


function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement('section');
  card.setAttribute('class', 'card');
  let h2 = document.createElement('h2');
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let portrait = document.createElement('img');
  let ordersuffix = ``;

  if(prophet.order === 1){
      prophet.order = `${prophet.order}st`;
  }  else if (prophet.order === 2) {
      prophet.order = `${prophet.order}nd`;
  }  else if (prophet.order === 3) {
      prophet.order = `${prophet.order}rd`;
  }  else {
      prophet.order = `${prophet.order}th`;
  }

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
  p.innerHTML = `Born: ${prophet.birthdate}<br/>  Died: ${prophet.death}`;
  p2.innerHTML = `Served as <strong>${prophet.order}</strong> President of the Church for <b>${prophet.length} years</b>`;
  p3.innerHTML = `Born in ${prophet.birthplace} and had ${prophet.numofchildren} children`;
  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).

  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
  portrait.setAttribute('class', 'portrait');
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(portrait);
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(p2);
  card.appendChild(p3);


  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}
