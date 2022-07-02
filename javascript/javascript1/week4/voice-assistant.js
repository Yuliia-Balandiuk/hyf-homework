let userName = '';
const toDoListArr = [];

function getReply(command) {
  if (typeof command === 'string' && command !== '') {
    if (command.includes('Hello my name is')) {
      const strToArray = command.split(' ');
      const userName = strToArray[strToArray.length - 1];
      if (userName === strToArray[strToArray.length - 1]) {
        return `We have already met ${userName}`;
      }
      userName = strToArray[strToArray.length - 1];
      return `Nice to meet you ${userName}`;
    }

    if (command === 'What is my name') {
      if (userName.length === 0) {
        return 'You have not said your name yet.';
      }
      return `Your name is ${userName}`;
    }

    if (command.includes('Add')) {
      const newToDoItem = command.replace(/(Add) | (to my todo)/g, '');
      toDoListArr.push(newToDoItem);
      return toDoListArr;
    }
    if (command === 'What is on my todo?') {
      for (let i = 0; i < toDoListArr.length; i++)
        return `You have ${toDoListArr.length} todos - ${toDoListArr[i]} and ${
          toDoListArr[i + 1]
        }`;
    }
    if (command.includes('Remove')) {
      return removeNote(command);
    }
    if (command === 'What day is it today?') {
      const date = new Date();
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      return `Today is ${date.getDate()} of ${
        months[date.getMonth()]
      } ${date.getFullYear()}`;
    }
    if (command.includes('What is')) {
      return makeCalculation(command);
    }
    if (command.includes('Set a timer')) {
      const time = command.replace(/(Set a timer for) | (minutes)/g, '');
      setTimeout(function () {
        return console.log('Timer done');
      }, time * 6000);
      return `Timer set for ${time} minutes`;
    }
    if (command.includes('What time is it?')) {
      const date = new Date(),
        hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
        minutes =
          date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
        seconds =
          date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      return `${hours}:${minutes}:${seconds}`;
    }
  }
  return 'Not the right command, try again';
}

function removeNote(command) {
  const toDoItem = command.replace(/(Remove) | (from my todo)/g, '');
  const indexOfItem = toDoListArr.indexOf(toDoItem);
  toDoListArr.splice(indexOfItem, 1);
  return `Removed ${toDoItem} from your todo`;
}

function makeCalculation(command) {
  const arr = command
    .replace(/What is/g, '')
    .trim()
    .split(' ');
  const firstOperand = parseInt(arr[0], 10);
  const secondOperand = parseInt(arr[2], 10);
  switch (arr[1]) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      break;
  }
  return result;
}

console.log(getReply(5));
console.log(getReply(''));

console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('Hello my name is Yuliia'));
console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('What is my name'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('Remove fishing from my todo'));
console.log('After removed:', toDoListArr);
console.log(getReply('What day is it today?'));
console.log(getReply('What is 3 + 3'));
console.log(getReply('What is 4 * 12'));
console.log(getReply('Set a timer for 4 minutes'));
console.log(getReply('What time is it?'));
