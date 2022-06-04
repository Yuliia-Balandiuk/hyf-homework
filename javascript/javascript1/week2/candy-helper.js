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
addCandy('Toffee', 20);
addCandy('Sweet', 40);
addCandy('Chocolate', 50);
addCandy('Toffee', 10);

console.log(buyCandyPrices);

let amountToSpend = Math.random() * 100;
let sum = buyCandyPrices[0];

console.log(amountToSpend);

function canBuyMoreCandy() {
  for (let i = 1; i < buyCandyPrices.length; i++) {
    if (sum <= amountToSpend) {
      console.log('You can buy more, so please do!');
      sum += buyCandyPrices[i];
      console.log(`You bought ${i} candies`);
    } else {
      console.log('Enough candy for you!');
      break;
    }
  }
  return sum;
}

console.log(canBuyMoreCandy());
