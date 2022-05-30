const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;

let dogYear = dogYearFuture - dogYearOfBirth;
let creature = 'human';

if (shouldShowResultInDogYears) {
  dogYear = dogYear * 7;
  creature = 'dog';
}

console.log(
  `Your dog will be ${dogYear} ${creature} years old in ${dogYearFuture}.`
);

