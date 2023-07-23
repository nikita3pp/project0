// const nunberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   count: nunberOfFilms,
//   movies: {
//     logan: "8.1",
//   },
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const oneLastMovie = prompt("Один из последних просмотренных фильмов?", ""),
//   grade = prompt("На сколько оцените его?", ""),
//   oneLastMovie2 = prompt("Один из последних просмотренных фильмов?", ""),
//   grade2 = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[oneLastMovie] = grade;
// personalMovieDB.movies[oneLastMovie2] = grade2;

// console.log(personalMovieDB);

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// "use strict";

// Код возьмите из предыдущего домашнего задания

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

for (let i = 0; i < 2; i++) {
  const oneLastMovie = prompt("Один из последних просмотренных фильмов?", ""),
    grade = prompt("На сколько оцените его?", "");

  if (
    oneLastMovie != "" &&
    grade != "" &&
    oneLastMovie != null &&
    grade != null &&
    oneLastMovie.length > 50
  ) {
    personalMovieDB.movies[oneLastMovie] = grade;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

console.log(personalMovieDB);
