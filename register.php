<?php
include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $first_name = trim($_POST['first_name']);
    $last_name = trim($_POST['last_name']);
    $username = trim($_POST['username']);
    $dob = $_POST['dob'];
    $email = trim($_POST['email']);
    $address = trim($_POST['address']);

    // Server-side validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        exit("Invalid email format!");
    }

    if (!preg_match('/^[a-zA-Z0-9_]{3,16}$/', $username)) {
        exit("Invalid username!");
    }

    // Handle file upload
    $targetDir = "uploads/";
    if (!is_dir($targetDir))
        mkdir($targetDir, 0777, true);

    $fileName = basename($_FILES["profile_pic"]["name"]);
    $targetFilePath = $targetDir . time() . "_" . $fileName;
    $fileType = strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));

    $allowed = ['jpg', 'jpeg', 'png', 'gif'];
    if (in_array($fileType, $allowed)) {
        if (move_uploaded_file($_FILES["profile_pic"]["tmp_name"], $targetFilePath)) {
            $stmt = $conn->prepare("INSERT INTO users (first_name, last_name, username, dob, email, address, profile_pic) VALUES (?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("sssssss", $first_name, $last_name, $username, $dob, $email, $address, $targetFilePath);

            if ($stmt->execute()) {
                echo "<span style='color:green;'>Registration successful!</span>";
            } else {
                echo "<span style='color:red;'>Error: Username or email already exists.</span>";
            }
        } else {
            echo "File upload failed!";
        }
    } else {
        echo "Invalid file type!";
    }
}
?>