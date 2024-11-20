<?php
// Configuración de cabeceras para permitir el acceso desde otros dominios
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Leer los datos JSON del cuerpo de la solicitud
$data = json_decode(file_get_contents('php://input'));

// Verificar si los datos son válidos
if (isset($data->nivel) && isset($data->secuencia)) {
    $nivel = $data->nivel;
    $secuencia = $data->secuencia;

    // Guardar en el archivo JSON
    $archivo = 'secuencias.json';
    $secuenciasGuardadas = [];

    // Verificar si el archivo ya existe
    if (file_exists($archivo)) {
        $secuenciasGuardadas = json_decode(file_get_contents($archivo), true);
    }

    // Agregar nueva secuencia
    $secuenciasGuardadas[] = [
        'nivel' => $nivel,
        'secuencia' => $secuencia,
        'fecha' => date('Y-m-d H:i:s')
    ];

    // Guardar nuevamente el archivo
    file_put_contents($archivo, json_encode($secuenciasGuardadas, JSON_PRETTY_PRINT));

    // Enviar respuesta de éxito
    echo json_encode(['message' => 'Secuencia guardada correctamente.']);
} else {
    // Enviar respuesta de error
    echo json_encode(['message' => 'Datos inválidos.']);
}
