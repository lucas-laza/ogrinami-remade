<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ogrinami</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>

<?php
    include "PDO.php";
    include "header.php";
?>

    <div class="quizes">
        <div><h1>Quiz</h1></div>
        <div class="liste">
            <?php
                $stmt = $db->query("SELECT * FROM quizzstart ORDER BY id_quizzstart DESC");
                


                $result = $stmt -> fetchAll(PDO::FETCH_ASSOC);


                foreach ($result as $row){
                    // $idTexte = $row["ext_id_texte_titre_E"];
                    $idQ = $row["id_quizzstart"];
        
                    // echo $idTexte;
                    // echo "<div class='listchild' style=\"background-image: url('http://www.ogrinami.com/img/quiz/$idR/1.jpg')\">";
                    echo "<div class='listchild'>";
                    echo "<a href='quizz.php?id=$idQ'></a>";
                    echo "<h1>";
                    if ($_SESSION["lang"] == "FR"){echo $row["titre_quizz_FR"];}else if ($_SESSION["lang"] == "EN"){ echo $row["titre_quizz_EN"]; } 
                    echo "</h1>";
                    
                    echo "</div>";
                    
                }



function includeWithVariables($filePath, $variables = array(), $print = true)
{
    $output = NULL;
    if(file_exists($filePath)){
        // Extract the variables to a local namespace
        extract($variables);

        // Start output buffering
        ob_start();

        // Include the template file
        include $filePath;

        // End buffering and return its contents
        $output = ob_get_clean();
    }
    if ($print) {
        print $output;
    }
    return $output;

}
            ?>
        </div>
    </div>
  
</body>
</html>