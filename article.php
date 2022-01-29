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
session_unset();
require "PDO.php";



if (isset($_GET["id"])){
    $article = $_GET["id"];
    $stmt = $db->query("SELECT * FROM article_enfant WHERE $article = id_article_E");

    $result = $stmt -> fetch(PDO::FETCH_ASSOC);

}

$styleIMG1 = " background-image:url('http://www.ogrinami.com/img/article/$article/1.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;";

$styleIMG3 = " background-image:url('http://www.ogrinami.com/img/article/$article/3.jpg');
background-position: center;
background-size: cover;
background-repeat: no-repeat;";

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



<div class="article">
            <?php require "header.php" ?>
            <div class="container">
                    <div class="GC_title" >
                        <div class="background_title" style="<?php echo $styleIMG1; ?>">
                        
                            
                            <div class="text_title">
                                <h1>
                                    <?php $id = $result["ext_id_texte_titre_E"];
                                includeWithVariables('texte.php', array('id' => $id));
                                // echo $_SESSION["lang"];
?>
                                </h1>
                            </div>
                            
                        
                        </div>
                        
                    </div>

                    
                        <div class="GC_intro">

                            <div>
                                <h2 class="ecout">
                            <?php if($_SESSION["lang"] == "FR"){
                                echo "Écouter l'article ?" ;
                            } else if ($_SESSION["lang"] == "EN"){
                                    echo "Listen to the article:";
                                } ?>
                                </h2>
                                <br>

                                <div class="audio">
                                <audio controls>
                                    <source src="voixoff/<?php echo $_GET["id"]; ?>.mp3" type="audio/mpeg">
                                    <source src="voixoff/<?php echo $_GET["id"]; ?>.ogg" type="audio/ogg">
                                </audio>
                                </div>
                            </div>

                            <div class="p">
                            
                            
                            <h3>

                            <?php if($_SESSION["lang"] == "FR"){
                                echo "Lieu: " ;
                            } else if ($_SESSION["lang"] == "EN"){
                                    echo "Place: ";
                                }
                                $id = $result["ext_id_pays_E"];
                                includeWithVariables('texte.php', array('id' => $id));      ?>
                            </h3>
                            
                        
                                
                                <?php $id = $result["ext_id_texte_intro_E"];
        includeWithVariables('texte.php', array('id' => $id));
?>
                            
                            </div>
                        </div>
                    

                    <div class="GC_part1">

                        <div class="box_title BT_P1">
                        
                            <h2>

                            <?php $id = $result["ext_id_titre_P1_E"];
        includeWithVariables('texte.php', array('id' => $id));
?>
                            </h2>
                            
                        
                        </div>

                        
                            <div class="box_P BP_P1">
                                <p>
                                    <?php $id = $result["ext_id_texte_P1_E"];
        includeWithVariables('texte.php', array('id' => $id));
?>
                                </p>
                                
                            </div>
                            
                        

                        
                        
                            <picture class="illus illus1">
                    <source srcset="img/article/<?php echo $_GET["id"]; ?>/2G.png" media="(min-width: 768px)" />
                    <source srcset="img/article/<?php echo $_GET["id"]; ?>/2.png" media="(max-width: 767px)" />
                    <img src="img/article/<?php echo $_GET["id"]; ?>/2.png" />
                    </picture>
                        <!-- <picture> </picture> -->
                        

                        
                        

                         

                        <div class="box_title BT_P2">
                        
                            <h2>

                            <?php $id = $result["ext_id_titre_P2_E"];
        includeWithVariables('texte.php', array('id' => $id));
?>
                            </h2>
                            
                        
                        </div>

                        
                            <div class="box_P BP_P2">
                                <p>
                                    <?php $id = $result["ext_id_texte_P2_E"];
        includeWithVariables('texte.php', array('id' => $id));
?>
                                </p>
                                
                            </div>
                            
                        
                           
                    </div>

                    <div class="GC_central_IMG" style="<?php echo $styleIMG3; ?>"></div>

                    <div class="GC_part2">

                        <div class="box_title BT_P3">
                        
                            <h2>

                            <?php $id = $result["ext_id_titre_P3_E"];
        includeWithVariables('texte.php', array('id' => $id));
?>
                            </h2>
                            
                        
                        </div>

                        
                            <div class="box_P BP_P3">
                                <p>
                                    <?php $id = $result["ext_id_texte_P3_E"];
        includeWithVariables('texte.php', array('id' => $id));
