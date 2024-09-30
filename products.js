import { products } from "./itemsArray.js";

document.addEventListener('DOMContentLoaded', () => {


    const list = document.getElementById('products-list');
    const category = document.querySelector('#category');
    const price = document.querySelector('#price');
    const condition = document.querySelector('#condition');



    //Filtering products by category 
    category.addEventListener('change', renderFileteredProducts)

    //Filtering products by price
    price.addEventListener('change', renderFileteredProducts)

    //Filtering products by condtion since this are thrifted products hence the conditon must be known before purchase
    condition.addEventListener('change', renderFileteredProducts)


    //Funtcion to filter products

    function renderFileteredProducts() {
        const selectedCategory = category.value;
        const selectedPrice = parseInt(price.value) || 0;
        const selectedCondition = condition.value;
        const filteredProducts = products.filter((product) => {
            const condtionMatch = selectedCondition ? selectedCondition === product.condition : true

            //check first whether a category has been selected if not then it will return true making it so that it returns all the products 
            const categoryMatch = selectedCategory ? selectedCategory === product.category : true;
            return condtionMatch && categoryMatch && product.price <= selectedPrice;
        })

        renderProducts(filteredProducts)

    }


    //function to render the products 
    function renderProducts(productsToRender) {
        list.innerHTML = '';
        productsToRender.forEach((product) => {
            const item = document.createElement('li');
            item.innerHTML = `
                <a href="item.html?id=${product.id}" class="item">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="item-content">
                    <h3>${product.name}</h3>
                    <p>Ksh ${product.price}</p>
                    </div>
                    
                </a>
            `;
            list.appendChild(item);
        });
    }
    //This is to render the initial products list
    renderProducts(products)

});