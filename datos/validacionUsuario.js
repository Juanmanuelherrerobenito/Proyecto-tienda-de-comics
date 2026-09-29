var listadoComic = new Array();
function mostrarNombre() {
    let nombre = "";
    let correo = sessionStorage.getItem("correo");
    listaUsuarios.forEach(element => {
        if (element.correo === correo) {
            nombre = element.nombre_usuario;
        }
    });

    document.getElementById("titulo").innerText = "Bienvenido " + nombre + "";
}


window.onload = mostrarNombre;
onload=()=>{
    mostrarNombre();
    crearTablaUsuarios();
}



function crearTablaUsuarios() {
    let array = new Array();
    listaUsuarios.forEach(element => {
        if (element.perfil != "admin") {
            array.push(element);
        }
    });
    let lugar = document.getElementById("crearTabla");
    let listaFinal = new Array();
    lugar.innerHTML = "";
    let arrayInicio = new Array();
    arrayInicio.push("Codigo Usuario", "Nombre Usuario", "Contraseña", "Correo",
        "Telefono", "Perfil", "Estado", "Numero Accesos Erroneos", "Fecha Ultimo Acceso","Cambiar Estado");
    let tabla = "<table><thead><tr>";

    for (let i = 0; i < arrayInicio.length; i++) {
        tabla += `<th><h3>${arrayInicio[i]}</h3></th>`;
    }
    tabla += "</tr></thead>";
    tabla += "<tbody>";
    array.forEach(element => {
            tabla += `<tr>
                    <td>${element.codigo_usuario}</td>
                    <td>${element.nombre_usuario}</td>
                    <td>${element.contraseña}</td>
                    <td>${element.correo}</td>
                    <td>${element.telefono}</td>
                    <td>${element.perfil}</td>
                    <td>${element.estado}</td>`;
            tabla += `<td>${element.numero_accesos_erroneos}</td>`;
            tabla += `<td>${element.fecha_ultimo_acceso}</td>`
            tabla += `<td><button onclick="cambiarEstado('${element.codigo_usuario}')">Cambiar Estado</button></td>`;
            tabla += `</tr>`;
        

        listaFinal.push(element);
    });
    tabla += "</tbody></table>";
    lugar.innerHTML = tabla;
}


function cambiarEstado(codigo) {
    let cambio;
    cambio=prompt("Dime a que perfil ocupa ahora el usuario "+codigo);
    while(cambio!="usuario" && cambio!="moderador" && cambio!="admin"){
        cambio=prompt("Error,Dime a que perfil ocupa ahora el usuario "+codigo);
    }
    listaUsuarios.forEach(element => {
        if (element.codigo_usuario === codigo) {
           element.cambiarEstado(cambio);
        }
    });
    crearTablaUsuarios();
}

function volver(){
    location.href="./inicio.html";
}