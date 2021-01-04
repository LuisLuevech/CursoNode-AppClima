const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv;

//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);

//clima.getClima(37.7956688, -7.1885793)
//    .then(console.log)
//    .catch(console.log);


const getInfo = async(dir) => {


    try {
        const coords = await lugar.getLugarLatLng(dir);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `La temperatura en ${coords.direccion} es de ${ temp }ºC`;
    } catch (e) {
        return `No se puede determinar la temperatura en ${dir}`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);