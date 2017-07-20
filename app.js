'use strict'

var movie = require("./movie");
var threeFavoriteMovies = ["Anaconda", "Anchorman", "The Amityville Horror"];
threeFavoriteMovies.forEach(function(film){
  // your code here
  movie(film);
});
console.log(movie);