

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


    
    
<div class="logo"><img src="img/ogrinami-logo-white.svg" alt=""><a href="index.php"></a></div>
<?php require "menu.php"; ?>
</div>