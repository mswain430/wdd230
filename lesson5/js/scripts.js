
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
    let favChap = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = favChap;
    listItem.appendChild(listBtn);
   // listBtn.textContent = 'X';
   listBtn.innerHTML = "<strong style='color: red;font-weight:bolder;text-shadow: 1px 1px #000;'>X</strong>";
    list.appendChild(listItem);

    listBtn.onclick = function(e){
        list.removeChild(listItem);
    }

    input.focus();
}