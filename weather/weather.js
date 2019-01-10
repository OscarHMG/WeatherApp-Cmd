const axios = require('axios');



const getWeatherFromCoords = async(coords) => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ coords.lat }&lon=${ coords.lng }&units=metric&appid=20b12c7139ac603d34c107ad1b64f637`);

    let mainData = response.data.main;

    //console.log(mainData);

    return mainData;


}

module.exports = {
    getWeatherFromCoords
};