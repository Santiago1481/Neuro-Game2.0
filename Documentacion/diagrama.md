### DIAGRAMA DE CLASES 
@startuml

' Definir clases
class Usuario {
  -int idUsuario
  -String nombreUsuario
  -String correo
  -String contraseña
  -String avatar
  -Date fechaRegistro
  --
  +registrar()
  +iniciarSesion()
  +cambiarAvatar()
}

class Login {
  -int idLogin
  -Date fechaLogin
  -Time horaLogin
  --
  +iniciarSesion()
}

class Perfil {
  -int idPerfil
  -int nivel
  -int experiencia
  -int monedas
  +actualizarPerfil()
}

class Partida {
  -int idPartida
  -Date fechaInicio
  -Date fechaFin
  -String estado
  
  +iniciarPartida()
  +finalizarPartida()
}

class ModoJuego {
  -int idModoJuego
  -String nombre
  
  +seleccionarModo()
}

class Solo {
  
  +jugarSolo()
}

class Sala {
  -int idSala
  -String codigoSala
  --
  +crearSala()
  +unirseSala()
}

class Historial {
  -int idHistorial
  -Date fecha
  -String resultado
  --
  +registrarResultado()
}

class Puntuacion {
  -int idPuntuacion
  -int puntos
  -Time tiempo
  -String dificultad
  --
  +calcularPuntos()
}

' Clase padre Juego
class Juego {
  -String fondo
  -String musica
  -Time tiempo
  -int puntuacion
  --
  +iniciar()
  +finalizar()
  +personalizarFondo()
  +personalizarMusica()
}

' Subclases específicas de los minijuegos
class Simon {
  --
  +iniciarSimon()
}

class Cartas {
  --
  +iniciarCartas()
}

class Copas {
  --
  +iniciarCopas()
}

class Tienda {
  -int idTienda
  --
  +comprarArticulo()
}

class Articulo {
  -int idArticulo
  -String nombreArticulo
  -int precio
  --
  +desbloquearArticulo()
}

' Definir relaciones
Usuario --> Perfil : tiene
Usuario --> Login : tiene muchos
Usuario --> Historial : participa en
Usuario --> Partida : juega
Usuario --> Tienda : accede a
Usuario --> Sala : anfitrión de

Login --> Usuario : pertenece a

Perfil --> Usuario : pertenece a

Partida --> ModoJuego : tiene un
Partida --> Juego : tiene un
Partida --> Historial : registra

ModoJuego <|-- Solo
ModoJuego <|-- Sala

Solo --> Usuario : juega
Solo --> Partida : pertenece a

Sala --> Usuario : anfitrión
Sala --> Usuario : jugadores

Historial --> Usuario : registra a
Historial --> Partida : registra
Historial --> Puntuacion : tiene

Puntuacion --> Historial : tiene muchos

Juego --> Partida : está en

Juego <|-- Simon
Juego <|-- Cartas
Juego <|-- Copas

Tienda --> Articulo : vende
Articulo --> Tienda : pertenece a
Articulo --> Usuario : comprado por

@enduml