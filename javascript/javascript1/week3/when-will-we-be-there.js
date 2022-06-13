function getTravelTime() {
  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  let time = travelInformation.destinationDistance / travelInformation.speed;
  let timeArr = time.toString().split('.');
  let hours = timeArr[0];
  let minutes = Math.floor(timeArr[1] * 0.6);

  return `${hours} hour(s) and ${minutes} minute(s)`;
}

const travelTime = getTravelTime();
console.log(travelTime);
