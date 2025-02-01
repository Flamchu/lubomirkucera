<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

// Secure file storage
$file = __DIR__ . "/counter.txt";

if (!file_exists($file)) {
    file_put_contents($file, "0");
}

// Read and increment counter
$count = (int) file_get_contents($file);
$count++;
file_put_contents($file, $count);

// Return count as JSON
echo json_encode(["count" => $count]);
?>