const names = [
  'Peter',
  'Ahmad',
  'Yana',
  'kristina',
  'Rasmus',
  'Samuel',
  'katrine',
  'Tala',
];
const nameToRemove = 'Ahmad';

let getIndex = names.indexOf('Ahmad');
names.splice(getIndex, 1);

console.log(names);
