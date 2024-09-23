<?php
session_start();

$V_Username = 'Admin';
$V_Password = 'Admin';

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    header('Content-Type: application/json');

    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === $V_Username && $password === $V_Password) {
        $_SESSION['username'] = $username;
        echo json_encode(['status' => 'success', 'message' => 'Login Successfully!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'DENIED']);
    }
}
?>
