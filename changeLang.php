<?php 
session_unset();
session_start();



$_SESSION["lang"] = $_POST["lang"];

header('Location: ' . $_SERVER['HTTP_REFERER']);

?>