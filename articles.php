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
    include "header.php"
?>

    <div class="listeArticles">
        <div><h1>Articles</h1></div>
        <div class="liste">
            <?php
                $stmt = $db->query("SELECT * FROM article_enfant ORDER BY date_E DESC");
                


                $result = $stmt -> fetchAll(PDO::FETCH_ASSOC);


                foreach ($result as $row){
                    $idTexte = $row["ext_id_texte_titre_E"];
                    echo $idTexte;
                    includeWithVariables('texte.php', array('id' => $idTexte));
                    
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