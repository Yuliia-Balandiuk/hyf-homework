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

const firstRandomNumber = Math.floor(Math.random() * 10);
const secondRandomNumber = Math.floor(Math.random() * 10);

const startupName = `${firstWords[firstRandomNumber]} ${secondWords[secondRandomNumber]}`;

console.log(
  `The startup: "${startupName}" contains ${startupName.length} characters.`
);
