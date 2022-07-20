console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.getElementById('productsUl');

console.log(products);

function renderProducts(products) {
  for (const product of products) {
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

const searchByName = document.getElementById('search-by-name');

searchByName.addEventListener('input', function () {
  const searchByNameValue = searchByName.value.toLowerCase();
  const filteredByName = products.filter((product) => {
    return product.name.toLowerCase().includes(searchByNameValue);
  });
  console.log(filteredByName);
  productsUl.innerHTML = '';
  searchByNameValue.length > 0
    ? renderProducts(filteredByName)
    : renderProducts(products);
});

const searchByPrice = document.getElementById('search-by-price');

searchByPrice.addEventListener('change', function () {
  const searchByPriceValue = searchByPrice.value;
  const filteredByPrice = products.filter((oneProduct) => {
    return oneProduct.price <= searchByPriceValue;
  });
  productsUl.innerHTML = '';
  searchByPriceValue > 0
    ? renderProducts(filteredByPrice)
    : renderProducts(products);
});

const selector = document.getElementById('selector');

selector.addEventListener('change', () => {
  switch (selector.value) {
    case 'nameAZ':
      const sortedNameAZ = products.sort((a, b) =>
        a.name.localeCompare(b.name) > b.name.localeCompare(a.name) ? 1 : -1
      );
      productsUl.innerHTML = '';
      renderProducts(sortedNameAZ);
      break;
    case 'nameZA':
      const sortedNameZA = products.sort((a, b) =>
        a.name.localeCompare(b.name) < b.name.localeCompare(a.name) ? 1 : -1
      );
      productsUl.innerHTML = '';
      renderProducts(sortedNameZA);
      break;
    case 'priceMinMax':
      const sortedPriceMinMax = products.sort((a, b) => a.price - b.price);
      productsUl.innerHTML = '';
      renderProducts(sortedPriceMinMax);
      break;
    case 'priceMaxMin':
      const sortedPriceMaxMin = products.sort((a, b) => b.price - a.price);
      productsUl.innerHTML = '';
      renderProducts(sortedPriceMaxMin);
      break;
    case 'ratingMinMax':
      const sortedRatingMinMax = products.sort((a, b) => a.rating - b.rating);
      productsUl.innerHTML = '';
      renderProducts(sortedRatingMinMax);
      break;
    case 'ratingMaxMin':
      const sortedRatingMaxMin = products.sort((a, b) => b.rating - a.rating);
      productsUl.innerHTML = '';
      renderProducts(sortedRatingMaxMin);
      break;
    default:
      renderProducts(products);
  }
});
