<?php
include('login.php');
$correo= $_POST['correo'];
$contarseaña = $_POST['txtcontrasena'];

$instancias = new login();
$instancias -> setcorreo($correo);
$instancias -> setcontraseña($contarseaña);


if ($instancias->login()) {

    header('Location:../menuJuego/indexMJ.html');

    exit; 
} else {
    
    echo "Error: Usuario o contraseña incorrectos.";
    // header('Location: error_login.php');
    exit;
}