function initializeCart() {
    let cart = localStorage.getItem('cart');
    if (!cart) {
      cart = [];
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

function addItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log('Shopping Cart List:');
    console.table(cart);
  }
  
  initializeCart();
  
  const addItemForm = document.getElementById('addItemForm');
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
  
    const displayCartBtn = document.getElementById('displayCartBtn');
    displayCartBtn.addEventListener('click', function() {
  displayCart();
});