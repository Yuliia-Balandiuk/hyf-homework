function setTimeoutPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

setTimeoutPromise().then(() => {
  console.log('Called after 3 seconds');
});

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
}

getCurrentLocation()
  .then((position) => {
    console.log(position);
  })
  .catch((error) => {
    console.log(error);
  });

getCurrentLocation();
