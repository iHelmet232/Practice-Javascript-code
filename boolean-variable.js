var inStock;
var shipping;
inStock = true;
shipping = false;

var elStock = document.getElementByID('stock');
elStock.className = inStock;

var elShip = document.getElementByID('shipping');
elShip.className = shipping;