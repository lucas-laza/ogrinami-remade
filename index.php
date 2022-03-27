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
                    <div class="langChange" onclick="langChange('<?php if ($_SESSION['lang'] == 'EN'){echo('FR');} else {echo('EN');} ?>')"></div>
                    <h2><?php if ($_SESSION["lang"] == "FR"){ ?> Avis aux Parents <?php }else if ($_SESSION["lang"] == "EN"){ ?> Notice to parents  <?php } ?> </h2>
                    <p><?php if ($_SESSION["lang"] == "FR"){
                        ?> Ogrinami est un site pour enfant, alors nous les invitons à être accompagné de leur parents pendant l'exploration du site. Ogrinami partage des liens vers des sites d'organisations qui agissent pour le climat.
                        La surveillance des mineurs est fortement encouragé. <?php
                    } else {
                        ?> Ogrinami is a children's site, so we encourage children to be accompanied by their parents while exploring the site. Ogrinami shares links to sites of climate action organisations.
                        Supervision of minors is strongly encouraged. <?php
                    } ?>
                </p>
                    <div class="btns">
                        <button class="pAccept"><?php if ($_SESSION["lang"] == "FR"){ ?> Accepter <?php }else{ ?> Accept <?php } ?></button>
                        <button class="pAcceptAgain"><?php if ($_SESSION["lang"] == "FR"){ ?> Ne plus me montrer <?php }else{ ?> Don't show again <?php } ?></button>
                        <button class="pMore"><?php if ($_SESSION["lang"] == "FR"){ ?> En savoir plus <?php }else{ ?> More info <?php } ?></button>
                    </div>
                </div>

                <div class="leftText enfants">  
                <div class="langChange" onclick="langChange('<?php if ($_SESSION['lang'] == 'EN'){echo('FR');} else {echo('EN');} ?>')"></div>
                <h2><?php if ($_SESSION["lang"] == "FR"){ ?> Bonjour je suis Grinouille ! <?php }else if ($_SESSION["lang"] == "EN"){ ?> Hi, I am Grinouille !  <?php } ?> </h2>
                    <p><?php if ($_SESSION["lang"] == "FR"){
                        ?> Ogrinami te propose d'en apprendre plus sur les problèmes de notre planète. <br> Tu peux jouer à des mini-jeux, répondre à des quiz ou bien lire et écouter des articles ! <br> Si tu es perdu.e visite le menu !<?php
                    } else {
                        ?> Ogrinami invites you to learn more about the problems of our planet.<br>  You can play mini-games, take quizzes or read and listen to articles! <br> If you're lost, check out the menu! <?php
                    } ?>
                </p>
                    <div class="btns">
                        <button class="cAccept"><?php if ($_SESSION["lang"] == "FR"){ ?> Allons-y ! <?php }else{ ?> Let's go ! <?php } ?></button>
                        <button class="cAcceptAgain"><?php if ($_SESSION["lang"] == "FR"){ ?> Ne plus me montrer <?php }else{ ?> Don't show again <?php } ?></button>
                
                </div>
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
            <div class="bouton scrollSections"><div><?php if ($_SESSION["lang"] == "FR"){echo "Voir les rubriques";}else if ($_SESSION["lang"] == "EN"){ echo "See sections";} ?></div></div>
        </section>
        <section class="rubriques">
            <div class="titre"><div><?php if ($_SESSION["lang"] == "FR"){echo "Toutes les rubriques";}else if ($_SESSION["lang"] == "EN"){ echo "All sections";} ?></div></div>
            <div class="liste">

                <div class="rubrique"><div class="img" style="background-image: url('./img/accueil/jeux.png');"></div><div class="bouton"><div><?php if ($_SESSION["lang"] == "FR"){echo "Mini-jeux";}else if ($_SESSION["lang"] == "EN"){ echo "Mini games";} ?></div><a href="jeux.php"></a></div></div>
                <div class="rubrique"><div class="img" style="background-image: url('./img/accueil/article.png');"></div><div class="bouton"><div><?php if ($_SESSION["lang"] == "FR"){echo "Articles";}else if ($_SESSION["lang"] == "EN"){ echo "Articles";} ?></div></div><a href="articles.php"></a></div>
                <div class="rubrique"><div class="img" style="background-image: url('./img/accueil/quiz.png');"></div><div class="bouton"><div><?php if ($_SESSION["lang"] == "FR"){echo "Les quiz";}else if ($_SESSION["lang"] == "EN"){ echo "All quizes";} ?></div><a href="quizes.php"></a></div></div>
            </div>
        </section>
    </div>


<?php
?> 
<script>
    function langChange(langue){
        let form = document.createElement("form");
        let element = document.createElement("input"); 

        form.method = "POST";
        form.action = "changeLang.php";   

        element.value= langue;
        element.name="lang";
        form.appendChild(element);  

        // console.log(langue);
        document.body.appendChild(form);

        form.submit();
    }
</script>
<script src="home.js"></script>
</body>
</html>