import { movies } from './movies.js';

//Doubling of number

const numbers = [1, 2, 3, 4];

const newNumbers = numbers
  .filter((number) => number % 2 !== 0)
  .map((number) => number * 2);

console.log('The doubled numbers are', newNumbers); // [2, 6]

// Working with movies

// 1. Create an array of movies containing the movies with a short title
const shortTitle = movies.filter((movie) => movie.title.length <= 3);
console.log(shortTitle);

// 2. Create an array of movie titles with long movie titles
const longTitles = movies.filter((movie) => movie.title.length >= 50);
console.log(longTitles);

// 3. Count the number of movies made between 1980-1989 (including both the years)
const countMovies = movies.reduce((prevRes, curMovie) => {
  if (curMovie.year >= 1980 && curMovie.year <= 1989) {
    return (prevRes += 1);
  }
  return prevRes;
}, 0);
console.log(countMovies);

/* 4. Create a new array that has an extra key called tag.
 The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)*/
const moviesWithTagKey = movies.map((movie) => {
  if (movie.rating < 4) {
    movie.tag = 'Bad';
  } else if (movie.rating < 7) {
    movie.tag = 'Average';
  } else {
    movie.tag = 'Good';
  }
  return movie;
});
console.log(moviesWithTagKey);

/* 5. Using chaining, first filter the movies array to only contain the movies rated higher than 6.
Now map the movies array to only the rating of the movies.*/
const moviesWithRating = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(moviesWithRating);

/*6. Count the total number of movies containing any of following keywords:
 Surfer, Alien or Benjamin.Can you make sure the search is case insensitive?*/
const isContainingKeywords = movies.reduce((prevRes, curMovie) => {
  if (curMovie.title.match(/Alien|Benjamin|Surfer/i)) {
    return (prevRes += 1);
  }
  return prevRes;
}, 0);
console.log(isContainingKeywords);

// 7. Create an array of movies where a word in the title is duplicated.
const moviesWithDuplicatedTitle = movies.filter((movie) => {
  const strToArr = movie.title.toLocaleLowerCase().split(' ').sort();
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] === strToArr[i + 1]) {
      return movie;
    }
  }
});
console.log(moviesWithDuplicatedTitle);

// 8. Calculate the average rating of all the movies using reduce. Optional
const averageRating = (
  movies.reduce((result, currentMovie) => (result += currentMovie.rating), 0) /
  movies.length
).toFixed(2);
console.log(averageRating);

// 9. Count the total number of Good, Average and Bad movies using reduce.
const totalNumber = moviesWithTagKey.reduce(
  (totalRes, currentMovie) => {
    if (currentMovie.tag === 'Good') {
      totalRes.goodMovies += 1;
    } else if (currentMovie.tag === 'Average') {
      totalRes.averageMovies += 1;
    } else if (currentMovie.tag === 'Bad') {
      totalRes.badMovies += 1;
    }
    return totalRes;
  },
  { goodMovies: 0, averageMovies: 0, badMovies: 0 }
);
console.log(totalNumber);
