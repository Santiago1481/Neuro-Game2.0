<?php
include('registro.php');

$usuraio = $_POST['nombre'];
$correo = $_POST['correo'];
$contarseaña = $_POST['contrasena'];

if (empty($usuraio) || empty($correo) || empty($contarseaña)) {
    echo "Por favor complete todos los campos.";
    exit;
}

$instancias = new registro();
$instancias->setnombreUsuario($usuraio);
$instancias->setcorreo($correo);
$instancias->setcontraseña($contarseaña);

if ($instancias->registrar()) {
    header('Location: ../inicio/inicio.html');
    exit;  
} else {
    echo "Error al registrar el usuario. Verifique los datos.";
    exit;
}
?>
