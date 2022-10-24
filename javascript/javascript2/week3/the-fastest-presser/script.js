const timeInput = document.getElementById('timeInput');
const startBtn = document.getElementById('startBtn');
const resultS = document.getElementById('resultS');
const resultL = document.getElementById('resultL');

let countL = 0;
let countS = 0;
let startGame = false;

function congratFunction() {
  if (countS > countL) resultS.innerHTML = 'Winner is a S player';
  if (countS < countL) resultL.innerHTML = 'Winner is a L player';
  if (countS === countL) {
    resultS.innerHTML = "It's a draw";
    resultL.innerHTML = "It's a draw";
  }
}

startBtn.addEventListener('click', () => {
  startGame = true;
  setTimeout(() => {
    startGame = false;
    congratFunction();
  }, timeInput.value * 1000);
});

document.addEventListener('keypress', (event) => {
  if (startGame) {
    if (event.key === 's') {
      resultS.innerHTML = ++countS;
    }
    if (event.key === 'l') {
      resultL.innerHTML = ++countL;
    }
  }
});
