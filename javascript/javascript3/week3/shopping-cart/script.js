const userNameInnerHtml = document.getElementById('userName');
const totalAmountInnerHtml = document.getElementById('totalAmount');
const productsWrapper = document.getElementById('productsWrapper');
const productsBox = document.createElement('div');

class Product {
  constructor(name, price, currentCurrency = 'DKK') {
    this.name = name;
    this.price = price;
    this.currentCurrency = currentCurrency;
  }

  convertToCurrency(currentCurrency) {
    fetch(
      `https://v6.exchangerate-api.com/v6/4515c0a592b7b58ba555a2ea/latest/DKK`
    )
      .then((response) => response.json())
      .then((data) => {
        const rate = data.conversion_rates;
        return (this.price * rate[currentCurrency]).toFixed(2);
      });
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

  searchProduct(productName) {
    const findProducts = this.products.filter(
      (product) => product.name === productName
    );

    return findProducts;
  }

  getTotal() {
    const total = this.products.reduce(
      (total, product) => total + product.price,
      0
    );

    totalAmountInnerHtml.innerHTML = `Total: ${total}`;

    return total;
  }

  renderProducts(products) {
    this.products.forEach((item) => {
      productsWrapper.appendChild(productsBox);
      const productName = document.createElement('p');
      productsBox.appendChild(productName);
      productName.innerHTML = `Product: ${item.name}`;
      const productPrice = document.createElement('p');
      productPrice.innerHTML = `Price: ${item.price}`;
      productsBox.appendChild(productPrice);
    });
  }

  getUser(user) {
    let userId = Math.floor(Math.random() * 10);
    console.log(userId);
    if (userId === 0) {
      userId = userId + 1;
    }
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((respons) => respons.json())
      .then((data) => {
        userNameInnerHtml.innerHTML = `USER: ${data.name}`;
        console.log(data.name);
      });
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product('Flat screen', 5000);

const freezer = new Product('Freezer', 4500);
const freezer2 = new Product('Freezer', 4500);
const hairDryer = new Product('Hair dryer', 650);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(freezer);
shoppingCart.addProduct(freezer2);
shoppingCart.addProduct(hairDryer);
console.log(shoppingCart.products);

shoppingCart.removeProduct(freezer2);
console.log(shoppingCart.products);

const total = shoppingCart.getTotal();
console.log(total);

const searcher = shoppingCart.searchProduct('Hair dryer');
console.log(searcher);

shoppingCart.getUser();
shoppingCart.renderProducts();

///////////////////////////////////////

const currencySelect = document.getElementById('currencySelect');
currencySelect.addEventListener('change', () => {
  productsBox.innerHTML = '';
  shoppingCart.renderProducts();
  for (let i = 0; i < shoppingCart.products.length; i++) {
    shoppingCart.products[i].currentCurrency = currencySelect.value;
    shoppingCart.products[i].convertToCurrency(this.currentCurrency);
  }
  console.log('!!!!!!!!!!!', shoppingCart.products);
});
