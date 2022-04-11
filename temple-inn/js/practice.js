const output = (temples) => {
    temples.forEach(
        temple => {
          let article = document.createElement('article');

          let img = document.createElement('img');
          img.setAttribute('src', temple.imageUrl);
          img.setAttribute('alt', temple.templeName);

          let templeName = document.createElement('h3');
          templeName.textContent = temple.templeName;

          let location = document.createElement('h4');
          location.textContent = temple.location;

          let dedicated = document.createElement('h4');
          dedicated.textContent = temple.dedicated;

          article.appendChild(img);
          article.appendChild(templeName);
          article.appendChild(location);
          article.appendChild(dedicated);

          document.querySelector('#temples').appendChild(article);
        }
    );
 }

fetch ('https://mswain430.github.io/wdd230/temple-inn/data/temples.json')
  .then(response => response.json())
  .then(temples => {
      console.log(temples)

      templeElement = temples;
      output(templeElement);
  });


// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'

// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )

// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function

// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable

// Step 7: Finally, call the output function and pass it the list of temples

// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
const reset = () => {
    document.querySelector('#temples').innerHTML = '';
}

// Step 9: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
const sortBy = () => {
    reset();

    let filter = document.querySelector('#sortBy').value;

    switch(filter) {
        case 'templeNameAscending':
            output(templeElement.sort(
                (temple1, temple2) => {
                    let templeName1 = temple1.templeName.toLowerCase();
                    let templeName2 = temple2.templeName.toLowerCase();
                    if (templeName1 < templeName2) return -1;
                    else if (templeName1 > templeName2) return 1;
                    else return 0;
                }));
            break;
        case 'templeNameDescending':
            output(templeElement.sort(
                (temple1, temple2) => {
                    let templeName1 = temple1.templeName.toLowerCase();
                    let templeName2 = temple2.templeName.toLowerCase();
                    if (templeName1 > templeName2) return -1;
                    else if (templeName1 < templeName2) return 1;
                    else return 0;
                }));
            break;
        default:
            output(templeElement.sort(
              (temple1, temple2) =>
              temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase() ? 1 :
              temple2.templeName.toLowerCase() > temple1.templeName.toLowerCase() ? -1 : 0));
            break;
    }
}


// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector('#sortBy').addEventListener('change', sortBy);