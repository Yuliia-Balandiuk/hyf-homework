const url = 'https://api.covidtracking.com/v1/us/daily.json';

//Fetching and waiting using promises and .then
function getDataUsingPromises() {
  setTimeout(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, 3000);
}

getDataUsingPromises();

//Fetching and waiting using async/await
async function getDataUsingPromisesAsync() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 3000)
  );
  const resData = await fetch(url);
  const data = await resData.json();

  console.log(data);
}

getDataUsingPromisesAsync();
