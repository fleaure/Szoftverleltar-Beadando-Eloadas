<?php
header("Content-Type: application/json");
require "db.php"; 

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':

        if (isset($_GET['t']) && $_GET['t'] === 'gep') {
            try {
                $stmt = $pdo->query("SELECT * FROM gep ORDER BY hely ASC");
                echo json_encode([
                    "status" => "Gépek listája betöltve!", 
                    "readData" => $stmt->fetchAll()
                ]);
            } catch(Exception $e) {
                echo json_encode(["status" => "Hiba: " . $e->getMessage()]);
            }
        } 


        else if (isset($_GET['task']) && $_GET['task'] === 'gepek') {
            try {
                $stmt = $pdo->query("SELECT id, hely FROM gep ORDER BY hely ASC");
                echo json_encode(["gepek" => $stmt->fetchAll()]);
            } catch(Exception $e) {
                echo json_encode(["status" => "Hiba: " . $e->getMessage()]);
            }
        } 


        else {
            try {
                $offset = isset($_GET['offset']) ? (int)$_GET['offset'] : 0;
                $limit = 50; 

                $stmt = $pdo->prepare("SELECT * FROM telepites ORDER BY id DESC LIMIT :limit OFFSET :offset");
                $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
                $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
                $stmt->execute();

                echo json_encode([
                    "status" => "Telepítési adatok lekérve!", 
                    "readData" => $stmt->fetchAll()
                ]);
            } catch(Exception $e) {
                echo json_encode(["status" => "Hiba: " . $e->getMessage()]);
            }
        }
        break;

    case 'POST':
        // Új telepítés rögzítése (CRUD - Create)
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            $stmt = $pdo->prepare("INSERT INTO telepites (gepid, szoftverid, verzio, datum) VALUES (?, ?, ?, ?)");
            $stmt->execute([
                $data['gepid'], 
                $data['szoftverid'], 
                $data['verzio'], 
                $data['datum']
            ]);
            echo json_encode(["status" => "Telepítés sikeresen rögzítve!"]);
        } catch(Exception $e) {
            echo json_encode(["status" => "Hiba: " . $e->getMessage()]);
        }
        break;

    case 'PUT':
        // Meglévő telepítés módosítása (CRUD - Update)
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            $stmt = $pdo->prepare("UPDATE telepites SET gepid=?, szoftverid=?, verzio=?, datum=? WHERE id=?");
            $stmt->execute([
                $data['gepid'], 
                $data['szoftverid'], 
                $data['verzio'], 
                $data['datum'], 
                $data['id']
            ]);
            echo json_encode(["status" => "Telepítés sikeresen módosítva!"]);
        } catch(Exception $e) {
            echo json_encode(["status" => "Hiba: " . $e->getMessage()]);
        }
        break;

    case 'DELETE':

        try {
            $data = json_decode(file_get_contents("php://input"), true);
            $stmt = $pdo->prepare("DELETE FROM telepites WHERE id=?");
            $stmt->execute([$data['id']]);
            echo json_encode(["status" => "Telepítés törölve!"]);
        } catch(Exception $e) {
            echo json_encode(["status" => "Hiba: " . $e->getMessage()]);
        }
        break;
}
?>