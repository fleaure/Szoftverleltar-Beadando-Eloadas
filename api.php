<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Az OPTIONS kérések kezelése a CORS miatt
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

require "db.php"; 

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        try {
            // 1. OOJS-nek: Gépek listája (t=gep)
            if (isset($_GET['t']) && $_GET['t'] === 'gep') {
                $stmt = $pdo->query("SELECT * FROM gep ORDER BY hely ASC");
                echo json_encode([
                    "status" => "success", 
                    "readData" => $stmt->fetchAll()
                ]);
            } 
            // 2. OOJS-nek: Szoftverek listája (table=szoftver)
            else if (isset($_GET['table']) && $_GET['table'] === 'szoftver') {
                $stmt = $pdo->query("SELECT * FROM szoftver ORDER BY nev ASC");
                echo json_encode([
                    "status" => "success",
                    "readData" => $stmt->fetchAll()
                ]);
            }
            // 3. React-nek/Választóknak: Csak id és hely (task=gepek)
            else if (isset($_GET['task']) && $_GET['task'] === 'gepek') {
                $stmt = $pdo->query("SELECT id, hely FROM gep ORDER BY hely ASC");
                echo json_encode(["gepek" => $stmt->fetchAll()]);
            } 
            // 4. Fetch API CRUD-nak: Telepítések listája (lapozással vagy anélkül)
            else {
                $table = isset($_GET['table']) ? $_GET['table'] : 'telepites';
                
                // Biztonsági szűrő, hogy csak létező táblához nyúljanak
                $allowedTables = ['telepites', 'gep', 'szoftver'];
                if (!in_array($table, $allowedTables)) {
                    throw new Exception("Nem engedélyezett tábla.");
                }

                $offset = isset($_GET['offset']) ? (int)$_GET['offset'] : 0;
                $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 50; 

                $stmt = $pdo->prepare("SELECT * FROM $table ORDER BY id DESC LIMIT :limit OFFSET :offset");
                $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
                $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
                $stmt->execute();

                echo json_encode([
                    "status" => "success", 
                    "readData" => $stmt->fetchAll()
                ]);
            }
        } catch(Exception $e) {
            http_response_code(500);
            echo json_encode(["status" => "error", "message" => $e->getMessage()]);
        }
        break;

    case 'POST':
        // Új telepítés rögzítése
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
            http_response_code(400);
            echo json_encode(["status" => "Hiba: " . $e->getMessage()]);
        }
        break;

    case 'PUT':
        // Telepítés módosítása
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
            http_response_code(400);
            echo json_encode(["status" => "Hiba: " . $e->getMessage()]);
        }
        break;

    case 'DELETE':
        // Telepítés törlése
        try {
            $data = json_decode(file_get_contents("php://input"), true);
            $stmt = $pdo->prepare("DELETE FROM telepites WHERE id=?");
            $stmt->execute([$data['id']]);
            echo json_encode(["status" => "Telepítés törölve!"]);
        } catch(Exception $e) {
            http_response_code(400);
            echo json_encode(["status" => "Hiba: " . $e->getMessage()]);
        }
        break;
}
?>