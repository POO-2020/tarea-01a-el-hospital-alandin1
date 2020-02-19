import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"

class Main {
    pruebaFecha () {
        let fecha = new Fecha(17, 2, 2020);
        console.log(fecha.getAños());
        console.log(fecha.getMeses());
        console.log(fecha.getSemanas());
        console.log(fecha.getDias());
    }

    pruebaTiempo(){
        let hora = new Tiempo(2, 24, "pm");
        console.log(hora.getFormato12());
        console.log(hora.getFormato24());
    }
   
} 

    let app = new Main();

    app.pruebaFecha();
    app.pruebaTiempo();