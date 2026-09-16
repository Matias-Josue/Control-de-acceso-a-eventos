import readline from 'readline';
import { ControlAcceso } from './ControlAcceso.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pedirDato = (pregunta) => {
    return new Promise((resolve) => rl.question(pregunta, resolve));
};

async function ejecutar() {
    const aforo = 5;
    const precioEntrada = 15.0;
    const edadMinima = 18;

    const evento = new ControlAcceso(aforo, precioEntrada, edadMinima);

    console.log("=== SISTEMA DE CONTROL DE ACCESO ===");

    while (true) {
        const nombre = await pedirDato("\nIngrese el nombre del asistente (o 'fin' para salir): ");

        if (nombre.trim().toLowerCase() === "fin") {
            break;
        }

        const edadInput = await pedirDato(`Ingrese la edad de ${nombre}: `);
        const edad = parseInt(edadInput, 10);

        if (isNaN(edad)) {
            console.log("⚠️ Edad no válida. Intente nuevamente.");
            continue;
        }

        evento.registrarAsistente(nombre, edad);
    }

    evento.mostrarResumen();
    rl.close();
}

ejecutar();