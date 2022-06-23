console.log('Script loaded');

const products = getAvailableProducts();

console.log(products);

function renderProducts(products) {
  for (const product of products) {
    const productsUl = document.getElementById('productsUl');
    const productLi = document.createElement('li');
    const productName = document.createElement('h3');
    const productPrice = document.createElement('p');
    const productRating = document.createElement('p');

    productsUl.appendChild(productLi);
    productLi.appendChild(productName);
    productLi.appendChild(productPrice);
    productLi.appendChild(productRating);

    productName.innerHTML = product.name;
    productPrice.innerHTML = `Price: ${product.price}`;
    productRating.innerHTML = `Rating: ${product.rating}`;
  }
}

renderProducts(products);
