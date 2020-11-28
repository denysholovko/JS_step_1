'use strict';

const numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один з останніх переглянутих фільмів?", ""),
          b = +prompt("На скільки балів його оціните?", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--; 
    }
}

if (personalMovieDB.count < 10) {
    console.log('Переглянуто мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log('Ви класичний глядач');
} else if (personalMovieDB.count >= 30) {
    console.log('Ви кіноман');
} else {
    console.log('Сталася помилка');
}

console.log(personalMovieDB);

