const url =
  'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

function getArrOfBadMovies() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const onlyBadMovies = data.filter((movie) => movie.rating < 4);
      console.log(onlyBadMovies);
    });
}

getArrOfBadMovies();

function getArrOfBadMoviesSince2000() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const badMoviesSince2000 = data.filter(
        (movie) => movie.rating < 4 && movie.year >= 2000
      );
      console.log(badMoviesSince2000);
    });
}

getArrOfBadMoviesSince2000();
