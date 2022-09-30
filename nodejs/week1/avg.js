const arguments = process.argv.slice(2);

const myArr = arguments
  .map((element) => Number(element))
  .filter((el) => !isNaN(el));
let sum = 0;
if (myArr.length === 0) {
  console.log('No arguments are provided');
} else {
  for (let i = 0; i < myArr.length; i++) {
    sum += myArr[i];
  }
  let average = sum / myArr.length;
  console.log(`Average: ${average}`);
}
