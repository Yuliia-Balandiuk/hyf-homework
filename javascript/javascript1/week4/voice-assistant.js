const usersName = [];
const toDoListArr = [];

function getReply(command) {
  if (typeof command === 'string' && command !== '') {
    if (command.includes('Hello my name is')) {
      const strToArray = command.split(' ');
      const userName = strToArray[strToArray.length - 1];
      if (usersName.includes(userName)) {
        return `We have already met ${userName}`;
      }

      usersName.push(userName);
      return `Nice to meet you ${userName}`;
    }

    if (command === 'What is my name') {
      if (usersName.length === 0) {
        return 'You have not said your name yet.';
      }
      return `Your name is ${usersName[usersName.length - 1]}`;
    }

    if (command.includes('Add')) {
      let newToDoItem = command.replace(/(Add) | (to my todo)/g, '');
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
      let toDoItem = command.replace(/(Remove) | (from my todo)/g, '');
      let indexOfItem = toDoListArr.indexOf(toDoItem);
      toDoListArr.splice(indexOfItem, 1);
      return `Removed ${toDoItem} from your todo`;
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
      const arr = command
        .replace(/What is/g, '')
        .trim()
        .split(' ');
      if (arr[1] === '+') {
        result = +arr[0] + +arr[2];
      } else if (arr[1] === '-') {
        result = +arr[0] - +arr[2];
      } else if (arr[1] === '*') {
        result = +arr[0] * +arr[2];
      } else if (arr[1] === '/') {
        result = +arr[0] / +arr[2];
      }
      return result;
    }
    if (command.includes('Set a timer')) {
      const time = command.replace(/(Set a timer for) | (minutes)/g, '');
      setTimeout(function () {
        return console.log('Timer done');
      }, time * 6000);
      return `Timer set for ${time} minutes`;
    }
  }
  return 'Something went wrong, try again';
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
console.log(getReply('What day is it today?'));
console.log(getReply('What is 3 + 3'));
console.log(getReply('What is 4 * 12'));
console.log(getReply('Set a timer for 4 minutes'));
