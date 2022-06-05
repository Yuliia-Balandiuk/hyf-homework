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

// Write some code here

let getIndex = names.indexOf('Ahmad');
names.splice(getIndex, 1);

// Code done

console.log(names);
