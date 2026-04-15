<?php

$host = "localhost"; 

$db   = "tbkdszoft"; 

$user = "tbkdszoft"; 

$pass = "Kd_1234"; 

try {
    
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=UTF8", $user, $pass, [
        
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (PDOException $e) {
   
    die("Database connection failed: " . $e->getMessage());
}
?>