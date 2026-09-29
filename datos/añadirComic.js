var xhr = new XMLHttpRequest();
function anadirComic() {
  let titulo = document.getElementById("titulo").value;
  let autor = document.getElementById("autor").value;
  let editorial = document.getElementById("editorial").value;
  let añoPublicacion = parseInt(
    document.getElementById("añoPublicacion").value
  );
  let personaje = document.getElementById("personaje").value;
  let precio = parseFloat(document.getElementById("precio").value);
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let descripcion = document.getElementById("descripcion").value;
  let original = document.getElementById("original").checked;
  let formato = document.getElementById("formato").value;
  if (
    titulo.trim() === "" ||
    autor.trim() === "" ||
    editorial.trim() === "" ||
    isNaN(añoPublicacion) ||
    personaje.trim() === "" ||
    isNaN(precio) ||
    isNaN(cantidad) ||
    descripcion.trim() === "" ||
    formato.trim() === ""
  ) {
    alert("uno o mas elementos estan vacios")
    window.location.href = "./añadirComic.html";
  }
  if (!verificarRepeticion(titulo)) {
    autor = autor.split(",").map((a) => a.trim());
    let comic = new comic(
      titulo,
      autor,
      editorial,
      añoPublicacion,
      personaje,
      precio,
      cantidad,
      descripcion,
      original,
      formato
    );
    if (formato == "fisico") {
      comic.aplicarDescuento(10);
    }
    comic.esClasico();
    window.comics.push(comic);
    alert("El comic " + comic.mostrarInfo() + " ha sido añadido");
    location.href = "./inicio.html";
  } else {
    comics.forEach((element) => {
      if (titulo === element.titulo) {
        element.cantidad = element.cantidad + cantidad;
      }
    });
    location.href = "./inicio.html";
  }
}

function verificarRepeticion(titulo) {
  return window.comics.some((c) => c.titulo == titulo);
}

function comicSinExistencias() {
  let lista = "";
  window.comics.forEach((element) => {
    if (element.cantidad == 0) {
      lista += element.titulo + " ";
    }
  });
  if (lista != "") {
    alert("Aviso: Los comics " + lista + " no tienen mas exstencias");
  } else {
    alert("Aviso: Todos los comic aun tienen existencias");
  }
}

function guardarCookieComics() {
  let json = JSON.stringify(window.comicsUsuarios);
  document.cookie = `comicsEstrella=${encodeURIComponent(
    json
  )}; path=/; max-age=86400`;
}

window.addEventListener("load", () => {
  guardarCookieComics();
});

setTimeout(comicSinExistencias, 30000);
