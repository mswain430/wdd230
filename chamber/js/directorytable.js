const bizlist = document.querySelector('.biz-list');

const requestURL = 'https://mswain430.github.io/wdd230/chamber/data/data.json';
// const bizlist = document.querySelector('.biz-list');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const localbusiness = jsonObject['localbusiness'];
    localbusiness.forEach(displayBusinessTable);
});

function displayBusinessTable(localbusiness) {

    // CREATE DYNAMIC TABLE.


     // EXTRACT VALUE FOR HTML HEADER.
        // ('name', 'address', 'phone' and 'website')
        let col = [];
        for (let i = 0; i < localbusiness.length; i++) {
            for (let key in localbusiness[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        // CREATE DYNAMIC TABLE
        let table = document.createElement('table');

        let tr = table.insertRow(-1);                   // TABLE ROW.

        for (let i = 0; i < col.length; i++) {
            let th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }
     }
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (let i = 0; i < localbusiness.length; i++) {

            tr = table.insertRow(-1);

            for (let j = 0; j < col.length; j++) {
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = localbusiness[i][col[j]];
            }
        }
   // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        bizlist = document.getElementById("showData");
        bizlist.innerHTML = "";
        bizlist.appendChild(table);



      // Add/append the existing HTML div with the cards class with the section(card)
  //  bizlist.appendChild(table);
