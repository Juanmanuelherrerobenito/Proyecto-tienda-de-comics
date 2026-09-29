// Si el arreglo no existe, se inicializa vacío
window.comicsUsuarios = window.comicsUsuarios || [];

// Definición de la clase ComicUsuario
class ComicUsuario {
  constructor(nombre, titulo, favorito, precio, personaje) {
    this.nombre = nombre;
    this.titulo = titulo;
    this.favorito = favorito;
    this.precio = precio;
    this.personaje = personaje;           

  }

  mostrarInfo() {
    return this.nombre+" "+this.titulo;
  }

  aplicarDescuento(numero) {
    if(numero>3){
      this.precio=(this.precio*30)/100;
    }
  }

  ponerQuitarFavorito() {
    if(this.favorito==true){
      this.favorito=false;
    }else{
      this.favorito=true;
    }
  }

}


window.comicsUsuarios = window.comicsUsuarios.map(c => new ComicUsuario(
  c.nombre,
  c.titulo,
  c.favorito,
  c.precio,
  c.personaje,
));
