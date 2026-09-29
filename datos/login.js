const params = new URLSearchParams(window.location.search);
const inden = params.get("id");
console.log(inden);
function crearTabla(filtro) {
  let lugar = document.getElementById("crearTabla");
  let boton = document.getElementById("crearBotones");
  let listaFinal = new Array();
  lugar.innerHTML = "";
  boton.innerHTML = "";
  let arrayInicio = new Array();
  arrayInicio.push(
    "imagen",
    "titulo",
    "autor/es",
    "descricion",
    "editorial",
    "precio",
    "cantidad",
    "original",
    "formato"
  );
  let tabla = "<table><thead><tr>";

  for (let i = 0; i < arrayInicio.length; i++) {
    tabla += `<th><h3>${arrayInicio[i]}</h3></th>`;
  }
  tabla += "</tr></thead>";
  tabla += "<tbody>";
  let numero = 1;
  filtro.forEach((element) => {
    tabla += `<tr><td><img src='./fotos/comic/${element.personaje}/${element.titulo}.jpg'></td>
                    <td>${element.titulo}</td>
                    <td>${element.autor}</td>
                    <td>${element.descripcion}</td>
                    <td>${element.editorial}</td>
                    <td>${element.precio}</td>
                    <td>${element.cantidad}</td>`;
    if (element.original == true) {
      tabla += `<td>si</td>`;
    } else {
      tabla += `<td>no</td>`;
    }
    if (element.formato == null) {
      element.formato = "fisico";
      tabla += `<td>fisico</td>`;
    } else {
      tabla += `<td>${element.formato}</td>`;
    }
    tabla += `</tr>`;
    numero++;

    listaFinal.push(element);
  });
  tabla += "</tbody>";
  lugar.innerHTML = tabla;
  boton.innerHTML =
    "<button id='btnOrdenar' type='button'>Ordenar</button>" +
    "<button id='btnFiltrar' type='button'>Filtrar</button>" +
    "<button id='btnResetear' type='button'>Resetar</button>";

  document.getElementById("btnOrdenar").addEventListener("click", () => {
    ordenar(listaFinal);
  });

  document.getElementById("btnFiltrar").addEventListener("click", () => {
    filtrar(listaFinal);
  });

  document.getElementById("btnResetear").addEventListener("click", () => {
    crearTabla(objetosEspera(inden));
  });
}

function objetosEspera(texto) {
  let array = new Array();
  comics.forEach((element) => {
    if (element.personaje === texto) {
      array.push(element);
    }
  });

  return array;
}
onload = () => {
  crearTabla(objetosEspera(inden));
  document.getElementById(
    "imagen"
  ).innerHTML = `<img src="./fotos/personaje/${inden}.jpg"></img>`;
  console.log(inden);
};
//hasta aqui se pone el html
function ordenar(objetos) {
  let copia = objetos;
  objetos.sort((a, b) => {
    if (a.titulo > b.titulo) {
      return 1;
    } else {
      return -1;
    }
  });
  crearTabla(copia);
}

function filtrar(objetos) {
  let listaFiltrada = new Array();
  let filtro = prompt(
    "Pon 1 para filtar por si es original." + "Pon 2 para filtar por formato"
  );

  if (filtro == 1) {
    filtro = prompt(
      "Pon 1 para mostrar los originales" +
      "Pon 2 para mostrar lo que no son originales"
    );
    while (filtro != "1" && filtro != "2") {
      filtro = prompt(
        "Error.Pon 1 para mostrar los originales" +
        "Pon 2 para mostrar lo que no son originales"
      );
    }
    switch (filtro) {
      case "1":
        listaFiltrada = objetos.filter((obj) => obj.original == true);
        break;

      case "2":
        listaFiltrada = objetos.filter((obj) => obj.original == false);
        break;
    }
  } else {
    if (filtro == 2) {
      filtro = prompt(
        "Eligue el formato:fisico,digital" + ",tapa blanda,tapa dura"
      );
      while (
        filtro != "fisico" &&
        filtro != "digital" &&
        filtro != "tapa blanda" &&
        filtro != "tapa dura"
      ) {
        filtro = prompt(
          "Error.Eligue el formato:fisico,digital" + ",tapa blanda,tapa dura"
        );
      }
      listaFiltrada = objetos.filter((obj) => obj.formato == filtro);
    }
  }
  crearTabla(listaFiltrada);
  console.log(listaFiltrada);
}

function llevarIngresar() {
  location.href = "./ingresar.html";
}
function llevarRegistrar() {
  location.href = "./registrar.html";
}

function llevarInicio() {
  location.href = "./inicio.html";
}

//eveuntos botones
