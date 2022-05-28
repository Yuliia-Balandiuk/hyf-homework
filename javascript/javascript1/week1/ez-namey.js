const firstWords = [
  'First',
  'Easy',
  'The best',
  'Awesome',
  'The highest',
  'Unbelievable',
  'Exciting',
  'Amazing',
  'Strange',
  'Light',
];
const secondWords = [
  'step',
  'start',
  'finish',
  'team',
  'track',
  'area',
  'front',
  'way',
  'company',
  'department',
];

const randomNumberFirstWords = Math.floor(Math.random() * 10);
const randomNumberSecondWords = Math.floor(Math.random() * 10);

let startupName = `${firstWords[randomNumberFirstWords]} ${secondWords[randomNumberSecondWords]}`;

console.log(
  `The startup: "${startupName}" contains ${startupName.length} characters.`
);
