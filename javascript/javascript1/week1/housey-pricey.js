const wide = 5;
const deep = 11;
const high = 8;
const gardenSizeInM2 = 70;
const houseCosts = 1000000;

let volumeInMeters = wide * deep * high;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let amount = 'much';

if (houseCosts < housePrice) {
  amount = 'little';
}

console.log(
  `You are paying too ${amount}, because the real price is ${housePrice}.`
);
