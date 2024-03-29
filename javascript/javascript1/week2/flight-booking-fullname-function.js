function getFullname(firstname, surname, useFormalName, gender) {
  if (
    (typeof firstname !== 'string' && typeof surname !== 'string') ||
    firstname === '' ||
    surname === ''
  ) {
    return console.log('Please use letters to enter the name');
  }
  if (useFormalName && gender === 'female') {
    return `Lady ${firstname} ${surname}`;
  } else if (useFormalName && gender === 'male') {
    return `Lord ${firstname} ${surname}`;
  }
  return `${firstname} ${surname}`;
}

const fullname1 = getFullname('Yuliia', 'Balandiuk', true, 'female');
const fullname2 = getFullname('Benjamin', 'Hughes', false, 'male');

console.log(fullname1);
console.log(fullname2);
