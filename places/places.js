const axios = require('axios');




const getCoordsFromPlace = async(address) => {

    let encodedAddress = encodeURI(address);

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedAddress }&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error(`There are no results for the place ${address}`);
    }

    let placesData = response.data.results[0];

    let formatted_address = placesData.formatted_address;
    let coords = placesData.geometry.location;

    return {
        formatted_address,
        coords
    };
};

module.exports = {
    getCoordsFromPlace
}