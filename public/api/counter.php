<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

$count_file = __DIR__ . "/counter.txt";
$ip_file = __DIR__ . "/ips.txt";

if (!file_exists($count_file)) {
    file_put_contents($count_file, "0");
}
if (!file_exists($ip_file)) {
    file_put_contents($ip_file, "");
}

$ip_address = $_SERVER['REMOTE_ADDR'];
$stored_ips = file($ip_file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

if (!in_array($ip_address, $stored_ips)) {
    $count = (int) file_get_contents($count_file);
    $count++;

    file_put_contents($count_file, $count, LOCK_EX);
    file_put_contents($ip_file, $ip_address . PHP_EOL, FILE_APPEND | LOCK_EX);
} else {
    $count = (int) file_get_contents($count_file);
}

echo json_encode(["count" => $count]);
?>