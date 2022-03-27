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
    
    <div class="home">

        <div class="grinouilleModale">
            <div class="gMbody">
                <div class="leftText parents">
                    <h2>Avis aux Parents</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quaerat qui ipsum eius ex hic? Voluptatum eum, fugit asperiores commodi aliquid ullam soluta illum porro dolore recusandae ab minus ipsum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quaerat qui ipsum eius ex hic? Voluptatum eum, fugit asperiores commodi aliquid ullam soluta illum porro dolore recusandae ab minus ipsum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quaerat qui ipsum eius ex hic? Voluptatum eum, fugit asperiores commodi aliquid ullam soluta illum porro dolore recusandae ab minus ipsum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quaerat qui ipsum eius ex hic? Voluptatum eum, fugit asperiores commodi aliquid ullam soluta illum porro dolore recusandae ab minus ipsum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quaerat qui ipsum eius ex hic? Voluptatum eum, fugit asperiores commodi aliquid ullam soluta illum porro dolore recusandae ab minus ipsum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quaerat qui ipsum eius ex hic? Voluptatum eum, fugit asperiores commodi aliquid ullam soluta illum porro dolore recusandae ab minus ipsum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quaerat qui ipsum eius ex hic? Voluptatum eum, fugit asperiores commodi aliquid ullam soluta illum porro dolore recusandae ab minus ipsum!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quaerat qui ipsum eius ex hic? Voluptatum eum, fugit asperiores commodi aliquid ullam soluta illum porro dolore recusandae ab minus ipsum!</p>
                    <div class="btns">
                        <button>Accepter</button>
                        <button>En savoir plus</button>
                    </div>
                </div>

                <div class="leftText enfants">
                    <h2>Bonjour je suis grinouille !</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure quaerat qui ipsum eius ex hic? Voluptatum eum, fugit asperiores commodi aliquid ullam soluta illum porro dolore recusandae ab minus ipsum!</p>
                    <div class="btns"><button>Allons-y !</button></div>
                </div>

                <div class="right">
                    
                </div>

            </div>
        </div>

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