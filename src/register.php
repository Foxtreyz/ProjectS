<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $birthdate = $_POST['birthdate'];

    require_once 'db_connect.php';

    $stmt = $db->prepare("INSERT INTO users_temp (firstname, lastname, username, email, password, birth_date) VALUES (?, ?, ?, ?)");
    $stmt->execute([$firstname, $lastname, $username, $email, $password, $birthdate]);

    if ($stmt->rowCount() > 0) {
        echo "Successfully registered!";
    } else {
        echo "PLease check the values you entered and try again!";
    }
}
?>