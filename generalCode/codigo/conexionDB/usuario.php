<?php
class usuario{

    private $nombreUsuario;
    private $correo;
    private $contraseña;

    public function setnombreUsuario($nombreUsuario){
        $this -> nombreUsuario= $nombreUsuario;
    }
    public function getnombreUsuario(){
        return $this -> nombreUsuario;
    }



    public function setcorreo($correo){
        $this -> correo = $correo;
    }
    public function getcorreo(){
        return $this -> correo;
    }
    


    public function setcontraseña($contraseña){
        $this -> contraseña = $contraseña;
    }
    public function getcontraseña(){
        return $this -> contraseña;
    }

}