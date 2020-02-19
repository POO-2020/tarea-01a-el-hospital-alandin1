export default class Nombre {
    /**
     * 
     * @param {string} nombre Nombre 
     * @param {string} aMaterno Apellido Materno
     * @param {string} aPaterno Apellido Paterno
     */
    constructor(nombre, aMaterno, aPaterno){
        this.nombre = nombre;
        this.aMaterno = aMaterno;
        this.aPaterno = aPaterno;
    }

    getNombreCompleto(){
        return `${this.nombre} ${this.aMaterno} ${this.aPaterno}`
    }

    getApellidoNombre(){
        return `${this.aMaterno} ${this.aPaterno} ${this.nombre}`
    }

    getIniciales(){
        
    }
}