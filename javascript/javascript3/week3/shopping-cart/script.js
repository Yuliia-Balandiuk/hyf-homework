const userNameInnerHtml = document.getElementById('userName');
const totalAmountInnerHtml = document.getElementById('totalAmount');
const productsWrapper = document.getElementById('productsWrapper');
const productsBox = document.createElement('div');

class Product {
  static currencyRate = 1;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static async changeCurrencyRate(conversionRates) {
    const url = `https://v6.exchangerate-api.com/v6/4515c0a592b7b58ba555a2ea/latest/DKK`;
    const response = await fetch(url);
    const data = await response.json();
    const rate = data.conversion_rates[conversionRates];

    Product.currencyRate = rate;
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
      productPrice.innerHTML = `Price: ${(
        item.price * Product.currencyRate
      ).toFixed(2)}`;
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
const freezer2 = new Product('Freezer2', 4500);
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

const currencySelect = document.getElementById('currencySelect');
currencySelect.addEventListener('change', async () => {
  await Product.changeCurrencyRate(currencySelect.value);
  productsBox.innerHTML = '';
  shoppingCart.renderProducts();
});
