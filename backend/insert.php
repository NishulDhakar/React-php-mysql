<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) { echo json_encode(["error"=>"No input"]); exit; }

include 'db.php';

$raw = file_get_contents("php://input");
if (empty($raw)) {
    echo json_encode(["status" => "error", "message" => "Raw input empty"]);
    exit;
}

$data = json_decode($raw, true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Invalid or no JSON received", "raw" => $raw]);
    exit;
}

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$mobile = $data['mobile'] ?? '';

if (empty($name) || empty($email) || empty($mobile)) {
    echo json_encode(["status" => "error", "message" => "All fields are required"]);
    exit;
}

$sql = "INSERT INTO react (name, email, mobile) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $name, $email, $mobile);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "User created successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to create user"]);
}

$stmt->close();
$conn->close();
?>
