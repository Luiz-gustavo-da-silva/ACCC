function onDelete(){
    let confirmation = document.getElementById("confirmation");
    if(!confirmation.classList.contains("modal-open")){
        confirmation.classList.add("modal-open");
    }
}
function onCancel(){
    let confirmation =document.getElementById("confirmation");
    confirmation.classList.remove("modal-open");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("confirmation").addEventListener("click", onCancel);
    document.querySelector(".modal").addEventListener("click", (e) => e.stopPropagation());
});

function abrirLocalizacao(){
    let mapas = document.getElementById("mapas");
    if(!mapas.classList.contains("modal-open")){
        mapas.classList.add("modal-open");
    }
}
function fechar(){
    let mapas =document.getElementById("mapas");
    mapas.classList.remove("modal-open");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("mapas").addEventListener("click", fechar);
    document.querySelector(".modal-mapas").addEventListener("click", (e) => e.stopPropagation());
});

