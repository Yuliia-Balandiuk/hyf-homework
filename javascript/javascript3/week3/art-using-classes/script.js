const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = `${this.fillColor}`;
    ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    ctx.fill();
  }
}

let c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, '#000000');
c1.draw();

// Every 100ms create a new circle instance and draw that to the canvas.
function randomCircle() {
  let randomX = Math.floor(Math.random() * 1000);
  let randomY = Math.floor(Math.random() * 500);
  let randomR = Math.floor(Math.random() * 300);
  let randomColor = `rgb(${Math.floor(Math.random() * 225)},${Math.floor(
    Math.random() * 225
  )},${Math.floor(Math.random() * 225)})`;

  const circle = new Circle(
    randomX,
    randomY,
    randomR,
    0,
    2 * Math.PI,
    randomColor
  );

  circle.draw();
}

let timerId = setInterval(randomCircle, 100);

setTimeout(() => {
  clearInterval(timerId);
  alert('Stop in 20 seconds');
}, 20000);

// Follow the mouse
window.addEventListener('mousemove', randomCircle);
