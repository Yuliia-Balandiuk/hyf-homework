// numberOfGiphy;
const gifsSection = document.getElementById('gifs-section');
const giphNameInput = document.getElementById('giphNameInput');
const giphNumberInput = document.getElementById('giphNumberInput');
const giphsSearchBtn = document.getElementById('giphsSearchBtn');

function getGiphy() {
  giphsSearchBtn.addEventListener('click', function () {
    const nameOfGiphy = giphNameInput.value;
    const giphyApiUrl = `https://api.giphy.com/v1/gifs/search?api_key=RU54nAjr698e5Cbr3j6eyng3EDIctOoU&q=${nameOfGiphy}&limit=${giphNumberInput.value}&offset=0&rating=g&lang=en`;

    fetch(giphyApiUrl)
      .then((response) => response.json())
      .then((data) => {
        gifsSection.innerHTML = '';
        console.log(data);
        data.data.forEach((el) => {
          const gifImg = document.createElement('img');
          gifImg.src = el.images.original.url;
          gifsSection.appendChild(gifImg);
        });
      });
  });
}

getGiphy();
