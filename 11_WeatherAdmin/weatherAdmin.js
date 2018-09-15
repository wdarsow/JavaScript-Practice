const weather = require('weather-js');
const moment = require('moment');

let weatherInput = process.argv[2];

console.log(weatherInput);

function UserSearch (name, location) {
    this.name = name,
    this.location = location,
    this.weatherInfo = function() {
        console.log("weather info method");
    }
}

function WeatherAdmin () {

}