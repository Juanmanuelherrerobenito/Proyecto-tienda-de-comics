window.comics = window.comics|| [];

class Comic {
  constructor(titulo, autor, editorial, añoPublicacion, personaje, precio, cantidad, descripcion, original, formato) {
    this.titulo = titulo;
    this.autor = autor; // puede ser un arreglo de autores
    this.editorial = editorial;
    this.añoPublicacion = añoPublicacion;
    this.personaje = personaje;
    this.precio = precio;
    this.cantidad = cantidad;
    this.descripcion = descripcion;
    this.original = original;
    this.formato = formato;
  }

  // Método 1: Mostrar información del cómic
  mostrarInfo() {
    return `${this.titulo}" (${this.añoPublicacion})  
    Autor(es): ${this.autor.join(", ")}  
    Editorial: ${this.editorial}  
    Personaje: ${this.personaje}  
    Precio: $${this.precio.toFixed(2)}  
    Formato: ${this.formato}  
    Disponible: ${this.cantidad} unidades`;
  }

  // Método 2: Aplicar un descuento al precio
  aplicarDescuento(porcentaje) {
    if (porcentaje > 0 && porcentaje <= 100) {
      const descuento = (this.precio * porcentaje) / 100;
      this.precio -= descuento;
    }
  }

  // Método 3: Determinar si el cómic es "clásico"
  esClasico() {
    const añoActual = new Date().getFullYear();
    if (añoActual - this.añoPublicacion >= 20){
      this.precio=this.precio*1.5;
    }
  }
}


