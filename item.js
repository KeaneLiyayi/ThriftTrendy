import { products } from "./itemsArray.js";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const product = products.find(p => p.id == productId);

if (product) {
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-price').innerText = `Price: Ksh ${product.price}`;
    document.getElementById('product-brand').innerText = `Brand: ${product.brand}`;
    document.getElementById('product-size').innerText = `Size: ${product.size}`;
    document.querySelector('.product-image img').src = product.image;
}