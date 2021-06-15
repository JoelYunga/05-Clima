const axios = require('axios').default;

const apiKey = 'db98e9e2f3728af5b37fb2341813f1f6';


const getClima = async(lat, lon) => {
    try {
        let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        const respuesta = await axios.get(url);
        const temperatura = respuesta.data.main.temp
        const verd = respuesta.data.main.feels_like
        const temp_max = respuesta.data.main.temp_max
        const temp_min = respuesta.data.main.temp_min
        const humedad = respuesta.data.main.humidity
        const presion = respuesta.data.main.pressure
        const clima = respuesta.data.weather[0].description

        return { temperatura, verd, temp_max, temp_min, humedad, presion, clima }

    } catch (error) {
        console.log(error.data);
    }
}

module.exports = {
    getClima
}