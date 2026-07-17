<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

require_once __DIR__ . '/../config/database.php';

$pdo = getConnection();
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $stmt = $pdo->query('SELECT * FROM transactions ORDER BY date DESC, id DESC');
        echo json_encode(['data' => $stmt->fetchAll()]);
        break;

    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);

        if (empty($body['description']) || empty($body['amount']) || empty($body['type'])) {
            http_response_code(422);
            echo json_encode(['error' => 'Campos obrigatórios: description, amount, type']);
            break;
        }

        $stmt = $pdo->prepare('
            INSERT INTO transactions (type, description, amount, category, date)
            VALUES (:type, :description, :amount, :category, :date)
        ');

        $stmt->execute([
            'type' => $body['type'],
            'description' => $body['description'],
            'amount' => $body['amount'],
            'category' => $body['category'] ?? null,
            'date' => $body['date'] ?? date('Y-m-d'),
        ]);

        http_response_code(201);
        echo json_encode(['id' => $pdo->lastInsertId()]);
        break;

    case 'DELETE':
        $id = $_GET['id'] ?? null;

        if (!$id) {
            http_response_code(422);
            echo json_encode(['error' => 'Parâmetro id é obrigatório']);
            break;
        }

        $stmt = $pdo->prepare('DELETE FROM transactions WHERE id = :id');
        $stmt->execute(['id' => $id]);

        echo json_encode(['deleted' => $id]);
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Método não permitido']);
}
