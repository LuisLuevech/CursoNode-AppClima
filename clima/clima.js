const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await (axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2dcaf2b793404f1aeee3882095b8c46f&units=metric `));

    return resp.data.main.temp;
}


module.exports = {
    getClima
}