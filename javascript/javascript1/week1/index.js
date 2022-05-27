console.log("My freecodecamp username is: @Yuliia-Balandiuk");

// Age-ify
const yearOfBirth = 1987;
let yearFuture = 2027;

let age = yearFuture - yearOfBirth;

console.log("You will be", age, "years old in", yearFuture);

// Goodboy-Oldboy
const dogYearOfBirth = 2017;
let dogYearFuturec = 2027;
let shouldShowResultInDogYears = true;

let dogYear = dogYearFuturec - dogYearOfBirth;
let a = "human";

if (shouldShowResultInDogYears) {
  dogYear = dogYear * 7;
  a = "dog";
}
console.log("Your dog will be", dogYear, a, "years old in", dogYearFuturec);

// Housey pricey (A house price estimator)
const wide = 5;
const deep = 11;
const high = 8;
const gardenSizeInM2 = 70;
const houseCosts = 1000000;

let volumeInMeters = wide * deep * high;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let amount = "much";

if (houseCosts < housePrice) {
  amount = "little";
}

console.log(
  "You are paying too",
  amount,
  " because the real price is",
  housePrice
);

//Ez Namey (Startup name generator) Optional
const firstWords = [
  "First",
  "Easy",
  "The best",
  "Awesome",
  "The highest",
  "Unbelievable",
  "Exciting",
  "Amazing",
  "Strange",
  "Light",
];
const secondWords = [
  "step",
  "start",
  "finish",
  "team",
  "track",
  "area",
  "front",
  "way",
  "company",
  "department",
];

const randomNumberFirstWords = Math.floor(Math.random() * 10);
const randomNumberSecondWords = Math.floor(Math.random() * 10);

let startupName =
  firstWords[randomNumberFirstWords] +
  " " +
  secondWords[randomNumberSecondWords];

console.log(
  "The startup:",
  startupName,
  "contains",
  startupName.length,
  "characters"
);