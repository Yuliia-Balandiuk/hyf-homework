const candies = {
  Sweet: 0.5,
  Chocolate: 0.7,
  Toffee: 1.1,
  ChewingGum: 0.03,
};

const buyCandyPrices = [];

function addCandy(candyType, weight) {
  if (typeof candyType !== 'string' || typeof weight !== 'number') {
    console.log('Please enter a valid value!');
  } else {
    buyCandyPrices.push(weight * candies[candyType]);
  }
}

addCandy('Sweet', 20);
addCandy('Chocolate', 50);
addCandy('Toffee', 10);
addCandy('Sweet', 40);
addCandy('ChewingGum', 100);

console.log(buyCandyPrices);
