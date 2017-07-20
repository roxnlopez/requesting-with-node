'use strict'

var keysInfo = require('./env.js');
var request = require('request');

function get(movieTitle) {
var apiUrl = 'https://www.googleapis.com/customsearch/v1?key=' + keysInfo.apiKey + '&cx=' + keysInfo.engineId + '&q=' + movieTitle;
//var apiUrl = url + apiKey + '/conditions/q/' + state + '/' + city + '.json';
//console.log(keysInfo.apiKey);
//console.log(keysInfo.engineId);
request(apiUrl, function (error, response, body) {
  //Inside that callback
  //parse data
  //Print out the movie result
  //console.log(body.items.length);
  console.log(JSON.parse(body).items[0].title);
	});
}
module.exports = get;