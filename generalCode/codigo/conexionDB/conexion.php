<?php

    class Conexion{
        private $servidor;
        private $usuario;
        private $password;
        private $puerto;
        private $baseDatos;

        public function __construct(){
            $this->servidor="localhost";
            $this->usuario="postgres";
            $this->password="Ss1028882533";
            $this->puerto="5432";
            $this->baseDatos="neuro_game";
        }

        public function conectar(){
            try {
                $dsn = "pgsql:host=$this->servidor;port=$this->puerto;dbname=$this->baseDatos";
                $pdo = new PDO($dsn, $this->usuario, $this->password, [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // Mostrar errores
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC // Establecer el modo de fetch a asociativo
                ]);
            
                //echo "Conexión exitosa a PostgreSQL";
            
            } catch (PDOException $e) {
                echo 'Error en la conexión: ' . $e->getMessage();
            }
            return $pdo;
        }

        public function ejecutar($sql, $valores){
            $pdo=$this->conectar();
            if(!$pdo) return FALSE;
            $stmt = $pdo ->prepare($sql);
            return  $stmt ->execute($valores);

             

        }
        public function login($sql, $valores ){
        $pdo = $this ->conectar();
        $stmt = $pdo ->prepare($sql);
        $stmt ->execute($valores);
        return $stmt -> fetchAll(PDO::FETCH_ASSOC);
        }

    }
   


?>