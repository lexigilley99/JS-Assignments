function initializeCart() {
    let cart = localStorage.getItem('cart');
    try {
        if (!cart) {
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            cart = JSON.parse(cart);
        }
    } catch (error) {
        console.error('Error parsing cart data:', error);
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

function addItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Shopping Cart List:');
    console.table(cart);
}

initializeCart();

document.addEventListener('DOMContentLoaded', function() {
    const addItemForm = document.getElementById('addItemForm');
    const displayCartBtn = document.getElementById('displayCartBtn');

    if (addItemForm) {
        addItemForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(addItemForm);
            const item = {
                id: formData.get('itemId'),
                name: formData.get('itemName'),
                price: parseFloat(formData.get('itemPrice')),
            };
            addItem(item);
            displayCart();
            addItemForm.reset();
        });
    } else {
        console.error('Element with ID "addItemForm" not found.');
    }

    if (displayCartBtn) {
        displayCartBtn.addEventListener('click', displayCart);
    } else {
        console.error('The "displayCartBtn" not found.');
    }
});



