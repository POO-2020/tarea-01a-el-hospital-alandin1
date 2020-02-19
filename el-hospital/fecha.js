export default class Fecha {
    constructor(dia, mes, año) {
        this.fecha = new Date(año, mes, dia);
    }

    getAños(){
        let result = new Date(Date.now()).getFullYear() - this.fecha.getFullYear(); 
        return result;
    }

    getMeses(){
        return this.getAños() * 12;
    }

    getSemanas(){
        return this.getMeses() * 4;
    }

    getDias(){
        return this.getSemanas() * 7;
    }

    getFecha(){

    }
    
    getDiaFecha(){
        
    }
}