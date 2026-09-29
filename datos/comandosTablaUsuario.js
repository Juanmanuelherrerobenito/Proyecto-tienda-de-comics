function mostrarNombre() {
  let nombre = "";
  let correo = sessionStorage.getItem("correo");
  window.listaUsuarios.forEach((element) => {
    if (element.correo === correo) {
      nombre = element.nombre_usuario;
    }
  });

  document.getElementById("titulo").innerText = "Bienvenido " + nombre + "";
}
onload = () => {
  let data = getCookie("comicsUsuarios");
  if (data) {
    console.log(data);
    window.comicsUsuarios = JSON.parse(data);
  } else {
    window.comicsUsuarios = [];
  }

  mostrarNombre();
  llamar("n");
  document.getElementById("boton").addEventListener("click", resetear);
};

function getCookie(nombre) {
  let name = nombre + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      console.log(name.length, c.length);
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function llamar(fav) {
  let total = 0.0;
  let array = window.comicsUsuarios;
  let lugar = document.getElementById("crearTabla");
  lugar.innerHTML = "";
  let columnas = ["titulo", "favorito", "precio"];
  let tabla = "<table><thead><tr>";
  columnas.forEach((col) => {
    tabla += `<th><h3>${col}</h3></th>`;
  });
  tabla += "</tr></thead><tbody>";
  array.forEach((element) => {
    if (element.favorito === false) element.favorito = "no";
    if (element.favorito === true) element.favorito = "si";
    if (element.favorito != fav) {
      tabla += `<tr><td>${element.titulo}</td>1
                    <td>${element.favorito}</td>
                    <td>${parseFloat(element.precio)}</td>`;
      if (element.descuento == "si") {
        element.precio = element.precio * 0.9;
      }
      tabla += `<td><button onclick="cambiarFavorito('${element.titulo}')">Agragar/Quitar favorito</button></td>`;
      total = total + element.precio;
      tabla += `</tr>`;
    }
  });
  tabla += "</tbody></table>";
  lugar.innerHTML = tabla;
  calTotal(total);
}

function filtrar() {
  llamar("no");
}

function volver() {
  location.href = "./inicio.html";
}

function calTotal(total) {
  let lugar = document.getElementById("total");
  lugar.innerHTML = "";
  lugar.innerHTML = "El total asiende a " + total + "€";
}

function cambiarFavorito(titulo) {
  window.comicsUsuarios.forEach((element) => {
    if (element.titulo == titulo) {
      if (element.favorito=="si") {
        element.favorito = "no";
        alert("Quitado de favoritos");
      } else {
        element.favorito = "si";
        alert("Añadido a favoritos");
      }
    }
  });
  llamar("n");
}

function resetear() {
  llamar("n");
}
