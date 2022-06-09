const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  const candies = {
    Sweet: 0.5,
    Chocolate: 0.7,
    Toffee: 1.1,
    ChewingGum: 0.03,
  };

  if (typeof candyType !== 'string' || typeof weight !== 'number') {
    console.log('Please enter a valid value!');
  } else {
    boughtCandyPrices.push(
      weight *
        candies[candyType[0].toUpperCase() + candyType.slice(1).toLowerCase()]
    );
  }
}

addCandy('sweet', 20);
addCandy('Chocolate', 50);
addCandy('Toffee', 10);
addCandy('Sweet', 40);
addCandy('Toffee', 20);
addCandy('Sweet', 40);
addCandy('Chocolate', 50);
addCandy('Toffee', 10);

console.log(boughtCandyPrices);

const amountToSpend = Math.floor(Math.random() * 100);

console.log(amountToSpend);

function canBuyMoreCandy(boughtCandyPrices, amountToSpend) {
  let sum = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    if (sum <= amountToSpend) {
      console.log('You can buy more, so please do!');
      sum += boughtCandyPrices[i];
      console.log(`You bought ${i + 1} candies`);
    } else {
      console.log('Enough candy for you!');
      break;
    }
  }
  return sum;
}

canBuyMoreCandy(boughtCandyPrices, amountToSpend);
