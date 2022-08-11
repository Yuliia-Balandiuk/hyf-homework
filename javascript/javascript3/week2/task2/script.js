function waitForThreeSeconds(resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 1000);
  });
}

waitForThreeSeconds(8).then(() => {
  console.log('I am called asynchronously');
});

async function waitForThreeSeconds2(resolveAfter) {
  await new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, resolveAfter * 1000);
  });
}

waitForThreeSeconds2(8).then(() => {
  console.log('I am called asynchronously');
});
