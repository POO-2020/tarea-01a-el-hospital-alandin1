import Nombre from "./nombre.js"
import Fecha from "./fecha.js"

export default class Paciente{
    constructor(nombre, fechaNacimiento, telefono){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
    }

    getPerfil(){

    }
}