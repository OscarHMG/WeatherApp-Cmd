const argv = require('yargs')
    .options({
        address: {
            alias: 'd',
            desc: 'Address of the city to obtain the weather',
            demand: true
        }
    }).argv;

module.exports = {
    argv
}


//// AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM
//AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8