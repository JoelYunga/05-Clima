const axios = require('axios').default;

const apiKey = 'db98e9e2f3728af5b37fb2341813f1f6';


const getUbicacion = async(ciudad) => {
    try {
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
        const respuesta = await axios.get(url);
        const latitud = respuesta.data.coord.lat
        const longitud = respuesta.data.coord.lon

        return { latitud, longitud }

    } catch (error) {
        console.log(error.data);
    }
}

module.exports = {
    getUbicacion
}