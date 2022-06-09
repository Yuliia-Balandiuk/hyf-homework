function showThatToWear(temperature) {
  if (temperature < -15) {
    return 'Stay at home';
  } else if (temperature <= 0) {
    return "Don't forget to wear a hat and gloves";
  } else if (temperature < 20) {
    return 'Put on your jacket';
  } else {
    return 'It is enough to wear shorts and a T-shirt';
  }
}

const clothesToWear = showThatToWear(25);
console.log(clothesToWear);