?>
                                </p>
                                
                            </div>
                            
                        

                        

                        
                        
                       

                        
                         <picture class="illus illus2">
                    <source srcset="img/article/<?php echo $_GET["id"]; ?>/4G.png" media="(min-width: 768px)" />
                    <source srcset="img/article/<?php echo $_GET["id"]; ?>/4.png" media="(max-width: 767px)" />
                    <img src="img/article/<?php echo $_GET["id"]; ?>/4.png" />
                    </picture>

                          <!-- <img class="illus illus2" src="http://www.ogrinami.com/img/article/<?php echo $_GET["id"]; ?>/4.png" alt="<?php $result['alt_IMG4_E']?>" -->
                        
                        

                    

                        <div class="box_title BT_P4">
                        
                            <h2>

                            <?php $id = $result["ext_id_titre_P4_E"];
        includeWithVariables('texte.php', array('id' => $id));
?>
                            </h2>
                            
                        
                        </div>

                        
                            <div class="box_P BP_P4">
                                <p>
                                    <?php $id = $result["ext_id_texte_P4_E"];
        includeWithVariables('texte.php', array('id' => $id));
?>
                                </p>
                                
                            </div>
                            
                        

                    <div class="pied">
                        
                            <h4><?php if($_SESSION["lang"] == "FR"){ echo "Article écrit par "; } else if($_SESSION["lang"] == "EN"){echo "Article writen by "; }  echo $result["auteur_E"]; if($_SESSION["lang"] == "FR"){ echo " le "; } else if($_SESSION["lang"] == "EN"){echo " the "; }  echo $result["date_E"]; ?></h4>
                        
                    </div>
                           
                    </div>

                    <div class="For_Parents">
                        <h3>Pour les parents:</h3>
                        <div class="For_P_Container">
                            <div class="Asso">
                  
                            <a href="parent.php">
                                
                            <div class="bouton">Associations partenaires</div>
                            <img src="img/article/1/2.png" alt="">
                            </a>
                            
                            </div>
                            <div class="Shop">
                          
                            <a href="shop.php">
                            <div class="bouton">Accéder à la boutique</div>
                            <img src="img/article/1/2.png" alt="">
                            </a>
                            </div>
                        </div>
                    </div>

                   

                    

                    

                    
                        <!-- <Recommandations id_R1={ext_id_article_recom1_E} id_R2={ext_id_article_recom2_E} id_R3={ext_id_article_recom3_E} /> -->
                        <div class="Recommandations">
                        <div class="thumbnail">
                        <?php $idR = $result["ext_id_article_recom1_E"];
                        $styleIMG_recom1 = "background-image: url('http://www.ogrinami.com/img/article/$idR/1.jpg');
                                            background-position: center;
                                            background-size: cover;
                                            background-repeat: no-repeat;";?>
                            <a href="article.php?id=<?php echo $idR; ?>">
                            <div class='TB_BG' style="<?php echo $styleIMG_recom1;?>">
                                <div class='TB_title'>
                                    <h1><?php 
                                     $stmt = $db->query("SELECT * FROM article_enfant WHERE $idR = id_article_E");
                                     $result = $stmt -> fetch(PDO::FETCH_ASSOC);
                                     $id = $result["ext_id_texte_titre_E"];
                                     $stmt = $db -> query("SELECT * FROM texte WHERE $id = id_texte");
                                    $result = $stmt -> fetch(PDO::FETCH_ASSOC);
                                    if ($_SESSION["lang"] == "FR"){
                                        echo $result["texte_FR"];
                                    } else if ($_SESSION["lang"] == "EN") {
                                        echo $result["texte_EN"];
                                    }
                                     ?></h1>
                                 </div>
                            </div>
                            </a>

                            <h4 class="recom_date" ><?php
                                     $stmt = $db->query("SELECT * FROM article_enfant WHERE $idR = id_article_E");
                                     $result = $stmt -> fetch(PDO::FETCH_ASSOC);
                                     $id = $result["ext_id_pays_E"];
                                includeWithVariables('texte.php', array('id' => $id));
                                if($_SESSION["lang"] == "FR"){
                                    echo ": article du " ;
                                } else if ($_SESSION["lang"] == "EN"){
                                        echo ": article from ";
                                    }
                                echo $result["date_E"];  ?></h4>
                        </div>
                        <div class="thumbnail">
                        <?php $idR = $result["ext_id_article_recom2_E"];
                        $styleIMG_recom2 = "background-image: url('http://www.ogrinami.com/img/article/$idR/1.jpg');
                                            background-position: center;
                                            background-size: cover;
                                            background-repeat: no-repeat;";?>
                            <a href="article.php?id=<?php echo $idR; ?>">
                            <div class='TB_BG' style="<?php echo $styleIMG_recom2;?>">
                                <div class='TB_title'>
                                    <h1><?php 
                                     $stmt = $db->query("SELECT * FROM article_enfant WHERE $idR = id_article_E");
                                     $result = $stmt -> fetch(PDO::FETCH_ASSOC);
                                     $id = $result["ext_id_texte_titre_E"];
                                     $stmt = $db -> query("SELECT * FROM texte WHERE $id = id_texte");
                                    $result = $stmt -> fetch(PDO::FETCH_ASSOC);
                                    if ($_SESSION["lang"] == "FR"){
                                        echo $result["texte_FR"];
                                    } else if ($_SESSION["lang"] == "EN") {
                                        echo $result["texte_EN"];
                                    }
                                     ?></h1>
                                 </div>
                            </div>
                            </a>

                            <h4 class="recom_date"><?php
                                     $stmt = $db->query("SELECT * FROM article_enfant WHERE $idR = id_article_E");
                                     $result = $stmt -> fetch(PDO::FETCH_ASSOC);
                                     $id = $result["ext_id_pays_E"];
                                includeWithVariables('texte.php', array('id' => $id));
                                if($_SESSION["lang"] == "FR"){
                                    echo ": article du " ;
                                } else if ($_SESSION["lang"] == "EN"){
                                        echo ": article from ";
                                    }
                                echo $result["date_E"];  ?></h4>
                        </div>
                        <div class="thumbnail">
                        <?php $idR = $result["ext_id_article_recom3_E"];
                        $styleIMG_recom3 = "background-image: url('http://www.ogrinami.com/img/article/$idR/1.jpg');
                                            background-position: center;
                                            background-size: cover;
                                            background-repeat: no-repeat;";?>
                            <a href="article.php?id=<?php echo $idR; ?>">
                            <div class='TB_BG' style="<?php echo $styleIMG_recom3;?>">
                                
                                <div class='TB_title'>
                                    <h1><?php 
                                     $stmt = $db->query("SELECT * FROM article_enfant WHERE $idR = id_article_E");
                                     $result = $stmt -> fetch(PDO::FETCH_ASSOC);
                                     $id = $result["ext_id_texte_titre_E"];
                                     $stmt = $db -> query("SELECT * FROM texte WHERE $id = id_texte");
                                    $result = $stmt -> fetch(PDO::FETCH_ASSOC);
                                    if ($_SESSION["lang"] == "FR"){
                                        echo $result["texte_FR"];
                                    } else if ($_SESSION["lang"] == "EN") {
                                        echo $result["texte_EN"];
                                    }
                                     ?></h1>
                                 </div>
                            </div>
                            </a>

                            <h4 class="recom_date"><?php
                                     $stmt = $db->query("SELECT * FROM article_enfant WHERE $idR = id_article_E");
                                     $result = $stmt -> fetch(PDO::FETCH_ASSOC);
                                     $id = $result["ext_id_pays_E"];
                                includeWithVariables('texte.php', array('id' => $id));
                                if($_SESSION["lang"] == "FR"){
                                    echo ": article du " ;
                                } else if ($_SESSION["lang"] == "EN"){
                                        echo ": article from ";
                                    }
                                echo $result["date_E"];  ?></h4>
                        </div>
                            
                        </div>
                    


                        <div class="Retour_Accueil">
                            <div class="Grinouille">
                                <div class="Grinouille_IMG">
                                <img class="earth" src="img/article/1/earth.png" alt="">
                                </div>
                            </div>
                            <div class="Retour_T">
                                <div>
                                    <h3>Tu t'es perdu ?</h3>
                                </div>
                                <a href="accueil.php">
                            <div class="bouton"><p>retour à l'accueil</p></div>
                                </a>
                            </div>
                        </div>
                    

                    
                    
                
            </div>


            


            <footer>
                
            </footer>
                

        </div>
    
</body>
</html>