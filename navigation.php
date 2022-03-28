<div class="navigation">

                <div></div>

                <div class="langswitch">
                    <form action="changeLang.php" method="POST">
                    <div><input type="radio" name="lang" onclick="javascript: submit()" value="FR" id="FR"> <?php if ($_SESSION["lang"] == "FR") { ?> <label for="FR" class="activeLang">Français</label> <?php }else{?> <label for="FR">Français</label> <?php } ?></div>
                    <div><input type="radio" name="lang" onclick="javascript: submit()" value="EN" id="EN"> <?php if ($_SESSION["lang"] == "EN") { ?> <label for="EN" class="activeLang">English</label> <?php }else{?> <label for="EN">English</label> <?php } ?></div>
                    <input type="hidden" name="idA" value="<?php $article ?>">
                    </form>
                </div>
            
                <a href="index.php"><?php if($_SESSION["lang"] == "FR"){ echo "Accueil"; } else if($_SESSION["lang"] == "EN"){echo "Home";} ?></a>
            

            
                <a href="articles.php"><?php if($_SESSION["lang"] == "FR"){ echo "Articles"; } else if($_SESSION["lang"] == "EN"){echo "Articles";} ?></a>

                <a href="quiz.php?id=1"><?php if($_SESSION["lang"] == "FR"){ echo "Les quiz"; } else if($_SESSION["lang"] == "EN"){echo "Quizes";} ?></a>
            

            
                <a href="jeux.php"><?php if($_SESSION["lang"] == "FR"){ echo "Mini-jeux"; } else if($_SESSION["lang"] == "EN"){echo "Mini games";} ?></a>
            

            
                <a href=""><?php if($_SESSION["lang"] == "FR"){ echo "À propos"; } else if($_SESSION["lang"] == "EN"){echo "About";} ?></a>
           

</div>