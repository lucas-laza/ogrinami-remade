<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ogrinami</title>
    <link rel="shortcut icon" href="img/Ogrinami-logo-green.svg" type="image/x-icon">
</head>
<body>
<?php
    
    include "PDO.php";
    include "header.php";
?>
    <meta name="theme-color" content="#00223d">
    <div class="home">
        <section class="terre">
            <div class="titres">
                <h1><?php if ($_SESSION["lang"] == "FR"){echo "Le jeu Ogrinami !";}else if ($_SESSION["lang"] == "EN"){ echo "The Ogrinami game !";} ?></h1>
                <h2><?php if ($_SESSION["lang"] == "FR"){echo "La Terre a besoin de ton aide !";}else if ($_SESSION["lang"] == "EN"){ echo "The Earth needs your help !";} ?></h2>
            </div>
            <div class="bouton"><div><?php if ($_SESSION["lang"] == "FR"){echo "Bientôt disponible";}else if ($_SESSION["lang"] == "EN"){ echo "Available soon";} ?></div></div>
        </section>
        <section class="rubriques">
            <div class="titre"><div><?php if ($_SESSION["lang"] == "FR"){echo "Toutes les rubriques";}else if ($_SESSION["lang"] == "EN"){ echo "All sections";} ?></div></div>
            <div class="liste">
                <div class="rubrique"><div class="img"></div><div class="bouton"><div><?php if ($_SESSION["lang"] == "FR"){echo "Articles";}else if ($_SESSION["lang"] == "EN"){ echo "Articles";} ?></div></div><a href="articles.php"></a></div>
                <div class="rubrique"><div class="img"></div><div class="bouton"><div><?php if ($_SESSION["lang"] == "FR"){echo "Les quiz";}else if ($_SESSION["lang"] == "EN"){ echo "All quizes";} ?></div><a href="quizes.php"></a></div></div>
                <div class="rubrique"><div class="img"></div><div class="bouton"><div><?php if ($_SESSION["lang"] == "FR"){echo "Mini-jeux";}else if ($_SESSION["lang"] == "EN"){ echo "Mini games";} ?></div><a href="games/planetClicker/"></a></div></div>
            </div>
        </section>
    </div>


<?php
?> 
</body>
</html>