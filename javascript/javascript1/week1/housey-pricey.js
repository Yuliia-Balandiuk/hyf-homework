const volumeInMeters = [8 * 10 * 10, 5 * 11 * 8];
const gardenSizeInM2 = [100, 70];
const houseCosts = [2500000, 1000000];
const ownerNames = ['Peter', 'Julia'];
const realHousePrice = [];

for (let i = 0; i < volumeInMeters.length; i++) {
  realHousePrice[i] = volumeInMeters[i] * 2.5 * 1000 + gardenSizeInM2[i] * 300;
}

let amount;

for (let i = 0; i < ownerNames.length; i++) {
  if (houseCosts[i] < realHousePrice[i]) {
    amount = 'little';
  } else {
    amount = 'much';
  }
  console.log(
    `${ownerNames[i]} is paying too ${amount}, because the real price is ${realHousePrice[i]}.`
  );
}
