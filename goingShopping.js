let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

shoppingList.push('fruit loops');

let coffeeIndex = shoppingList.indexOf('coffee');
if (coffeeIndex !== -1) {
    shoppingList[coffeeIndex] = 'fair trade coffee';
}

let chipsIndex = shoppingList.indexOf('chips');
let salsaIndex = shoppingList.indexOf('salsa');
if (chipsIndex !== -1 && salsaIndex !== -1) {
    shoppingList.splice(chipsIndex, 1, 'rice');
    shoppingList.splice(salsaIndex, 1, 'beans');
}

let shoppingCart = [];

let lastItem = shoppingList.pop();
shoppingCart.push(lastItem);

let firstItem = shoppingList.shift();
shoppingCart.push(firstItem);

while (shoppingList.length > 0) {
    let item = shoppingList.shift();
    shoppingCart.push(item);
}

shoppingCart.sort();

console.log("Items in shopping cart (alphabetically):", shoppingCart.join(', '));

shoppingCart.reverse();

console.log("Items in shopping cart (backwards):", shoppingCart.join(', '));
