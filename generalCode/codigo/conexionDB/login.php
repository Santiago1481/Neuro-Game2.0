<?php
include('conexion.php');
include('usuario.php');
session_start();
class login extends usuario {
    private $insert;

    public function login() {
        $conexion = new Conexion();
        $this->insert = "SELECT * FROM usuarios WHERE email = :correo;";
        $valores = [
            ':correo' => $this->getcorreo()
        ];

        // Obtener el resultado de la consulta
        $resultado = $conexion->login($this->insert, $valores);
        
        // Verificar si el usuario existe
        if ($resultado && count($resultado) > 0) {
            // Obtener el hash de la contraseña guardada
            $storedHash = $resultado[0]['contrasena'];

            // Verificar si la contraseña ingresada coincide con el hash
            if (password_verify($this->getcontraseña(), $storedHash)) {
                return true; // La contraseña es correcta
            }
        }
        return false; // Contraseña incorrecta

        // if($resultado = true){
        //     $_SESSION['nombre_usuario'] = $nombreUsuario['nombre_usuario'];
        // }


    }
}


?>
