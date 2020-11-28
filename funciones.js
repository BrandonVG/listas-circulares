function crearTabla(){
    div.textContent="";
    div.insertAdjacentHTML("beforeend",`<table id="t1" style="text-align:center">
    <thead>
    <th>Base</th>
    <th>Minutos</th>
    <thead>
    <tbody id="tabla" style="text-align:center"></tbody>`);
}
function validarAgregar(){
    if (base.value == "" || minutos.value == ""){
        div.textContent="";
        div.insertAdjacentHTML("beforeend","<p>Algún campo esta vacío.</p>");
        return false;
    }
    else{
        return 1;
    }
}
function validarRuta(){
    if (baseInicio.value == "" || horaInicio.value == "" || horaFin.value == "" ){
        div.textContent="";
        div.insertAdjacentHTML("beforeend","<p>Algún campo esta vacío.</p>");
        return false;
    }
    else{
        return 1;
    }
}
function lista(base){
    let atributos =["base","minutos"];
    let labels = ["Base","Minutos"];
    div.textContent="";
    div.insertAdjacentHTML("beforeend","<p>Base eliminada.</p>");
    div.insertAdjacentHTML("beforeend","<ul id='lista'></ul>");
    let lista = document.querySelector("#lista");
    for(let i = 0; i<2; i++){
        let item = document.createElement("li");
        item.textContent=labels[i]+": "+base[atributos[i]];
        lista.appendChild(item);
    }
}