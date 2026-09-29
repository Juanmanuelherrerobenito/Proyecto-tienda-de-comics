var listadoComic = new Array();

function mostrarNombre() {
  let nombre = "";
  let correo = sessionStorage.getItem("correo");
  listaUsuarios.forEach((element) => {
    if (element.correo === correo) {
      nombre = element.nombre_usuario;
    }
  });
  document.getElementById("titulo").innerText = "Bienvenido " + nombre;
}

window.onload = mostrarNombre;

function llamar() {
  let editorial = document.getElementById("editorial").value;
  let precio = parseFloat(document.getElementById("precio").value);

  let original = document.getElementById("original").value;
  let formato = document.getElementById("formato").value;

  crearTablaFiltrar(editorial, precio, original, formato);
}

function crearTablaFiltrar(editorial, precio, original, formato) {
  let array = comics.filter((c) => c.editorial === editorial);

  let lugar = document.getElementById("crearTabla");
  lugar.innerHTML = "";

  let columnas = [
    "imagen",
    "titulo",
    "autor/es",
    "descripcion",
    "editorial",
    "precio",
    "cantidad",
    "original",
    "formato",
    "agregar/quitar",
  ];

  let tabla = "<table><thead><tr>";
  columnas.forEach((col) => (tabla += `<th><h3>${col}</h3></th>`));
  tabla += "</tr></thead><tbody>";

  array.forEach((element) => {
    if (element.formato == null) element.formato = "fisico";
    if (element.original == false) element.original = "no";
    if (element.original == true) element.original = "si";

    if (
      element.original === original &&
      element.precio <= precio &&
      element.formato === formato
    ) {
      tabla += `<tr>
                <td><img src='./fotos/comic/${element.personaje}/${
        element.titulo
      }.jpg' alt='${element.titulo}'></td>
                <td>${element.titulo}</td>
                <td>${element.autor}</td>
                <td>${element.descripcion}</td>
                <td>${element.editorial}</td>
                <td>${element.precio}</td>
                <td>${element.cantidad}</td>
                <td>${element.original}</td>
                <td>${element.formato}</td>
                <td>
                    <button onclick="añadirColecion(
                        decodeURIComponent('${encodeURIComponent(
                          element.titulo
                        )}'),
                        decodeURIComponent('${encodeURIComponent(
                          element.personaje
                        )}'),
                        decodeURIComponent('${encodeURIComponent(
                          element.editorial
                        )}'),
                        ${element.precio}
                    )">Añadir/Quitar</button>
                </td>
            </tr>`;
    }
  });

  tabla += "</tbody></table>";
  lugar.innerHTML = tabla;
}

function guardarCookieComics() {
  let json = JSON.stringify(window.comicsUsuarios);
  document.cookie = `comicsUsuarios=${encodeURIComponent(
    json
  )}; path=/; max-age=86400`; // 1 día
}

function añadirColecion(titulo, personaje, editorial, precio) {
  let correo = sessionStorage.getItem("correo");
  let nombre = "";
  let desc = "no";

  listaUsuarios.forEach((element) => {
    if (element.correo === correo) {
      nombre = element.nombre_usuario;
    }
  });

  if (editorial === "Archie Comics") {
    desc = "si";
  }

  if (!window.comicsUsuarios) window.comicsUsuarios = [];

  let registro = {
    nombre: nombre,
    titulo: titulo,
    favorito: false,
    descuento: desc,
    precio: parseFloat(precio),
    personaje: personaje,
  };

  let existe = window.comicsUsuarios.some(
    (u) => u.nombre === nombre && u.titulo === titulo
  );

  if (existe) {
    window.comicsUsuarios = window.comicsUsuarios.filter(
      (u) => !(u.nombre === nombre && u.titulo === titulo)
    );
    alert("Cómic quitado");
  } else {
    window.comicsUsuarios.push(registro);
    alert("Cómic agregado");
  }
}

function verificar() {
  comicsUsuarios.forEach((element) => {
    comics.forEach((c) => {
      if (c.titulo === element.titulo && c.cantidad > 0) {
        c.cantidad--;
      }
    });
  });
  guardarCookieComics();
  location.href = "./verTablaUsuario.html";
}
