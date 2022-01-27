<?php 
session_unset();
session_start();

$idA = $_POST["idA"];

echo $idA;

$_SESSION["lang"] = $_POST["lang"];
header ("location: ./article.php?id=$id");
header('Location: ' . $_SERVER['HTTP_REFERER']);

?>