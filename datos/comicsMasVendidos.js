
let data = getCookie("comicsEstrella");
    if (data) {
        window.comicsUsuarios = JSON.parse(data);
    } else {
        window.comicsUsuarios = [];
    }

function getCookie(nombre) {
    let name = nombre + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function verComicsMasVendidos() {
    const lista = [];
    const contador = {};
    let galleta = getCookie("comicsEstrella");
    if(galleta){
        galleta = JSON.parse(galleta);
    }else{
        galleta=[];
    }
    galleta.forEach(element => {
        const clave = `${element.titulo}|${element.personaje}`;
        contador[clave] = (contador[clave] || 0) + 1;
    });

    const ordenados = Object.entries(contador).
        sort((a, b) => b[1] - a[1]).slice(0, 3);


    ordenados.map(([clave]) => {
        const [titulo, personaje] = clave.split("|");
        lista.push({ titulo, personaje });
    });
    console.log(lista);
    return lista;
}

function rellenar(lista) {
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");

    uno.innerHTML = "";
    dos.innerHTML = "";
    tres.innerHTML = "";
    uno.innerHTML = `<img src='./fotos/comic/${lista[0].personaje}/${lista[0].titulo}.jpg' alt='no hay datos suficiente'></img>`;
    dos.innerHTML = `<img src='./fotos/comic/${lista[1].personaje}/${lista[1].titulo}.jpg' alt='no hay datos suficiente'></img>`;
    tres.innerHTML = `<img src='./fotos/comic/${lista[2].personaje}/${lista[2].titulo}.jpg' alt='no hay datos suficiente'></img>`;

}

window.addEventListener("load", () => {
    rellenar(verComicsMasVendidos());
});

function angrandar() {
    let numero;
    numero = parseInt(Math.random() * 3);
    let imagen = document.getElementsByTagName("img")[numero];
    let altura = parseFloat(imagen.style.height);
    let anchura = parseFloat(imagen.style.width);
    imagen.style.width = anchura * 2 + "px";
    imagen.style.height = altura * 2 + "px";
    return numero;
}

function reducir(numero) {
    let imagen = document.getElementsByTagName("img")[numero];
    let altura = parseFloat(imagen.style.height);
    let anchura = parseFloat(imagen.style.width);
    imagen.style.width = parseFloat(anchura / 2 + "px");
    imagen.style.height = parseFloat(altura / 2 + "px");
}

setInterval(() => {
    let n = angrandar();
    setTimeout(() => reducir(n), 500)
}, 30000)