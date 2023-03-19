var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';

var welcome = greeting + name + message;

var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementByld ('greeting');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = 'S' + subTotal;

var elSubTotal = document.getElementById ('shipping');
elSubTotal.textContent = '$' + shipping;

var elGrandTotal = document.getElementById ('grandTotal');
elGrandTotal.textContent = 'S' + grandTotal;