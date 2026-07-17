<?php

require_once __DIR__ . '/../config/database.php';

$pdo = getConnection();

$pdo->exec("
    CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT NOT NULL CHECK (type IN ('income', 'expense')),
        description TEXT NOT NULL,
        amount REAL NOT NULL,
        category TEXT,
        date TEXT NOT NULL
    )
");

echo "Tabela 'transactions' criada com sucesso.\n";
