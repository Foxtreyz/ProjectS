<?php
$host = ''; /* DELETE ON UPLOAD */
$port = '';
$dbname = 'slasher';
$user = ''; /* DELETE ON UPLOAD */
$password = ''; /* DELETE ON UPLOAD */

try {
    $db = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $e) {
    die('Error al conectar con la base de datos: ' . $e->getMessage());
  }
?>