// 1
window.setTimeout(() => console.log('Called after 2.5 seconds'), 2500);

// 2
function myWithoutNameFunction(delay, stringToLog) {
  stringToLog = `This string logged after ${delay} seconds`;
  setTimeout(() => {
    console.log(stringToLog);
  }, 1000 * delay);
}

myWithoutNameFunction(5);
myWithoutNameFunction(3);

// 3
const btnForTask1 = document.getElementById('btnForTask1');

btnForTask1.addEventListener('click', () => {
  myWithoutNameFunction(5);
});

// 4
const earthLogger = () => console.log('Earth');
const saturnLogger = () => console.log('Saturn');

function planetLogFunction(functionAsParam) {
  functionAsParam();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// 5
const divTask1 = document.getElementById('task1-3');
const buttonTask5 = document.createElement('button');
const latitudeParagraph = document.createElement('p');
const longitudeParagraph = document.createElement('p');
divTask1.appendChild(buttonTask5);
divTask1.appendChild(latitudeParagraph);
divTask1.appendChild(longitudeParagraph);
buttonTask5.innerHTML = 'Log location';

let myLatitude;
let myLongitude;

buttonTask5.addEventListener('click', function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    myLatitude = position.coords.latitude;
    myLongitude = position.coords.longitude;
    latitudeParagraph.innerHTML = `This is the latitude: ${myLatitude} `;
    longitudeParagraph.innerHTML = `This is the longitude: ${myLongitude}`;
  });
});

// 6 It doesn't work

const mapBtn = document.getElementById('mapBtn');

mapBtn.addEventListener('click', () => {
  function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
      // center: { lat: myLatitude, lng: myLongitude },
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
  window.initMap = initMap;
});

// 7
function runAfterDelay(delay, callback) {
  setTimeout(function () {
    callback();
  }, delay * 1000);
}

runAfterDelay(4, function () {
  console.log('Should be logged after 4 seconds');
});

// 8
const myBody = document.querySelector('body');

myBody.addEventListener('dblclick', function () {
  console.log('double click!');
});

// 9
function logFunnyJoke() {
  console.log('It is some funny joke))))');
}

function logBadJoke() {
  console.log('It is some bad joke((((');
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);

// Function as a variable
// 1
const arrayOfFunctions = [firstFunction, secondFunction, thirdFunction];

function firstFunction() {
  console.log('I am first function');
}
function secondFunction() {
  console.log('I am second function');
}
function thirdFunction() {
  console.log('I am third function');
}
arrayOfFunctions.forEach((item) => item());

// 2
const myFunction = () => {
  console.log('This is function as const');
};
myFunction();

function myFunction2() {
  console.log('This is function as function');
}
myFunction2();

// 3
function printName(userName) {
  console.log(`My name is ${userName}`);
}
const myObj = {
  text: printName,
};

myObj[printName('Olga')];
