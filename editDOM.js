const shoppingCart = document.querySelector('ul');

shoppingCart.children[1].innerHTML = 'Granny Smith Apples';

shoppingCart.children[3].remove();

const addingItem = document.createElement("li");

addingItem.innerHTML = "Kombucha";

shoppingCart.appendChild(addingItem);

const newListItems = ['protein bars', 'almonds', 'peanut butter'];
const list = document.querySelector('#list');
list.innerHTML = '';

newListItems.forEach(function(item) {
  const newItem = document.createElement('li');
  newItem.textContent = item;
  list.appendChild(newItem);
});

document.querySelector('#list li:nth-child(2)').classList.add('important');