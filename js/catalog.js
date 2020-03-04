var selectProduct = document.getElementById('items');
container = document.getElementById('cartContents');

//////////////////1.creat a function to generate the products//////////////////
var optionProduct
function creatOptionsForProducts() {

    for(var i=0; i< names.length; i++){
        optionProduct = document.createElement('option');
        selectProduct.appendChild(optionProduct);
        optionProduct.textContent = names[i];
    }
}

creatOptionsForProducts();


/////////////////2.creat a enetlisner to add a product////////////////

var addNewProduct = document.getElementById('catalog');

addNewProduct.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameofProduct = event.target.items.value;
    var quantityOfProduct = parseInt(event.target.quantity.value);

    new BusMall (nameofProduct, quantityOfProduct)

    updateProducts();
    container.innerHTML = '';
    renderMsgOrder();
    addNewProduct.reset();
    
}
);
////////////////3.function to convert data from object to string\\\\\\\\\\\\\\\\\\\
function updateProducts() {
    var newBusMall = JSON.stringify(BusMall.all);
    localStorage.setItem('the product of the custmor',newBusMall);
}
//////////////////4.function to show msg\\\\\\\\\\\\\\\\
function renderMsgOrder() {
    var titleMsg = document.createElement('h3');
    container.appendChild(titleMsg);
    titleMsg.textContent = 'your order is ready';
    var linkToCart = document.createElement('a');
    container.appendChild(linkToCart);
    linkToCart.setAttribute('href','cart.html');
    linkToCart.textContent = 'see your order';
}
