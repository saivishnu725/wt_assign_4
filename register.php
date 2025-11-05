<?php
include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $first_name = trim($_POST['fname']);
    $last_name = trim($_POST['lname']);
    $username = trim($_POST['username']);
    $dob = $_POST['dob'];
    $email = trim($_POST['email']);
    $address = trim($_POST['address']);

    // Server-side validation
    if (!preg_match('/^[A-Za-z]+$/', $first_name)) {
        exit("<span style='color:red;'>First name must contain only alphabets (no digits or spaces).</span>");
    }

    if (!preg_match('/^[A-Za-z]+$/', $last_name)) {
        exit("<span style='color:red;'>Last name must contain only alphabets (no digits or spaces).</span>");
    }

    if (!preg_match('/^[A-Za-z0-9_]{3,16}$/', $username)) {
        exit("<span style='color:red;'>Username must be 3-16 characters, no spaces, only letters, digits, or underscores.</span>");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        exit("<span style='color:red;'>Invalid email format.</span>");
    }

    // Handle file upload
    $targetDir = "uploads/";
    if (!is_dir($targetDir))
        mkdir($targetDir, 0777, true);

    $fileName = basename($_FILES["profile_pic"]["name"]);
    $targetFilePath = $targetDir . time() . "_" . $fileName;
    $fileType = strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));

    $allowed = ['jpg', 'jpeg', 'png'];
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
            echo "<span style='color:red;'>File upload failed!</span>";
        }
    } else {
        echo "<span style='color:red;'>Invalid file type. Only JPG, JPEG or PNG allowed.</span>";
    }
}
?>