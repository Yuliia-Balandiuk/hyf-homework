const clothesToWear = showThatToWear(15);

function showThatToWear(temperature) {
  if (temperature < -15) {
    return 'Stay at home';
  } else if (temperature <= 0) {
    return "Don't forget to wear a hat and gloves";
  } else if (temperature < 15) {
    return 'Put on your jacket';
  } else {
    return 'It is enough to wear shorts and a T-shirt';
  }
}
console.log(clothesToWear);
