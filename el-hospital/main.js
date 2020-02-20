import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js";

class Main {
    pruebaFecha () {
        let fecha = new Fecha(15,2,2021);
        console.log(fecha.getAños());
        console.log(fecha.getMeses());
        console.log(fecha.getSemanas());
        console.log(fecha.getDias());
        console.log(fecha.getFecha());
        console.log(fecha.getDiaFecha());
    }

    pruebaTiempo(){
        let hora = new Tiempo(12, 24, "pm");
        console.log(hora.getFormato12());
        console.log(hora.getFormato24());
    }

    pruebaNombre(){
        let nombre = new Nombre("Ana", "Landín", "López");
        console.log(nombre.getNombreCompleto());
        console.log(nombre.getApellidoNombre());
        console.log(nombre.getIniciales());
    }
} 

    let app = new Main();

    app.pruebaFecha();
    app.pruebaTiempo();
    app.pruebaNombre();