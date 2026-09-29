import "./carrusel.js";
window.onload=()=>{
    const fotos=ordenarMasVendidos();
    document.getElementById("carrusel").
    setAttribute("fotos", fotos);
}

function ordenarMasVendidos(){
    let array = [...window.comics];
    array.sort((a,b)=>b.cantidad - a.cantidad);

    return array().slice(0,3).
    map(c => `./fotos/comic/${c.personaje}_${c.titulo}.jpg`)
    .join(";");
}

