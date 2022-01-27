<div class="header">
<?php
// $article = $_GET["id"] ;

// session_start();
// unset($_SESSION["lang"]);

// $_SESSION["lang"] = 0;

session_unset();
session_start();

if (!isset($_SESSION["lang"])){
    $_SESSION["lang"] = "FR";
}


?>


    
    
<img class="logo" src="img/logoBmoche.png" alt="">
<?php require "menu.php"; ?>
</div>