<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="img/Ogrinami-logo-green.svg" type="image/x-icon">
    <title>Ogrinami</title>

    <link rel="stylesheet" href="styles/style.css">
</head>
<body>

    <?php 

    require "PDO.php";
    

// session_start();

require "header.php";


if (!isset($_SESSION["lang"])){
    $_SESSION["lang"] = "FR";
}



if (isset($_GET["id"])){
    $id = $_GET["id"];
    $idQ = $_GET["q"];
    
    if (!isset($_GET["q"])){
        $idQ = 0;
    }

    if ($idQ != 0){
        $stmt = $db->query("SELECT * FROM question WHERE $idQ = id_Q");
        $result = $stmt -> fetch(PDO::FETCH_ASSOC);

        if ($result["Fin"] == 0){


            ?>
        
            <div class="quiz_container">
                <div class="quiz">
                    <div class="bckg">
                        <div class="questionBox"><?php if ($_SESSION["lang"] == "FR"){echo $result["Q_quest_FR"];} else if ($_SESSION["lang"] == "EN"){echo $result["Q_quest_EN"];}?></div>
                    </div>
                    <div class="reponses">
                        <a href="quiz.php?id=<?php echo $id . "&q=" .$result["ext_id_Q_R1"]?>"><div class="rep r1"><?php if ($_SESSION["lang"] == "FR"){echo $result["Q_texte_R1_FR"];} else if ($_SESSION["lang"] == "EN"){echo $result["Q_texte_R1_EN"];}?></div></a>
                        <a href="quiz.php?id=<?php echo $id . "&q=" .$result["ext_id_Q_R2"]?>"><div class="rep r2"><?php if ($_SESSION["lang"] == "FR"){echo $result["Q_texte_R2_FR"];} else if ($_SESSION["lang"] == "EN"){echo $result["Q_texte_R2_EN"];}?></div></a>
                    </div>
                </div>
            </div>
            <?php } else {
                $idF = $result["Fin"];
                $stmt = $db->query("SELECT * FROM finquizz WHERE $idF = id_fin");
                $result = $stmt -> fetch(PDO::FETCH_ASSOC);
                ?>
                    <div class="finquiz_container">
            <div class="finquiz">
                
                <div class="fq_img"><div class="fq_titre"><?php if ($_SESSION["lang"] == "FR"){echo $result["titre_fin_FR"];} else if ($_SESSION["lang"] == "EN"){echo $result["titre_fin_EN"];}?></div></div>

                <div class="fq_para"><div><?php if ($_SESSION["lang"] == "FR"){echo $result["para_fin_FR"];} else if ($_SESSION["lang"] == "EN"){echo $result["para_fin_EN"];}?></div>
                <a href="quiz.php?id=<?php echo $result["ext_id_quizz"] . "&q=0" ?>"><div class="rep r2"><?php if ($_SESSION["lang"] == "FR"){echo "Recommencer le quiz !";} else if ($_SESSION["lang"] == "EN"){echo "Retake the quiz !";}?></div></a></div>
                

            </div>
        </div>
                <?php
            }
            
    } else{
        $stmt = $db->query("SELECT * FROM quizzstart WHERE $id = id_quizzstart");
        $result = $stmt -> fetch(PDO::FETCH_ASSOC);
        $idFQ = $result["ext_id_firstQ"]


        ?>

        <div class="quizstart_container">
            <div class="quizstart">
                <div class="qs_titre"><?php if ($_SESSION["lang"] == "FR"){echo $result["titre_quizz_FR"];} else if ($_SESSION["lang"] == "EN"){echo $result["titre_quizz_EN"];}?></div>
                <div class="qs_desc"><?php if ($_SESSION["lang"] == "FR"){echo $result["desc_quizz_FR"];} else if ($_SESSION["lang"] == "EN"){echo $result["desc_quizz_EN"];}?></div>
                <div class="qs_img"><a href="quiz.php?id=<?php echo $id . "&q=" . $idFQ ?>"><div class="rep r2"><?php if ($_SESSION["lang"] == "FR"){echo "Faire le quiz !";} else if ($_SESSION["lang"] == "EN"){echo "Take the quiz !";}?></div></a></div>
            </div>
        </div>

   <?php }
    

}

?>
</body>
</html>