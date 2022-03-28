<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="img/Ogrinami-logo-green.svg" type="image/x-icon">
    <link rel="stylesheet" href="styles/style.css">
    <title>Ogrinami</title>
</head>
<body>

    <?php include "header.php" ?>

    <div class="games">
        <a href="./games/planetClicker/">
            <div class="game">
                <div class="img" style="background-image: url('./img/games/planet.png');"></div>
                <h2>Planet Clicker</h2>
            </div>
        </a>

        <a href="./games/differences/">
            <div class="game">
                <div class="img" style="background-image: url('./img/games/diff.png');"></div>
                <h2><?php if ($_SESSION["lang"] == "FR"){echo "Le jeu des différences";} else {echo "The differences game";} ?></h2>
            </div>
        </a>

        <a href="./games/shooter/">
            <div class="game">
                <div class="img" style="background-image: url('./img/games/shooter.png');"></div>
                <h2>Ogrinami shooter</h2>
            </div>
        </a>    
    </div>
    
</body>
</html>