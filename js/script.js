const numberOfFilms = +prompt("Скільки фільмів ви вже подивилися?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один з останніх переглянутих фільмів?", ""),
      b = +prompt("На скільки балів його оціните?", ""),
      c = prompt("Один з останніх переглянутих фільмів?", ""),
      d = +prompt("На скільки балів його оціните?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);