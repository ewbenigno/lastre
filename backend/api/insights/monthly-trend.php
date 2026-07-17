<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once __DIR__ . '/../../config/database.php';

$pdo = getConnection();

$sql = "
    SELECT
        strftime('%Y-%m', date) AS month,
        SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS total_expense,
        SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS total_income
    FROM transactions
    GROUP BY month
    ORDER BY month ASC
";

$stmt = $pdo->query($sql);
$rows = $stmt->fetchAll();

$result = [];

foreach ($rows as $i => $row) {
    $currentExpense = (float) $row['total_expense'];
    $previousExpense = $i > 0 ? (float) $rows[$i - 1]['total_expense'] : null;

    $variation = null;
    if ($previousExpense !== null && $previousExpense > 0) {
        $variation = (($currentExpense - $previousExpense) / $previousExpense) * 100;
    }

    $result[] = [
        'month' => $row['month'],
        'total_income' => (float) $row['total_income'],
        'total_expense' => $currentExpense,
        'variation_percent' => $variation !== null ? round($variation, 1) : null,
    ];
}

echo json_encode([
    'data' => $result,
], JSON_PRETTY_PRINT);
