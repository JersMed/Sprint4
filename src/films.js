// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const directors = array.map((movie) => movie.director)
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const directorsFilms = array.filter((movie) => movie.director === director)
  return directorsFilms;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const directorsFilms = getMoviesFromDirector(array, director)
  const averageMovies = filmsNumber(directorsFilms)
  return averageMovies
}
function filmsNumber(array) {
  const averageMovies = array.reduce((sumFilms, movie) => sumFilms + movie.score, 0)
  return Number((averageMovies / array.length).toFixed(2))
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const sortedTitles = (array.map(movies => movies.title)).sort().slice(0, 20);
  return sortedTitles;
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const orderYears = array.sort((movie1, movie2) => {
    if (movie1.year === movie2.year) {
      return movie1.title > movie2.title ? 1 : -1;
    }
      return movie1.year > movie2.year ? 1 : -1;
  });
  return [...orderYears];
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const arrayGenre = array.filter((movie) => movie.genre.find(genreMovie => genreMovie === genre))
  arrayGenre.map((movieGenre) =>{    
    if (!movieGenre.score) {
    const movieEliminated = arrayGenre.findIndex(movie => movie === movieGenre)
    arrayGenre.splice(movieEliminated, 1)
  }})

  const averageGenre = moviesAverage(arrayGenre)
  return averageGenre
}
// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
