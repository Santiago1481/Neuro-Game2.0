<?php
include('usuario.php');
include('conexion.php');

class registro extends usuario {
    private $insertar;

    public function registrar() {
        $conexion = new Conexion();
        $this->insertar = "INSERT INTO usuarios(nombre_usuario, email, contrasena) VALUES (:nombre, :correo, :contrasena);";
        $hashedPassword = password_hash($this->getcontraseña(), PASSWORD_DEFAULT);

        $valores = [
            ':nombre' => $this->getnombreUsuario(),
            ':correo' => $this->getcorreo(),
            ':contrasena' => $hashedPassword
        ];

        return $conexion->ejecutar($this->insertar, $valores);
    }
}
?>
