const nunberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: nunberOfFilms,
  movies: {
    logan: "8.1",
  },
  actors: {},
  genres: [],
  privat: false,
};

const oneLastMovie = prompt("Один из последних просмотренных фильмов?", ""),
  grade = prompt("На сколько оцените его?", ""),
  oneLastMovie2 = prompt("Один из последних просмотренных фильмов?", ""),
  grade2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[oneLastMovie] = grade;
personalMovieDB.movies[oneLastMovie2] = grade2;

console.log(personalMovieDB);
