const axios = require('axios');



const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeUrl}`,
        headers: {
            'x-rapidapi-key': 'a079163e10mshc9eeb7dfb20637bp183baejsn95d079eb88ae',
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
        }
    });

    const resp = await instance.get();
    if (resp.data.data[0] === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.data[0];
    const direccion = data.name;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}