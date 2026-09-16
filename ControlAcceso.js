import { Asistente } from './Asistente.js';

export class ControlAcceso {
    constructor(capacidadMax, costoEntrada, edadMinima) {
        // Arreglo de tamaño fijo (sin usar push, pop ni métodos dinámicos de Array)
        this.listaAsistentes = new Array(capacidadMax);
        this.contadorIngresados = 0;
        this.costoEntrada = costoEntrada;
        this.edadMinima = edadMinima;
    }

    registrarAsistente(nombre, edad) {
        if (edad < this.edadMinima) {
            console.log(`❌ Acceso denegado: ${nombre} es menor de edad (${edad} años).`);
            return false;
        }

        if (this.contadorIngresados >= this.listaAsistentes.length) {
            console.log(`❌ Acceso denegado: Aforo completo.`);
            return false;
        }

        // Asignación directa por índice en arreglo tradicional
        this.listaAsistentes[this.contadorIngresados] = new Asistente(nombre, edad);
        this.contadorIngresados++;
        console.log(`✅ Acceso permitido: ${nombre} ha sido ingresado/a.`);
        return true;
    }

    mostrarResumen() {
        console.log("\n========== RESUMEN DEL EVENTO ==========");
        console.log(`Asistentes ingresados (${this.contadorIngresados}/${this.listaAsistentes.length}):`);
        
        for (let i = 0; i < this.contadorIngresados; i++) {
            const asistente = this.listaAsistentes[i];
            console.log(`- ${asistente.getNombre()} (${asistente.getEdad()} años)`);
        }

        const totalRecaudado = this.contadorIngresados * this.costoEntrada;
        console.log(`Monto total recaudado: $${totalRecaudado.toFixed(2)}`);
        console.log("=========================================");
    }
}