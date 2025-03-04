<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

$data_file = __DIR__ . "/counter_data.json";

if (!file_exists($data_file)) {
    $data = ["count" => 0, "ips" => []];
    file_put_contents($data_file, json_encode($data), LOCK_EX);
} else {
    $data = json_decode(file_get_contents($data_file), true);
}

$ip_address = $_SERVER['REMOTE_ADDR'];

if (!in_array($ip_address, $data['ips'])) {
    $data['count']++;
    $data['ips'][] = $ip_address;

    file_put_contents($data_file, json_encode($data, JSON_PRETTY_PRINT), LOCK_EX);
}

echo json_encode(["count" => $data['count']]);
?>