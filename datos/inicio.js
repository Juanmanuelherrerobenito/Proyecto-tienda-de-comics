
function carruselNombres() {
  let personajes = new Array();
  let temporal = new Array();
  let numero = "";
  let separador="";
  comics.forEach(element => {
    if (element.personaje != separador) {
      personajes.push(element.personaje);
      separador=element.personaje;
    }
  });
  numero = parseInt((Math.random() * personajes.length));
  temporal=darArrays(personajes[numero]);
  console.log(temporal);
  return imagenDia(temporal,personajes[numero]);
}

function darArrays(texto) {
  let array = new Array();
  comics.forEach(element => {
    if (element.personaje === texto) {
      array.push(element);
    }
  });
  return array;
}

function imagenDia(array,nombre) {
  let comic=new Array();
  let numero;
  array.forEach(element=>{
    comic.push(element.titulo);
  });
  numero=parseInt(Math.random()*4);
  console.log("./fotos/comic/"+nombre+"/"+comic[numero]+".jpg");
  return "./fotos/comic/"+nombre+"/"+comic[numero]+".jpg";
}

function cargarCarrusel() {
  document.getElementById("img1").src = carruselNombres();
  document.getElementById("img2").src = carruselNombres();
  document.getElementById("img3").src = carruselNombres();
}



//evento con imagenes