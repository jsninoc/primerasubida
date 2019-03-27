const opciones = {
    nombre: {
        alias: 'n',
        demand: true
    },
    matematicas: {
        alias: 'm',
        demand: true
    },
    ingles: {
        alias: 'i',
        demand: true
    },
    programacion: {
        alias: 'p',
        demand: true
    }
}

let obtenerPromedio = (nota_uno, nota_dos, nota_tres)/3;

const argv = require('yargs').command('promedio' , 'Calcular promedio').argv;

module.exports = {
    obtenerPromedio,
    argv
};