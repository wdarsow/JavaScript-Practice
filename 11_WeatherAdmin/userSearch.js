
function UserSearch (name, location) {
    this.name = name,
    this.location = location,
    this.weatherInfo = function() {
        console.log("weather info method");
    }
}

let Tom = new UserSearch('Tom', 'Minneapolis');
console.log(Tom);
Tom.weatherInfo();

module.exports = UserSearch;