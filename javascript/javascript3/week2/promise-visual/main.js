const oneByOneBtn = document.getElementById('oneByOneBtn');
const allAtOneBtn = document.getElementById('allAtOneBtn');

const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');

const boxesTargetPositions = {
  redBoxTargetPositions: {
    x: 20 - parseInt(redBox.style.left),
    y: 300 - parseInt(redBox.style.top),
  },
  blueBoxTargetPositions: {
    x: 400 - parseInt(blueBox.style.left),
    y: 300 - parseInt(blueBox.style.top),
  },
  greenBoxTargetPositions: {
    x: 400 - parseInt(greenBox.style.left),
    y: 20 - parseInt(greenBox.style.top),
  },
};

async function translateOneByOne() {
  await moveElement(redBox, boxesTargetPositions.redBoxTargetPositions).then(
    () => {
      console.log('Red element has been moved');
    }
  );
  await moveElement(blueBox, boxesTargetPositions.blueBoxTargetPositions).then(
    () => {
      console.log('Blue element has been moved');
    }
  );
  await moveElement(
    greenBox,
    boxesTargetPositions.greenBoxTargetPositions
  ).then(() => {
    console.log('Green element has been moved');
  });
}

function translateOneByOne2() {
  moveElement(redBox, boxesTargetPositions.redBoxTargetPositions).then(() => {
    moveElement(blueBox, boxesTargetPositions.blueBoxTargetPositions).then(
      () => {
        moveElement(greenBox, boxesTargetPositions.greenBoxTargetPositions);
      }
    );
  });
}

async function allAtOnePromise() {
  await Promise.all([
    moveElement(redBox, boxesTargetPositions.redBoxTargetPositions),
    moveElement(blueBox, boxesTargetPositions.blueBoxTargetPositions),
    moveElement(greenBox, boxesTargetPositions.greenBoxTargetPositions),
  ]).then(() => {
    console.log('All elements have been moved');
  });
}

oneByOneBtn.addEventListener('click', translateOneByOne2);
allAtOneBtn.addEventListener('click', allAtOnePromise);
