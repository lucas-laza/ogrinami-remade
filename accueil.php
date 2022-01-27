<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Document</title>
</head>
<body>
<?php
    
    include "PDO.php";
    include "header.php";
?>
    
    <div class="home">
        <section class="terre">
            <div class="titres">
                <h1>Le jeu Ogrinami !</h1>
                <h2>La Terre a besoin de ton aide !</h2>
            </div>
            <div class="bouton"><div>Bientôt disponible</div></div>
        </section>
        <section class="rubriques">
            <div class="titre"><div>Toutes les rubriques</div></div>
            <div class="liste">
                <div class="rubrique"><div class="img"></div><div class="bouton"><div>Mini-jeux</div></div></div>
                <div class="rubrique"><div class="img"></div><div class="bouton"><div>Mini-jeux</div></div></div>
                <div class="rubrique"><div class="img"></div><div class="bouton"><div>Mini-jeux</div></div></div>
            </div>
        </section>
    </div>


<?php
?> 
</body>
</html>