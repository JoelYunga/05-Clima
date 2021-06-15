const clima = require('./controlador/clima');
const ubicacion = require('./controlador/ubicacion');
const colors = require('colors');
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    },
    opc: {
        alias: "o",
        desc: "Listar todos los parametros del Clima ",
    }

}).argv;

let ciudad = argv.ciudad;


const getInfo = async(ciudad) => {
    try {
        const coords = await ubicacion.getUbicacion(ciudad)
        const lat = coords.latitud;
        const lon = coords.longitud;
        const temp = await clima.getClima(lat, lon);
        const temperatura = temp.temperatura;
        const verd = temp.verd;
        const temp_max = temp.temp_max;
        const temp_min = temp.temp_min;
        const humedad = temp.humedad;
        const presion = temp.presion;
        const estado = temp.clima;
        return {
            temperatura,
            verd,
            temp_max,
            temp_min,
            presion,
            humedad,
            estado

        }
    } catch (e) {
        return `No se pudo determinar el clima de ${ciudad} ${e}`;
    }
};



if (argv.opc == 't') {
    getInfo(argv.ciudad).then((dato) => {
        if (dato.temperatura == undefined) {
            console.log("No existe el lugar buscado".red)
        } else {
            /*
            Ibarra
            */
            if (dato.estado == 'light rain') {
                getInfo(argv.ciudad).then((dato) => {
                    console.log(`\n################## Datos Climaticos de ${ciudad} ################\n`.green);
                    console.log(`|| `.bgYellow + ` La temperatura en ${ciudad} es de: ${dato.temperatura}°C`.green +
                        ` pero se siente como: ${dato.verd}°C\n`.green + `|| `.bgYellow + ` La temperatura máxima que alcanza ${ciudad} es de: ${dato.temp_max}°C\n`.green +
                        `|| `.bgYellow + ` La temperatura minima que alcanza ${ciudad} es de: ${dato.temp_min}°C\n`.green + `|| `.bgYellow + ` La presion que tiene ${ciudad} es de: ${dato.presion} hPa\n`.green +
                        `|| `.bgYellow + ` La humedad que tiene ${ciudad} es de: ${dato.humedad}%\n`.green + `|| `.bgYellow + ` El pronostico del clima en ${ciudad} es de: Lluvia ligera\n`.blue);
                    console.log(`\n#############################################################\n`.green);
                })
            }
            /*
            Grecia
            */
            if (dato.estado == 'few clouds') {
                getInfo(argv.ciudad).then((dato) => {
                    console.log(`\n################## Datos Climaticos de ${ciudad} ################\n`.green);
                    console.log(`|| `.bgYellow + ` La temperatura en ${ciudad} es de: ${dato.temperatura}°C`.green +
                        ` pero se siente como: ${dato.verd}°C\n`.green + `|| `.bgYellow + ` La temperatura máxima que alcanza ${ciudad} es de: ${dato.temp_max}°C\n`.green +
                        `|| `.bgYellow + ` La temperatura minima que alcanza ${ciudad} es de: ${dato.temp_min}°C\n`.green + `|| `.bgYellow + ` La presion que tiene ${ciudad} es de: ${dato.presion} hPa\n`.green +
                        `|| `.bgYellow + ` La humedad que tiene ${ciudad} es de: ${dato.humedad}%\n`.green + `|| `.bgYellow + ` El pronostico del clima en ${ciudad} es: Pocas Nubes\n`.red);
                    console.log(`\n#############################################################\n`.green);
                })
            }
            /*
            Chimborazo
            */
            if (dato.estado == 'broken clouds') {
                getInfo(argv.ciudad).then((dato) => {
                    console.log(`\n################## Datos Climaticos de ${ciudad} ################\n`.green);
                    console.log(`|| `.bgYellow + ` La temperatura en ${ciudad} es de: ${dato.temperatura}°C`.green +
                        ` pero se siente como: ${dato.verd}°C\n`.green + `|| `.bgYellow + ` La temperatura máxima que alcanza ${ciudad} es de: ${dato.temp_max}°C\n`.green +
                        `|| `.bgYellow + ` La temperatura minima que alcanza ${ciudad} es de: ${dato.temp_min}°C\n`.green + `|| `.bgYellow + ` La presion que tiene ${ciudad} es de: ${dato.presion} hPa\n`.green +
                        `|| `.bgYellow + ` La humedad que tiene ${ciudad} es de: ${dato.humedad}%\n`.green + `|| `.bgYellow + ` El pronostico del clima en ${ciudad} es: Nubes Rotas\n`.cyan);
                    console.log(`\n#############################################################\n`.green);
                })
            }
            /*
            Venezuela
            */
            if (dato.estado == 'scattered clouds') {
                getInfo(argv.ciudad).then((dato) => {
                    console.log(`\n################## Datos Climaticos de ${ciudad} ################\n`.green);
                    console.log(`|| `.bgYellow + ` La temperatura en ${ciudad} es de: ${dato.temperatura}°C`.green +
                        ` pero se siente como: ${dato.verd}°C\n`.green + `|| `.bgYellow + ` La temperatura máxima que alcanza ${ciudad} es de: ${dato.temp_max}°C\n`.green +
                        `|| `.bgYellow + ` La temperatura minima que alcanza ${ciudad} es de: ${dato.temp_min}°C\n`.green + `|| `.bgYellow + ` La presion que tiene ${ciudad} es de: ${dato.presion} hPa\n`.green +
                        `|| `.bgYellow + ` La humedad que tiene ${ciudad} es de: ${dato.humedad}%\n`.green + `|| `.bgYellow + ` El pronostico del clima en ${ciudad} es: Nubes Dispersas\n`.magenta);
                    console.log(`\n#############################################################\n`.green);
                })
            }

            /*
            Iran
            */
            if (dato.estado == 'clear sky') {
                getInfo(argv.ciudad).then((dato) => {
                    console.log(`\n################## Datos Climaticos de ${ciudad} ################\n`.green);
                    console.log(`|| `.bgYellow + ` La temperatura en ${ciudad} es de: ${dato.temperatura}°C`.green +
                        ` pero se siente como: ${dato.verd}°C\n`.green + `|| `.bgYellow + ` La temperatura máxima que alcanza ${ciudad} es de: ${dato.temp_max}°C\n`.green +
                        `|| `.bgYellow + ` La temperatura minima que alcanza ${ciudad} es de: ${dato.temp_min}°C\n`.green + `|| `.bgYellow + ` La presion que tiene ${ciudad} es de: ${dato.presion} hPa\n`.green +
                        `|| `.bgYellow + ` La humedad que tiene ${ciudad} es de: ${dato.humedad}%\n`.green + `|| `.bgYellow + ` El pronostico del clima en ${ciudad} es de: Cielo Despejado\n`.black.bgGreen);
                    console.log(`\n#############################################################\n`.green);
                })
            }

            if (dato.estado == 'moderate rain') {
                getInfo(argv.ciudad).then((dato) => {
                    console.log(`\n################## Datos Climaticos de ${ciudad} ################\n`.green);
                    console.log(`|| `.bgYellow + ` La temperatura en ${ciudad} es de: ${dato.temperatura}°C`.green +
                        ` pero se siente como: ${dato.verd}°C\n`.green + `|| `.bgYellow + ` La temperatura máxima que alcanza ${ciudad} es de: ${dato.temp_max}°C\n`.green +
                        `|| `.bgYellow + ` La temperatura minima que alcanza ${ciudad} es de: ${dato.temp_min}°C\n`.green + `|| `.bgYellow + ` La presion que tiene ${ciudad} es de: ${dato.presion} hPa\n`.green +
                        `|| `.bgYellow + ` La humedad que tiene ${ciudad} es de: ${dato.humedad}%\n`.green + `|| `.bgYellow + ` El pronostico del clima en ${ciudad} es de: Lluvia Moderada\n`.bgBrightRed);
                    console.log(`\n#############################################################\n`.green);
                })
            }
            if (dato.estado == 'overcast clouds') {
                getInfo(argv.ciudad).then((dato) => {
                    console.log(`\n################## Datos Climaticos de ${ciudad} ################\n`.green);
                    console.log(`|| `.bgYellow + ` La temperatura en ${ciudad} es de: ${dato.temperatura}°C`.green +
                        ` pero se siente como: ${dato.verd}°C\n`.green + `|| `.bgYellow + ` La temperatura máxima que alcanza ${ciudad} es de: ${dato.temp_max}°C\n`.green +
                        `|| `.bgYellow + ` La temperatura minima que alcanza ${ciudad} es de: ${dato.temp_min}°C\n`.green + `|| `.bgYellow + ` La presion que tiene ${ciudad} es de: ${dato.presion} hPa\n`.green +
                        `|| `.bgYellow + ` La humedad que tiene ${ciudad} es de: ${dato.humedad}%\n`.green + `|| `.bgYellow + ` El pronostico del clima en ${ciudad} es: Nublado\n`.black.bgBrightMagenta);
                    console.log(`\n#############################################################\n`.green);
                })
            }
        }

    })

}

/*
1.- modificar el codigo para obtener errores coherentes
2.- Mostrar el resto de parametros del clima
   2.1 Utilizar colores
3. Subir a Github   
*/