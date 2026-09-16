export class Asistente {
    #nombre;
    #edad;

    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    getNombre() {
        return this.#nombre;
    }

    getEdad() {
        return this.#edad;
    }
}