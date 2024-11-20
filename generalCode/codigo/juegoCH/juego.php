<?php
require_once 'conexion.php';

function iniciarNivel($idUsuario, $idNivel) {
    $conexion = new Conexion();
    $sql = "INSERT INTO progreso_usuario (id_usuario, id_nivel, progreso, estado) VALUES (:id_usuario, :id_nivel, 0, 'iniciado')";
    $conexion->ejecutar($sql, [':id_usuario' => $idUsuario, ':id_nivel' => $idNivel]);
    echo "Nivel iniciado";
}

function registrarProgreso($idUsuario, $idNivel, $progreso, $estado) {
    $conexion = new Conexion();
    $sql = "UPDATE progreso_usuario SET progreso = :progreso, estado = :estado WHERE id_usuario = :id_usuario AND id_nivel = :id_nivel";
    $conexion->ejecutar($sql, [
        ':progreso' => $progreso,
        ':estado' => $estado,
        ':id_usuario' => $idUsuario,
        ':id_nivel' => $idNivel
    ]);
    echo "Progreso actualizado";
}
?>
