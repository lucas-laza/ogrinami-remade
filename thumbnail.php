<?php

include "PDO.php";

$style = "background-img: url('http://www.ogrinami.com/img/article/$id/1.jpg')";




echo "
<div class='thumbnail'>

            
            <div class='TB_BG' style='$style '>
                    <div class='B_title' >
                    <h1><Texte id={texte.ext_id_texte_titre_E} /></h1>
                    </div>
            </div>

            
               
                
                        <h4>{texte.pays_E}: Article du {texte.date_E}.</h4>
                
                
            

        </div> "
        ?>