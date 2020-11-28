var aux = null;
var temp = null;
var base = document.querySelector("#base");
var minutos = document.querySelector("#minutos");
var baseInicio = document.querySelector("#baseInicio");
var horaInicio = document.querySelector("#horaInicio");
var horaFin = document.querySelector("#horaFin");
var btnAgregar = document.querySelector("#agregar");
var btnBuscar = document.querySelector("#buscar");
var btnEliminar = document.querySelector("#eliminar");
var btnImprimir = document.querySelector("#imprimir");
var btnInsertar = document.querySelector("#insertar");
var btnIniciar = document.querySelector("#iniciar");
var div = document.querySelector("#resultados");

class Ruta{
    constructor(){
        this.inicio = null;
    }
    agregarBase(base){
        if (this.inicio == null){
            this.inicio = base;
            base.siguiente = this.inicio;
        }
        else{
            aux = this.inicio;
            while (aux.siguiente != this.inicio){
                aux= aux.siguiente;
            }
            aux.siguiente = base;
            base.siguiente = this.inicio;
        }
    }
    buscarBase(base){
        if (this.inicio == null){
            return null;
        }
        else if(this.inicio.base == base){
            return this.inicio;
        }
        else{
            aux = this.inicio;
            while (aux.base != base && aux.siguiente != this.inicio){
                aux = aux.siguiente;
            }
            if(base != aux.base){
                return null;
            }
            else{
                return aux;
            }
        }
    }
    eliminarBase(base){
        if (this.inicio == null){
            return null;
        }
        else if(this.inicio.base == base){
            temp = this.inicio;
            aux = this.inicio;
            while(aux.siguiente != this.inicio);{
                aux = aux.siguiente;
            }
            aux.siguiente = this.inicio.siguiente;
            this.inicio = this.inicio.siguiente;
            temp.siguiente = null;
            return temp;
        }
        else{
            aux = this.inicio;
            while (aux.siguiente.base != base && aux.siguiente.base != this.inicio.base){
                aux = aux.siguiente;
            }
            if (aux.siguiente != this.inicio.base){
                temp = aux.siguiente;
                aux.siguiente = temp.siguiente;
                temp.siguiente = null;
                return temp;
            }
            else{
                return null;
            }
        }
    }
    imprimir(){
        crearTabla();
        let tabla = document.querySelector("#tabla");
        if (this.inicio == null){
            div.textContent="";
            div.insertAdjacentHTML("beforeend","No hay bases");
            return false;
        }
        aux = this.inicio.siguiente;
        let i = 1;
        while (aux != this.inicio){
            i++;
        }
        aux = this.inicio;
        while (i>0){
            let ren = tabla.insertRow(-1);
            let col = ren.insertCell(0);
            let col1 = ren.insertCell(1);
            col.textContent = aux.base;
            col1.textContent = aux.minutos;
            aux = aux.siguiente;
            i--;
        }
    }
}
class Bases{
    constructor(base,minutos){
        this.base = base;
        this.minutos = minutos;
        this.siguiente = null;
    }
}
let ruta = new Ruta();
btnAgregar.addEventListener("click",() =>{
    let nuevaBase = new Bases(base.value,minutos.value);
    ruta.agregarBase(nuevaBase);
    div.textContent="";
    div.insertAdjacentHTML("beforeend","<p>Base agregada.</p>");
});
btnBuscar.addEventListener("click",() =>{
});
btnEliminar.addEventListener("click",()=>{
    let resultado = ruta.eliminarBase(base.value);
    if (resultado == null){
        div.textContent="";
        div.insertAdjacentHTML("beforeend","El producto no existe: "+resultado);
        return false;
    }
    lista(resultado);
})
btnImprimir.addEventListener("click",()=>{
    ruta.imprimir();
})