const request = require('request');
const argv = require('yargs').argv;
const moment = require('moment');
let apiKey = 'a1e3df40f95c0b92d083b8a468d14883';
let zip = argv.c || '28601';
let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let temp = [(1.8 * (weather.main.temp - 273.15) + 32).toFixed(0) + "F"];
    let message = `It's ${temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});

var Moment = require('moment-timezone');
Moment().tz("America/New_York").format()
var time = new Moment();
console.log(Moment().tz("America/New_York").format('h:mm:ss a'));


