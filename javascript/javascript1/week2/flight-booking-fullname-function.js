const male = 'Lord';
const female = 'Lady';

function getFullname(firstname, surname, useFormalName, gender) {
  if (useFormalName && gender === male) {
    return `${male} ${firstname} ${surname}`;
  } else if (useFormalName && gender === female) {
    return `${female} ${firstname} ${surname}`;
  }
  return `${firstname} ${surname}`;
}

const fullname1 = getFullname('Julia', 'Balandiuk', true, female);
const fullname2 = getFullname('Benjamin', 'Hughes', false, male);

console.log(fullname1);
console.log(fullname2);
