const argv = require('./config/yargs').argv;
const places = require('./places/places');
const weather = require('./weather/weather');






let getWeatherInfo = async(address) => {

    let placesResponse = await places.getCoordsFromPlace(address);
    let weatherResponse = await weather.getWeatherFromCoords(placesResponse.coords);

    return {
        placesResponse,
        weatherResponse
    }

}

getWeatherInfo(argv.address)
    .then(response => {
        //PRINT ALL THE INFORMATION
        console.log(`\n---------- ${response.placesResponse.formatted_address} ----------`);
        console.log(`\tHumedad: ${response.weatherResponse.humidity}`);
        console.log(`\tTemp. Actual: ${response.weatherResponse.temp}`);
        console.log(`\tTemp. Max: ${response.weatherResponse.temp_max}`);
        console.log(`\tTemp. Min: ${response.weatherResponse.temp_min}`);

    })
    .catch(error => {
        console.log(`Can't get the weather from ${response.placesResponse.formatted_address}`);
    });