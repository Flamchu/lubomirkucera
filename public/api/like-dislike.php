<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$data_file = __DIR__ . "/votes.json";

if (!file_exists($data_file)) {
    $data = ["likes" => 0, "dislikes" => 0, "votes" => []];
    file_put_contents($data_file, json_encode($data), LOCK_EX);
} else {
    $data = json_decode(file_get_contents($data_file), true);
}

$ip_address = $_SERVER['REMOTE_ADDR'];

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $userVote = $data['votes'][$ip_address] ?? null;
    echo json_encode([
        "likes" => $data['likes'],
        "dislikes" => $data['dislikes'],
        "userVote" => $userVote
    ]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $input = json_decode(file_get_contents("php://input"), true);
    $vote = $input['vote'] ?? null;

    if (!in_array($vote, ["like", "dislike"])) {
        echo json_encode(["error" => "Invalid vote"]);
        exit;
    }

    if (isset($data['votes'][$ip_address])) {
        $previousVote = $data['votes'][$ip_address];
        if ($previousVote === "like") {
            $data['likes']--;
        } elseif ($previousVote === "dislike") {
            $data['dislikes']--;
        }
    }

    $data['votes'][$ip_address] = $vote;
    if ($vote === "like") {
        $data['likes']++;
    } else {
        $data['dislikes']++;
    }

    file_put_contents($data_file, json_encode($data, JSON_PRETTY_PRINT), LOCK_EX);

    echo json_encode([
        "likes" => $data['likes'],
        "dislikes" => $data['dislikes'],
        "userVote" => $vote
    ]);
}
?>