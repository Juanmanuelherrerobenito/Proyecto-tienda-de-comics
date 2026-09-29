// Definición de la clase Usuario
window.listaUsuarios = window.listaUsuarios || [];
class Usuario {
  constructor(codigo_usuario, nombre_usuario, contraseña, correo, telefono, perfil, estado, numero_accesos_erroneos, fecha_ultimo_acceso) {
    this.codigo_usuario = codigo_usuario;
    this.nombre_usuario = nombre_usuario;
    this.contraseña = contraseña;
    this.correo = correo;
    this.telefono = telefono;
    this.perfil = perfil;
    this.estado = estado;
    this.numero_accesos_erroneos = numero_accesos_erroneos;
    this.fecha_ultimo_acceso = new Date(fecha_ultimo_acceso);
  }


  // Método 1: Registrar intento de acceso erróneo 
  registrarAccesoErroneo() {
    this.numero_accesos_erroneos++;
    if (this.numero_accesos_erroneos >= 5) {
      this.estado = "bloqueado";
    }
  }

  // Método 2: Actualizar la fecha de último acceso (por ejemplo, al iniciar sesión correctamente) 
  actualizarUltimoAcceso() {
    this.fecha_ultimo_acceso = new Date();
    this.numero_accesos_erroneos = 0; // se reinician los intentos fallidos
  }

  // Método 3: Cambiar estado manualmente 
  cambiarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }
}

