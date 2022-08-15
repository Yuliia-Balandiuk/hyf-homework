const userNameInnerHtml = document.getElementById('userName');
const totalAmountInnerHtml = document.getElementById('totalAmount');
const productsWrapper = document.getElementById('productsWrapper');

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency() {}
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
      const productsBox = document.createElement('div');
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
const flatscreen = new Product('flat-screen', 5000);
const freezer = new Product('freezer', 4500);
const hairDryer = new Product('hair-dryer', 650);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(freezer);
shoppingCart.addProduct(hairDryer);
console.log(shoppingCart.products);

shoppingCart.removeProduct(flatscreen);
console.log(shoppingCart.products);

const aaa = shoppingCart.searchProduct();
console.log(aaa);

const tot = shoppingCart.getTotal();
console.log(tot);

const bbbb = shoppingCart.searchProduct('hair-dryer');
console.log(bbbb);

shoppingCart.getUser();
shoppingCart.renderProducts();
