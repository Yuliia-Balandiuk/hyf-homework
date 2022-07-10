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

buttonTask5.addEventListener('click', function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    let myLatitude = position.coords.latitude;
    let myLongitude = position.coords.longitude;
    latitudeParagraph.innerHTML = `This is the latitude: ${myLatitude} `;
    longitudeParagraph.innerHTML = `This is the longitude: ${myLongitude}`;
  });
});

// 6

// 7

// 8
const myBody = document.querySelector('body');

myBody.addEventListener('dblclick', function () {
  console.log('double click!');
});
