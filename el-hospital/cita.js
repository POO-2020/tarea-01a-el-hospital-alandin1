import Paciente from "./paciente.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Doctor from "./doctor.js"

export default class Cita {
    constructor(fecha, hora, doctor, paciente){
        this.fecha = fecha; 
        this.hora = hora;
        this.doctor = doctor;
        this.paciente = paciente;
    }

    getCita(){

    }
}