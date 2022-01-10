<?php

require "PDO.php";
$lang = $_SESSION["lang"];
// $lang = "EN";
$texte = "texte_$lang";

$stmt = $db -> query("SELECT * FROM texte WHERE $id = id_texte");
    $result = $stmt -> fetch(PDO::FETCH_ASSOC);
    
        echo $result["$texte"];
    
?>