window.listaUsuarios=[
  {
    "codigo_usuario": "U001",
    "nombre_usuario": "alejandro.martinez",
    "contraseña": "P4s$w0rd!2025",
    "correo": "alejandro.martinez@example.com",
    "telefono": "+34123456701",
    "perfil": "admin",
    "estado": "activo",
    "numero_accesos_erroneos": 0,
    "fecha_ultimo_acceso": "2025-09-20T08:34:12Z"
  },
  {
    "codigo_usuario": "U002",
    "nombre_usuario": "sofia.lopez",
    "contraseña": "S0f!aL0pz#",
    "correo": "sofia.lopez@example.com",
    "telefono": "+34123456702",
    "perfil": "usuario",
    "estado": "activo",
    "numero_accesos_erroneos": 2,
    "fecha_ultimo_acceso": "2025-09-24T15:12:05Z"
  },
  {
    "codigo_usuario": "U003",
    "nombre_usuario": "carlos.gomez",
    "contraseña": "Cg12345$",
    "correo": "carlos.gomez@example.com",
    "telefono": "+34123456703",
    "perfil": "usuario",
    "estado": "bloqueado",
    "numero_accesos_erroneos": 10,
    "fecha_ultimo_acceso": "2025-08-30T21:05:00Z"
  },
  {
    "codigo_usuario": "U004",
    "nombre_usuario": "maria.ruiz",
    "contraseña": "Mru!z_778",
    "correo": "maria.ruiz@example.com",
    "telefono": "+34123456704",
    "perfil": "moderador",
    "estado": "activo",
    "numero_accesos_erroneos": 1,
    "fecha_ultimo_acceso": "2025-09-25T09:45:30Z"
  },
  {
    "codigo_usuario": "U005",
    "nombre_usuario": "juan.perez",
    "contraseña": "JpSecure#55",
    "correo": "juan.perez@example.com",
    "telefono": "+34123456705",
    "perfil": "usuario",
    "estado": "activo",
    "numero_accesos_erroneos": 0,
    "fecha_ultimo_acceso": "2024-12-10T12:00:00Z"
  },
  {
    "codigo_usuario": "U006",
    "nombre_usuario": "laura.sanchez",
    "contraseña": "L@uRa2025!",
    "correo": "laura.sanchez@example.com",
    "telefono": "+34123456706",
    "perfil": "usuario",
    "estado": "activo",
    "numero_accesos_erroneos": 3,
    "fecha_ultimo_acceso": "2025-09-22T18:20:47Z"
  },
  {
    "codigo_usuario": "U007",
    "nombre_usuario": "andres.vargas",
    "contraseña": "Andr3s_V#7",
    "correo": "andres.vargas@example.com",
    "telefono": "+34123456707",
    "perfil": "moderador",
    "estado": "activo",
    "numero_accesos_erroneos": 0,
    "fecha_ultimo_acceso": "2025-09-18T07:10:11Z"
  },
  {
    "codigo_usuario": "U008",
    "nombre_usuario": "patricia.torres",
    "contraseña": "PtTorres$90",
    "correo": "patricia.torres@example.com",
    "telefono": "+34123456708",
    "perfil": "usuario",
    "estado": "activo",
    "numero_accesos_erroneos": 4,
    "fecha_ultimo_acceso": "2025-09-10T11:55:22Z"
  },
  {
    "codigo_usuario": "U009",
    "nombre_usuario": "fernando.ramirez",
    "contraseña": "FermR!m#12",
    "correo": "fernando.ramirez@example.com",
    "telefono": "+34123456709",
    "perfil": "usuario",
    "estado": "activo",
    "numero_accesos_erroneos": 0,
    "fecha_ultimo_acceso": "2025-09-25T22:01:03Z"
  },
  {
    "codigo_usuario": "U010",
    "nombre_usuario": "isabel.moreno",
    "contraseña": "Is@b3lM2025",
    "correo": "isabel.moreno@example.com",
    "telefono": "+34123456710",
    "perfil": "usuario",
    "estado": "activo",
    "numero_accesos_erroneos": 1,
    "fecha_ultimo_acceso": "2025-09-23T13:30:00Z"
  },
  {
    "codigo_usuario": "U011",
    "nombre_usuario": "ricardo.soto",
    "contraseña": "R!c4rd0S",
    "correo": "ricardo.soto@example.com",
    "telefono": "+34123456711",
    "perfil": "admin",
    "estado": "activo",
    "numero_accesos_erroneos": 0,
    "fecha_ultimo_acceso": "2025-09-21T05:05:05Z"
  },
  {
    "codigo_usuario": "U012",
    "nombre_usuario": "gabriela.nunez",
    "contraseña": "GabuN#2025",
    "correo": "gabriela.nunez@example.com",
    "telefono": "+34123456712",
    "perfil": "usuario",
    "estado": "activo",
    "numero_accesos_erroneos": 6,
    "fecha_ultimo_acceso": "2023-06-01T10:00:00Z"
  },
  {
    "codigo_usuario": "U013",
    "nombre_usuario": "manuel.castro",
    "contraseña": "MCastro!33",
    "correo": "manuel.castro@example.com",
    "telefono": "+34123456713",
    "perfil": "usuario",
    "estado": "activo",
    "numero_accesos_erroneos": 0,
    "fecha_ultimo_acceso": "2025-09-26T01:15:40Z"
  },
  {
    "codigo_usuario": "U014",
    "nombre_usuario": "paula.diaz",
    "contraseña": "Paul4.D!az",
    "correo": "paula.diaz@example.com",
    "telefono": "+34123456714",
    "perfil": "moderador",
    "estado": "activo",
    "numero_accesos_erroneos": 2,
    "fecha_ultimo_acceso": "2025-09-19T16:40:00Z"
  },
  {
    "codigo_usuario": "U015",
    "nombre_usuario": "jorge.mendez",
    "contraseña": "J0rgeMend#",
    "correo": "jorge.mendez@example.com",
    "telefono": "+34123456715",
    "perfil": "usuario",
    "estado": "bloqueado",
    "numero_accesos_erroneos": 12,
    "fecha_ultimo_acceso": "2025-07-11T20:00:00Z"
  },
  {
    "codigo_usuario": "U016",
    "nombre_usuario": "silvia.arias",
    "contraseña": "Silv!Arias77",
    "correo": "silvia.arias@example.com",
    "telefono": "+34123456716",
    "perfil": "usuario",
    "estado": "activo",
    "numero_accesos_erroneos": 0,
    "fecha_ultimo_acceso": "2025-09-26T06:00:00Z"
  },
  {
    "codigo_usuario": "U017",
    "nombre_usuario": "victor.herrera",
    "contraseña": "V!ctorH_09",
    "correo": "victor.herrera@example.com",
    "telefono": "+34123456717",
    "perfil": "usuario",
    "estado": "activo",
    "numero_accesos_erroneos": 5,
    "fecha_ultimo_acceso": "2025-08-01T14:22:10Z"
  },
  {
    "codigo_usuario": "U018",
    "nombre_usuario": "laura.fernandez",
    "contraseña": "LFern#2025",
    "correo": "laura.fernandez@example.com",
    "telefono": "+34123456718",
    "perfil": "usuario",
    "estado": "activo",
    "numero_accesos_erroneos": 0,
    "fecha_ultimo_acceso": "2022-11-15T09:00:00Z"
  },
  {
    "codigo_usuario": "U019",
    "nombre_usuario": "sergio.lozano",
    "contraseña": "SerL0z!no1",
    "correo": "sergio.lozano@example.com",
    "telefono": "+34123456719",
    "perfil": "moderador",
    "estado": "activo",
    "numero_accesos_erroneos": 1,
    "fecha_ultimo_acceso": "2025-09-15T23:59:59Z"
  },
  {
    "codigo_usuario": "U020",
    "nombre_usuario": "vanessa.cortes",
    "contraseña": "VanC0rt3s#",
    "correo": "vanessa.cortes@example.com",
    "telefono": "+34123456720",
    "perfil": "usuario",
    "estado": "activo",
    "numero_accesos_erroneos": 0,
    "fecha_ultimo_acceso": "2025-09-26T09:10:00Z"
  }
];


window.listaUsuarios = window.listaUsuarios.map(u => new Usuario(
  u.codigo_usuario,
  u.nombre_usuario,
  u.contraseña,
  u.correo,
  u.telefono,
  u.perfil,
  u.estado,
  u.numero_accesos_erroneos,
  u.fecha_ultimo_acceso
));

