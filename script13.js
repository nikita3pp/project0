/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let nunberOfFilms;

function start() {
  nunberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (nunberOfFilms == "" || nunberOfFilms == null || isNaN(nunberOfFilms)) {
    nunberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  count: nunberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const oneLastMovie = prompt(
      "Один из последних просмотренных фильмов?",
      ""
    ).trim();
    const grade = prompt("На сколько оцените его?", "");

    if (
      oneLastMovie != "" &&
      grade != "" &&
      oneLastMovie != null &&
      grade != null &&
      oneLastMovie.length < 50
    ) {
      personalMovieDB.movies[oneLastMovie] = grade;
      console.log("done");
    } else {
      console.log("error");
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("произошла ошибка");
  }
}
detectPersonalLevel();

// console.log(personalMovieDB);

// function showMyDB() {
//   if ((personalMovieDB["privat"] = false)) {
//     console.log(personalMovieDB);
//   }
// }

function showMyDB(hidden) {
  if (hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();

// const oneLastMovie = prompt("Один из последних просмотренных фильмов?", ""),
//   grade = prompt("На сколько оцените его?", ""),
//   oneLastMovie2 = prompt("Один из последних просмотренных фильмов?", ""),
//   grade2 = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[oneLastMovie] = grade;
// personalMovieDB.movies[oneLastMovie2] = grade2;

// console.log(personalMovieDB);