window.comics = [
  // Avengers
  {
    titulo: "Avengers La Era de Ultrón",
    autor: ["Stan Lee", "Jack Kirby"],
    editorial: "Marvel Comics",
    añoPublicacion: 2015,
    personaje: "Avengers",
    precio: 15.99,
    cantidad: 10,
    descripcion: "La épica batalla de los Avengers contra Ultrón.",
    original: true,
    formato: "digital"
  },
  {
    titulo: "Avengers Infinity War",
    autor: ["Jim Starlin", "George Pérez"],
    editorial: "Marvel Comics",
    añoPublicacion: 2018,
    personaje: "Avengers",
    precio: 18.50,
    cantidad: 8,
    descripcion: "Los Avengers enfrentan a Thanos en una guerra cósmica.",
    original: true,
    formato: "físico"
  },
  {
    titulo: "Avengers Guerra Secreta",
    autor: "Jim Shooter",
    editorial: "Marvel Comics",
    añoPublicacion: 1984,
    personaje: "Avengers",
    precio: 12.00,
    cantidad: 5,
    descripcion: "Un evento crossover que cambió el universo Marvel.",
    original: false
  },
  {
    titulo: "Avengers La Caída",
    autor: ["Brian Michael Bendis", "David Finch"],
    editorial: "Marvel Comics",
    añoPublicacion: 2009,
    personaje: "Avengers",
    precio: 20.00,
    cantidad: 6,
    descripcion: "La caída y renacimiento de los Avengers.",
    original: true,
    formato: "digital"
  },

  // Captain America
  {
    titulo: "Captain America El Soldado del Invierno",
    autor: "Ed Brubaker",
    editorial: "Marvel Comics",
    añoPublicacion: 2005,
    personaje: "Captain America",
    precio: 14.99,
    cantidad: 7,
    descripcion: "El regreso del Soldado del Invierno para enfrentar a Steve Rogers.",
    original: true,
    formato: "físico"
  },
  {
    titulo: "Captain America Guerra Civil",
    autor: ["Mark Millar", "Steve McNiven"],
    editorial: "Marvel Comics",
    añoPublicacion: 2006,
    personaje: "Captain America",
    precio: 19.99,
    cantidad: 9,
    descripcion: "El enfrentamiento entre héroes divididos.",
    original: true
  },
  {
    titulo: "Captain America El Primer Vengador",
    autor: "Joe Simon",
    editorial: "Timely Comics",
    añoPublicacion: 1941,
    personaje: "Captain America",
    precio: 30.00,
    cantidad: 3,
    descripcion: "El inicio del superhéroe patriótico.",
    original: false,
    formato: "físico"
  },
  {
    titulo: "Captain America Renacimiento",
    autor: ["Ed Brubaker", "Steve Epting"],
    editorial: "Marvel Comics",
    añoPublicacion: 2009,
    personaje: "Captain America",
    precio: 22.50,
    cantidad: 4,
    descripcion: "El regreso de Steve Rogers como Captain America.",
    original: true,
    formato: "digital"
  },

  // Doctor Strange
  {
    titulo: "Doctor Strange La Dimensión Oscura",
    autor: "Steve Ditko",
    editorial: "Marvel Comics",
    añoPublicacion: 1963,
    personaje: "Doctor Strange",
    precio: 16.00,
    cantidad: 5,
    descripcion: "Las primeras aventuras en el mundo místico.",
    original: true
  },
  {
    titulo: "Doctor Strange El Hechicero Supremo",
    autor: ["Stan Lee", "Steve Ditko"],
    editorial: "Marvel Comics",
    añoPublicacion: 1964,
    personaje: "Doctor Strange",
    precio: 17.99,
    cantidad: 6,
    descripcion: "El ascenso de Stephen Strange como hechicero supremo.",
    original: true,
    formato: "digital"
  },
  {
    titulo: "Doctor Strange La Guerra de los Reinos",
    autor: "Donny Cates",
    editorial: "Marvel Comics",
    añoPublicacion: 2019,
    personaje: "Doctor Strange",
    precio: 21.00,
    cantidad: 8,
    descripcion: "Una batalla cósmica por los reinos mágicos.",
    original: false,
    formato: "físico"
  },
  {
    titulo: "Doctor Strange La Orden Negra",
    autor: "Jason Aaron",
    editorial: "Marvel Comics",
    añoPublicacion: 2021,
    personaje: "Doctor Strange",
    precio: 23.50,
    cantidad: 7,
    descripcion: "Enfrentando a la Orden Negra en el mundo místico.",
    original: true
  },

  // Fantastic Four
  {
    titulo: "Fantastic Four Origen",
    autor: ["Stan Lee", "Jack Kirby"],
    editorial: "Marvel Comics",
    añoPublicacion: 1961,
    personaje: "Fantastic Four",
    precio: 18.00,
    cantidad: 10,
    descripcion: "La creación de los Cuatro Fantásticos.",
    original: true,
    formato: "digital"
  },
  {
    titulo: "Fantastic Four La Saga de Galactus",
    autor: ["Stan Lee", "Jack Kirby"],
    editorial: "Marvel Comics",
    añoPublicacion: 1966,
    personaje: "Fantastic Four",
    precio: 19.99,
    cantidad: 5,
    descripcion: "El enfrentamiento con Galactus y su heraldo.",
    original: false,
    formato: "físico"
  },
  {
    titulo: "Fantastic Four Invasión Skrull",
    autor: "Jonathan Hickman",
    editorial: "Marvel Comics",
    añoPublicacion: 2011,
    personaje: "Fantastic Four",
    precio: 22.00,
    cantidad: 7,
    descripcion: "La invasión de la raza Skrull a la Tierra.",
    original: true
  },
  {
    titulo: "Fantastic Four La Guerra de los Cuatro",
    autor: "Dan Slott",
    editorial: "Marvel Comics",
    añoPublicacion: 2015,
    personaje: "Fantastic Four",
    precio: 24.00,
    cantidad: 6,
    descripcion: "La batalla definitiva de los Cuatro Fantásticos.",
    original: true,
    formato: "digital"
  },
  //Hulk
  {
    titulo: "El Increíble Hulk Futuro Imperfecto",
    autor: ["Peter David", "George Pérez"],
    editorial: "Marvel Comics",
    añoPublicacion: 1992,
    personaje: "Hulk",
    precio: 17.99,
    cantidad: 3,
    descripcion: "Hulk se enfrenta a su yo del futuro, el tirano Maestro.",
    original: false,
    formato: "físico"
  },
  {
    titulo: "Planeta Hulk",
    autor: ["Greg Pak", "Carlo Pagulayan"],
    editorial: "Marvel Comics",
    añoPublicacion: 2006,
    personaje: "Hulk",
    precio: 24.00,
    cantidad: 7,
    descripcion: "Hulk es exiliado al planeta Sakaar, donde se convierte en un gladiador y luego en rey.",
    original: false,
    formato: "físico"
  },
  {
    titulo: "Guerra mundial Hulk",
    autor: ["Greg Pak", "John Romita Jr."],
    editorial: "Marvel Comics",
    añoPublicacion: 2007,
    personaje: "Hulk",
    precio: 22.50,
    cantidad: 4,
    descripcion: "Hulk regresa a la Tierra para vengarse de los héroes que lo exiliaron.",
    original: false,
    formato: "físico"
  },
  {
    titulo: "Hulk Gris",
    autor: ["Jeph Loeb", "Tim Sale"],
    editorial: "Marvel Comics",
    añoPublicacion: 2003,
    personaje: "Hulk",
    precio: 18.75,
    cantidad: 6,
    descripcion: "Explora los primeros días de Bruce Banner como Hulk, con un tono más emocional.",
    original: false,
    formato: "físico"
  },
  // Iron Man
  {
    titulo: "Iron Man Extremis",
    autor: "Warren Ellis",
    editorial: "Marvel Comics",
    añoPublicacion: 2005,
    personaje: "Iron Man",
    precio: 16.99,
    cantidad: 8,
    descripcion: "Tony Stark enfrenta una nueva amenaza biotecnológica.",
    original: true,
    formato: "digital"
  },
  {
    titulo: "Iron Man Demon in a Bottle",
    autor: ["David Michelinie", "Bob Layton"],
    editorial: "Marvel Comics",
    añoPublicacion: 1979,
    personaje: "Iron Man",
    precio: 14.50,
    cantidad: 5,
    descripcion: "La lucha de Tony Stark contra el alcoholismo.",
    original: false,
    formato: "físico"
  },
  {
    titulo: "Iron Man El Regreso de Iron Man",
    autor: "Kieron Gillen",
    editorial: "Marvel Comics",
    añoPublicacion: 2012,
    personaje: "Iron Man",
    precio: 18.00,
    cantidad: 7,
    descripcion: "Tony Stark vuelve con una nueva armadura y misión.",
    original: true
  },
  {
    titulo: "Iron Man La Guerra de las Armaduras",
    autor: "Matt Fraction",
    editorial: "Marvel Comics",
    añoPublicacion: 2009,
    personaje: "Iron Man",
    precio: 20.00,
    cantidad: 6,
    descripcion: "Conflicto entre diferentes versiones de Iron Man.",
    original: true,
    formato: "digital"
  },

  // Spider-Man
  {
    titulo: "Spider-Man La Última Cacería de Kraven",
    autor: "J.M. DeMatteis",
    editorial: "Marvel Comics",
    añoPublicacion: 1987,
    personaje: "Spider-Man",
    precio: 15.00,
    cantidad: 10,
    descripcion: "Kraven el Cazador persigue a Spider-Man en una batalla psicológica.",
    original: true,
    formato: "físico"
  },
  {
    titulo: "Spider-Man El Asombroso Spider-Man 1",
    autor: "Stan Lee",
    editorial: "Marvel Comics",
    añoPublicacion: 1963,
    personaje: "Spider-Man",
    precio: 25.00,
    cantidad: 3,
    descripcion: "El inicio de las aventuras de Peter Parker.",
    original: false,
    formato: "digital"
  },
  {
    titulo: "Spider-Man El Otro",
    autor: "J. Michael Straczynski",
    editorial: "Marvel Comics",
    añoPublicacion: 2005,
    personaje: "Spider-Man",
    precio: 17.50,
    cantidad: 6,
    descripcion: "Spider-Man enfrenta una nueva evolución de sus poderes.",
    original: true
  },
  {
    titulo: "Spider-Man Guerra de Goblins",
    autor: "Dan Slott",
    editorial: "Marvel Comics",
    añoPublicacion: 2010,
    personaje: "Spider-Man",
    precio: 19.00,
    cantidad: 7,
    descripcion: "Un enfrentamiento entre los Goblins y Spider-Man.",
    original: true,
    formato: "digital"
  },

  // Thor
  {
    titulo: "Thor Dios del Trueno",
    autor: "Jason Aaron",
    editorial: "Marvel Comics",
    añoPublicacion: 2012,
    personaje: "Thor",
    precio: 18.99,
    cantidad: 8,
    descripcion: "Thor enfrenta amenazas en los Nueve Reinos.",
    original: true,
    formato: "digital"
  },
  {
    titulo: "Thor Ragnarok",
    autor: "Walt Simonson",
    editorial: "Marvel Comics",
    añoPublicacion: 1985,
    personaje: "Thor",
    precio: 16.00,
    cantidad: 5,
    descripcion: "Thor debe salvar Asgard del Ragnarok.",
    original: false,
    formato: "físico"
  },
  {
    titulo: "Thor La Diosa del Trueno",
    autor: "Jason Aaron",
    editorial: "Marvel Comics",
    añoPublicacion: 2014,
    personaje: "Thor",
    precio: 20.00,
    cantidad: 7,
    descripcion: "Jane Foster toma el manto de Thor.",
    original: true
  },
  {
    titulo: "Thor El Final de los Días",
    autor: "Dan Jurgens",
    editorial: "Marvel Comics",
    añoPublicacion: 2017,
    personaje: "Thor",
    precio: 21.50,
    cantidad: 6,
    descripcion: "Thor enfrenta su destino final.",
    original: true,
    formato: "digital"
  },

  // X-Men
  {
    titulo: "X-Men La Saga de Fénix Oscura",
    autor: "Chris Claremont",
    editorial: "Marvel Comics",
    añoPublicacion: 1980,
    personaje: "X-Men",
    precio: 22.00,
    cantidad: 9,
    descripcion: "Jean Grey se transforma en Fénix Oscura.",
    original: true,
    formato: "físico"
  },
  {
    titulo: "X-Men Días del Futuro Pasado",
    autor: "Chris Claremont",
    editorial: "Marvel Comics",
    añoPublicacion: 1981,
    personaje: "X-Men",
    precio: 20.00,
    cantidad: 7,
    descripcion: "Los X-Men viajan al pasado para cambiar el futuro.",
    original: true
  },
  {
    titulo: "X-Men Apocalipsis",
    autor: "Greg Pak",
    editorial: "Marvel Comics",
    añoPublicacion: 2009,
    personaje: "X-Men",
    precio: 19.50,
    cantidad: 6,
    descripcion: "La batalla contra Apocalipsis.",
    original: false,
    formato: "digital"
  },
  {
    titulo: "X-Men God Loves, Man Kills",
    autor: "Chris Claremont",
    editorial: "Marvel Comics",
    añoPublicacion: 1982,
    personaje: "X-Men",
    precio: 18.00,
    cantidad: 5,
    descripcion: "Un relato oscuro sobre la intolerancia y la lucha mutante.",
    original: true
  },
  // Wolverine
  {
    titulo: "Wolverine Origen",
    autor: ["Paul Jenkins", "Andy Kubert"],
    editorial: "Marvel Comics",
    añoPublicacion: 2001,
    personaje: "Wolverine",
    precio: 17.99,
    cantidad: 6,
    descripcion: "Los orígenes ocultos de Logan salen a la luz.",
    original: true,
    formato: "digital"
  },
  {
    titulo: "Wolverine Enemigo del Estado",
    autor: "Mark Millar",
    editorial: "Marvel Comics",
    añoPublicacion: 2005,
    personaje: "Wolverine",
    precio: 18.50,
    cantidad: 5,
    descripcion: "Wolverine es controlado por Hydra y SHIELD debe detenerlo.",
    original: false,
    formato: "físico"
  },
  {
    titulo: "Wolverine Old Man Logan",
    autor: "Mark Millar",
    editorial: "Marvel Comics",
    añoPublicacion: 2008,
    personaje: "Wolverine",
    precio: 20.00,
    cantidad: 8,
    descripcion: "En un futuro postapocalíptico, Logan se enfrenta a su pasado.",
    original: true
  },
  {
    titulo: "Wolverine Logan",
    autor: "Brian K. Vaughan",
    editorial: "Marvel Comics",
    añoPublicacion: 2008,
    personaje: "Wolverine",
    precio: 16.00,
    cantidad: 4,
    descripcion: "Una introspectiva historia durante la Segunda Guerra Mundial.",
    original: true,
    formato: "digital"
  },

  // Aquaman
  {
    titulo: "Aquaman El Trono de Atlantis",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2012,
    personaje: "Aquaman",
    precio: 19.99,
    cantidad: 7,
    descripcion: "Aquaman debe elegir entre Atlantis y la superficie.",
    original: true,
    formato: "físico"
  },
  {
    titulo: "Aquaman Las Profundidades",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2011,
    personaje: "Aquaman",
    precio: 17.50,
    cantidad: 6,
    descripcion: "El regreso de Aquaman y su lucha por reconocimiento.",
    original: true
  },
  {
    titulo: "Aquaman Guerra Civil Atlante",
    autor: "Dan Abnett",
    editorial: "DC Comics",
    añoPublicacion: 2017,
    personaje: "Aquaman",
    precio: 18.99,
    cantidad: 5,
    descripcion: "Un conflicto interno amenaza con destruir Atlantis.",
    original: false,
    formato: "digital"
  },
  {
    titulo: "Aquaman La Fosa",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2011,
    personaje: "Aquaman",
    precio: 16.00,
    cantidad: 4,
    descripcion: "Extrañas criaturas emergen del océano para atacar la tierra.",
    original: true
  },

  // Batman
  {
    titulo: "Batman Año Uno",
    autor: "Frank Miller",
    editorial: "DC Comics",
    añoPublicacion: 1987,
    personaje: "Batman",
    precio: 14.99,
    cantidad: 10,
    descripcion: "Los inicios de Bruce Wayne como vigilante.",
    original: true,
    formato: "físico"
  },
  {
    titulo: "Batman El Regreso del Caballero Oscuro",
    autor: "Frank Miller",
    editorial: "DC Comics",
    añoPublicacion: 1986,
    personaje: "Batman",
    precio: 19.99,
    cantidad: 7,
    descripcion: "Un Bruce Wayne envejecido vuelve a luchar contra el crimen.",
    original: true
  },
  {
    titulo: "Batman Hush",
    autor: ["Jeph Loeb", "Jim Lee"],
    editorial: "DC Comics",
    añoPublicacion: 2002,
    personaje: "Batman",
    precio: 22.00,
    cantidad: 5,
    descripcion: "Batman enfrenta a un nuevo enemigo misterioso.",
    original: false,
    formato: "digital"
  },
  {
    titulo: "Batman La Corte de los Búhos",
    autor: "Scott Snyder",
    editorial: "DC Comics",
    añoPublicacion: 2011,
    personaje: "Batman",
    precio: 20.00,
    cantidad: 6,
    descripcion: "Descubre una sociedad secreta que ha controlado Gotham por siglos.",
    original: true,
    formato: "físico"
  },

  // Flash
  {
    titulo: "Flashpoint",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2011,
    personaje: "Flash",
    precio: 18.00,
    cantidad: 8,
    descripcion: "Flash cambia el curso del tiempo con consecuencias catastróficas.",
    original: true,
    formato: "digital"
  },
  {
    titulo: "Flash Renacimiento",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2009,
    personaje: "Flash",
    precio: 16.50,
    cantidad: 6,
    descripcion: "Barry Allen regresa tras años de ausencia.",
    original: true
  },
  {
    titulo: "Flash El Hombre Más Rápido del Mundo",
    autor: "Mark Waid",
    editorial: "DC Comics",
    añoPublicacion: 1993,
    personaje: "Flash",
    precio: 14.99,
    cantidad: 4,
    descripcion: "Una historia clásica de velocidad y heroísmo.",
    original: false,
    formato: "físico"
  },
  {
    titulo: "Flash Guerra de Guerrillas",
    autor: "Francis Manapul",
    editorial: "DC Comics",
    añoPublicacion: 2013,
    personaje: "Flash",
    precio: 17.00,
    cantidad: 5,
    descripcion: "Flash se enfrenta a una revuelta en Ciudad Central.",
    original: true,
    formato: "digital"
  },
  // Green Arrow
  {
    titulo: "Green Arrow Año Uno",
    autor: "Andy Diggle",
    editorial: "DC Comics",
    añoPublicacion: 2007,
    personaje: "Green Arrow",
    precio: 15.99,
    cantidad: 6,
    descripcion: "El origen moderno de Oliver Queen como vigilante.",
    original: true,
    formato: "físico"
  },
  {
    titulo: "Green Arrow El Arquero Esmeralda",
    autor: "Dennis O'Neil",
    editorial: "DC Comics",
    añoPublicacion: 1987,
    personaje: "Green Arrow",
    precio: 17.50,
    cantidad: 5,
    descripcion: "Green Arrow enfrenta sus decisiones morales en una ciudad corrupta.",
    original: false
  },
  {
    titulo: "Green Arrow Renacimiento",
    autor: "Benjamin Percy",
    editorial: "DC Comics",
    añoPublicacion: 2016,
    personaje: "Green Arrow",
    precio: 18.00,
    cantidad: 8,
    descripcion: "Una nueva etapa para el arquero esmeralda tras el reinicio del universo DC.",
    original: true,
    formato: "digital"
  },
  {
    titulo: "Green Arrow La Muerte y vida of Oliver Queen",
    autor: "Judd Winick",
    editorial: "DC Comics",
    añoPublicacion: 2003,
    personaje: "Green Arrow",
    precio: 16.99,
    cantidad: 4,
    descripcion: "Oliver Queen regresa de la muerte y redefine su misión.",
    original: true
  },

  // Green Lantern
  {
    titulo: "Green Lantern Renacimiento",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2004,
    personaje: "Green Lantern",
    precio: 19.99,
    cantidad: 7,
    descripcion: "Hal Jordan regresa para recuperar su lugar como Linterna Verde.",
    original: true,
    formato: "digital"
  },
  {
    titulo: "Green Lantern La Guerra de los Sinestro Corps",
    autor: ["Geoff Johns", "Dave Gibbons"],
    editorial: "DC Comics",
    añoPublicacion: 2007,
    personaje: "Green Lantern",
    precio: 22.00,
    cantidad: 6,
    descripcion: "Una guerra entre las fuerzas del miedo y la voluntad.",
    original: true
  },
  {
    titulo: "Green Lantern Origen Secreto",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2008,
    personaje: "Green Lantern",
    precio: 17.50,
    cantidad: 5,
    descripcion: "La historia definitiva de cómo Hal Jordan se convirtió en Linterna Verde.",
    original: false,
    formato: "físico"
  },
  {
    titulo: "Green Lantern Blackest Night",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2009,
    personaje: "Green Lantern",
    precio: 24.00,
    cantidad: 9,
    descripcion: "Los muertos regresan con poderosos anillos negros. Una crisis total.",
    original: true,
    formato: "digital"
  },

  // Justice League
  {
    titulo: "Justice League Origen",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2011,
    personaje: "Justice League",
    precio: 20.00,
    cantidad: 10,
    descripcion: "Los héroes más grandes del mundo se unen por primera vez.",
    original: true,
    formato: "físico"
  },
  {
    titulo: "Justice League La Guerra de Darkseid",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2015,
    personaje: "Justice League",
    precio: 22.00,
    cantidad: 7,
    descripcion: "La Liga enfrenta a Darkseid y al Anti-Monitor en una guerra cósmica.",
    original: true
  },
  {
    titulo: "Justice League Torre de Babel",
    autor: "Mark Waid",
    editorial: "DC Comics",
    añoPublicacion: 2000,
    personaje: "Justice League",
    precio: 18.99,
    cantidad: 5,
    descripcion: "Batman guarda secretos que podrían destruir a la Liga.",
    original: false,
    formato: "digital"
  },
  {
    titulo: "Justice League La Liga de la Justicia Internacional",
    autor: "Keith Giffen",
    editorial: "DC Comics",
    añoPublicacion: 1987,
    personaje: "Justice League",
    precio: 16.50,
    cantidad: 4,
    descripcion: "Una versión más ligera y cómica de la famosa liga.",
    original: true
  },

  // Shazam
  {
    titulo: "Shazam! El Poder de la Esperanza",
    autor: "Paul Dini",
    editorial: "DC Comics",
    añoPublicacion: 2000,
    personaje: "Shazam",
    precio: 15.99,
    cantidad: 6,
    descripcion: "Billy Batson aprende sobre esperanza y heroísmo.",
    original: true,
    formato: "digital"
  },
  {
    titulo: "Shazam! Orígenes",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2013,
    personaje: "Shazam",
    precio: 19.00,
    cantidad: 5,
    descripcion: "La nueva versión moderna del origen de Shazam.",
    original: true,
    formato: "físico"
  },
  {
    titulo: "Shazam! La furia de los dioses",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2011,
    personaje: "Shazam",
    precio: 19.75,
    cantidad: 3,
    descripcion: "Shazam debe enfrentarse a dioses antiguos que amenazan con arrasar el planeta.",
    original: false
  },
  {
    titulo: "Shazam! La Maldición de Shazam",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2014,
    personaje: "Shazam",
    precio: 20.00,
    cantidad: 7,
    descripcion: "Billy Batson aprende a dominar sus poderes mágicos.",
    original: true,
    formato: "digital"
  },
  // Superman
  {
    titulo: "Superman Red Son",
    autor: "Mark Millar",
    editorial: "DC Comics",
    añoPublicacion: 2003,
    personaje: "Superman",
    precio: 15.99,
    cantidad: 10,
    descripcion: "Una historia alternativa donde Superman cae en la Unión Soviética.",
    original: true,
    formato: "tapa blanda"
  },
  {
    titulo: "Superman Birthright",
    autor: "Mark Waid",
    editorial: "DC Comics",
    añoPublicacion: 2004,
    personaje: "Superman",
    precio: 18.5,
    cantidad: 7,
    descripcion: "Nueva versión moderna del origen de Superman.",
    original: true
  },
  {
    titulo: "All-Star Superman",
    autor: ["Grant Morrison", "Frank Quitely"],
    editorial: "DC Comics",
    añoPublicacion: 2005,
    personaje: "Superman",
    precio: 22.0,
    cantidad: 5,
    descripcion: "Una historia definitiva y poética sobre Superman.",
    original: true,
    formato: "tapa dura"
  },
  {
    titulo: "Superman For Tomorrow",
    autor: "Brian Azzarello",
    editorial: "DC Comics",
    añoPublicacion: 2004,
    personaje: "Superman",
    precio: 20.0,
    cantidad: 8,
    descripcion: "Superman enfrenta la pérdida de un millón de personas.",
    original: false
  },
  // Teen Titans
  {
    titulo: "Teen Titans The Judas Contract",
    autor: ["Marv Wolfman", "George Pérez"],
    editorial: "DC Comics",
    añoPublicacion: 1984,
    personaje: "Teen Titans",
    precio: 17.5,
    cantidad: 6,
    descripcion: "Un traidor en los Titanes amenaza con destruir al equipo.",
    original: true
  },
  {
    titulo: "Teen Titans A Kid Game",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2003,
    personaje: "Teen Titans",
    precio: 14.99,
    cantidad: 9,
    descripcion: "La nueva generación de Titanes comienza su legado.",
    original: false
  },
  {
    titulo: "Teen Titans Beast Boys and Girls",
    autor: "Geoff Johns",
    editorial: "DC Comics",
    añoPublicacion: 2004,
    personaje: "Teen Titans",
    precio: 16.0,
    cantidad: 4,
    descripcion: "Garfield Logan enfrenta su pasado y su legado.",
    original: true
  },
  {
    titulo: "Teen Titans Future Is Now",
    autor: ["Geoff Johns", "Mike McKone"],
    editorial: "DC Comics",
    añoPublicacion: 2005,
    personaje: "Teen Titans",
    precio: 18.0,
    cantidad: 5,
    descripcion: "Los Titanes viajan al futuro y descubren su destino.",
    original: true
  },
  // Wonder Woman
  {
    titulo: "Wonder Woman The Hiketeia",
    autor: "Greg Rucka",
    editorial: "DC Comics",
    añoPublicacion: 2002,
    personaje: "Wonder Woman",
    precio: 13.5,
    cantidad: 7,
    descripcion: "Diana debe proteger a una mujer buscada por Batman.",
    original: true
  },
  {
    titulo: "Wonder Woman Year One",
    autor: "Greg Rucka",
    editorial: "DC Comics",
    añoPublicacion: 2016,
    personaje: "Wonder Woman",
    precio: 19.99,
    cantidad: 6,
    descripcion: "Nueva interpretación del origen de Wonder Woman.",
    original: true
  },
  {
    titulo: "Wonder Woman Warbringer",
    autor: "Leigh Bardugo",
    editorial: "DC Ink",
    añoPublicacion: 2017,
    personaje: "Wonder Woman",
    precio: 17.0,
    cantidad: 5,
    descripcion: "Una joven Diana salva a una chica y desata una guerra.",
    original: false
  },
  {
    titulo: "Wonder Woman Earth One Vol. 1",
    autor: "Grant Morrison",
    editorial: "DC Comics",
    añoPublicacion: 2016,
    personaje: "Wonder Woman",
    precio: 21.0,
    cantidad: 4,
    descripcion: "Una versión moderna y polémica del mito amazónico.",
    original: true,
    formato: "tapa dura"
  },
  // Invencible
  {
    titulo: "Invincible Vol. 1 Family Matters",
    autor: "Robert Kirkman",
    editorial: "Image Comics",
    añoPublicacion: 2003,
    personaje: "Invencible",
    precio: 12.99,
    cantidad: 10,
    descripcion: "Mark Grayson descubre que ser superhéroe no es fácil.",
    original: true
  },
  {
    titulo: "Invincible Vol. 2 Eight is Enough",
    autor: "Robert Kirkman",
    editorial: "Image Comics",
    añoPublicacion: 2004,
    personaje: "Invencible",
    precio: 13.99,
    cantidad: 8,
    descripcion: "Nuevas amenazas surgen mientras Mark crece como héroe.",
    original: true
  },
  {
    titulo: "Invincible Vol. 3 Perfect Strangers",
    autor: "Robert Kirkman",
    editorial: "Image Comics",
    añoPublicacion: 2004,
    personaje: "Invencible",
    precio: 14.99,
    cantidad: 6,
    descripcion: "Un secreto familiar cambia la vida de Invencible.",
    original: true
  },
  {
    titulo: "Invincible Vol. 4 Head of the Class",
    autor: "Robert Kirkman",
    editorial: "Image Comics",
    añoPublicacion: 2005,
    personaje: "Invencible",
    precio: 15.5,
    cantidad: 5,
    descripcion: "Invencible intenta equilibrar la escuela y el heroísmo.",
    original: true
  },
  // Spawn
  {
    titulo: "Spawn Vol. 1 Beginnings",
    autor: "Todd McFarlane",
    editorial: "Image Comics",
    añoPublicacion: 1992,
    personaje: "Spawn",
    precio: 14.99,
    cantidad: 10,
    descripcion: "Al Simmons renace del infierno como Spawn.",
    original: true
  },
  {
    titulo: "Spawn Vol. 2 Dark Discoveries",
    autor: "Todd McFarlane",
    editorial: "Image Comics",
    añoPublicacion: 1993,
    personaje: "Spawn",
    precio: 15.99,
    cantidad: 8,
    descripcion: "Spawn explora su identidad y poderes sobrenaturales.",
    original: true
  },
  {
    titulo: "Spawn Origins Collection Vol. 3",
    autor: "Todd McFarlane",
    editorial: "Image Comics",
    añoPublicacion: 1994,
    personaje: "Spawn",
    precio: 17.5,
    cantidad: 6,
    descripcion: "Más enemigos surgen mientras Spawn enfrenta su destino.",
    original: true,
    formato: "tapa blanda"
  },
  {
    titulo: "Spawn Resurrection",
    autor: "Paul Jenkins",
    editorial: "Image Comics",
    añoPublicacion: 2015,
    personaje: "Spawn",
    precio: 18.0,
    cantidad: 5,
    descripcion: "Un nuevo portador del manto de Spawn resucita.",
    original: false
  },
  // Sonic
  {
    titulo: "Archie Sonic the Hedgehog 1",
    autor: "Michael Gallagher",
    editorial: "Archie Comics",
    añoPublicacion: 1993,
    personaje: "Sonic",
    precio: 9.99,
    cantidad: 10,
    descripcion: "Primera aparición de Sonic en los cómics de Archie.",
    original: true
  },
  {
    titulo: "Archie Sonic Endgame",
    autor: "Ian Flynn",
    editorial: "Archie Comics",
    añoPublicacion: 2015,
    personaje: "Sonic",
    precio: 13.5,
    cantidad: 6,
    descripcion: "La batalla final contra el Dr. Eggman se intensifica.",
    original: true
  },
  {
    titulo: "Sonic Universe 1",
    autor: "Ian Flynn",
    editorial: "Archie Comics",
    añoPublicacion: 2009,
    personaje: "Sonic",
    precio: 11.99,
    cantidad: 7,
    descripcion: "Expansión del universo de Sonic con nuevos personajes.",
    original: true
  },
  {
    titulo: "Archie Sonic Genesis",
    autor: "Ian Flynn",
    editorial: "Archie Comics",
    añoPublicacion: 2011,
    personaje: "Sonic",
    precio: 12.99,
    cantidad: 5,
    descripcion: "Una reinvención moderna del origen de Sonic.",
    original: false
  },
  // The Boys
  {
    titulo: "The Boys Vol. 1 The Name of the Game",
    autor: ["Garth Ennis", "Darick Robertson"],
    editorial: "Dynamite Entertainment",
    añoPublicacion: 2006,
    personaje: "The Boys",
    precio: 14.99,
    cantidad: 10,
    descripcion: "Un grupo clandestino vigila a los superhéroes corruptos.",
    original: true
  },
  {
    titulo: "The Boys Vol. 2 Get Some",
    autor: ["Garth Ennis", "Darick Robertson"],
    editorial: "Dynamite Entertainment",
    añoPublicacion: 2007,
    personaje: "The Boys",
    precio: 15.5,
    cantidad: 8,
    descripcion: "Más revelaciones sobre los oscuros secretos de los supers.",
    original: true
  },
  {
    titulo: "The Boys Vol. 3 Good for the Soul",
    autor: "Garth Ennis",
    editorial: "Dynamite Entertainment",
    añoPublicacion: 2008,
    personaje: "The Boys",
    precio: 16.0,
    cantidad: 7,
    descripcion: "Los Boys se infiltran aún más en el mundo de los héroes.",
    original: true
  },
  {
    titulo: "The Boys Dear Becky",
    autor: "Garth Ennis",
    editorial: "Dynamite Entertainment",
    añoPublicacion: 2020,
    personaje: "The Boys",
    precio: 18.0,
    cantidad: 6,
    descripcion: "Una precuela que revela más sobre Becky y Butcher.",
    original: false
  },
  //Teenage Mutant Ninja Turtles
  {
    titulo: "Teenage Mutant Ninja Turtles Vol. 1",
    autor: ["Kevin Eastman", "Peter Laird"],
    editorial: "IDW Publishing",
    añoPublicacion: 2011,
    personaje: "Teenage Mutant Ninja Turtles",
    precio: 13.5,
    cantidad: 10,
    descripcion: "Renacimiento moderno de las Tortugas Ninja.",
    original: true
  },
  {
    titulo: "TMNT The Last Ronin",
    autor: ["Kevin Eastman", "Tom Waltz"],
    editorial: "IDW Publishing",
    añoPublicacion: 2020,
    personaje: "Teenage Mutant Ninja Turtles",
    precio: 19.99,
    cantidad: 6,
    descripcion: "Una historia distópica donde solo una tortuga sobrevive.",
    original: true,
    formato: "tapa dura"
  },
  {
    titulo: "TMNT City Fall",
    autor: "Tom Waltz",
    editorial: "IDW Publishing",
    añoPublicacion: 2013,
    personaje: "Teenage Mutant Ninja Turtles",
    precio: 16.99,
    cantidad: 7,
    descripcion: "Una guerra de poder divide a la familia de las tortugas.",
    original: true
  },
  {
    titulo: "Teenage Mutant Ninja Turtles Adventures 1",
    autor: "Dean Clarrain",
    editorial: "Archie Comics",
    añoPublicacion: 1988,
    personaje: "Teenage Mutant Ninja Turtles",
    precio: 11.5,
    cantidad: 5,
    descripcion: "Las tortugas llegan al mundo de los cómics para niños.",
    original: false
  }

];


window.comics = window.comics.map(c => new Comic(
  c.titulo,
  c.autor,
  c.editorial,
  c.añoPublicacion,
  c.personaje,
  c.precio,
  c.cantidad,
  c.descripcion,
  c.original,
  c.formato
));
