export default class Fecha {
    /**
     * @param {number} dia Valor entre 1 y 31
     * @param {number} mes Valor entre 1 y 12
     */
    constructor (dia, mes){
        this.fecha = new Date(dia, mes -1)
        this.diaSemana = [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "viernes",
            "Sábado"
        ];  
        this.nombreMes = 
            ["enero", 
            "febrero", 
            "marzo", 
            "abril", 
            "mayo", 
            "junio", 
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre"]
    }

    getAños(){

    }

    getMeses(){

    }

    getSemanas(){

    }
    
    getDias(){

    }

    getFecha(){

    }
    
    getDiaFecha(){
        
    }
}