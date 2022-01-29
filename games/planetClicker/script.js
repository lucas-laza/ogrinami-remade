//definitions des variables
let svg = d3.select("svg");

//variables globales



// if (localStorage.getItem('clicker') == true){
    
// } else {
    localStorage.setItem('clicker', true);;
    let compteur = 0;
    
    
    let money = 0;
    localStorage.setItem('money', money);
    let total = 0;
    localStorage.setItem('total', total);
    
    let gain = 10;
    localStorage.setItem('gain', gain);
    let gainLVL = 1;
    localStorage.setItem('gainLVL', gainLVL);
    let upgainPrice = 100;
    localStorage.setItem('upgainPrice', upgainPrice);
    
    let upclickPrice = 200;
    localStorage.setItem('upclickPrice', upclickPrice);
    let clickLVL = 0;
    localStorage.setItem('clickLVL', clickLVL);
    
    let upbuchePrice = 500;
    localStorage.setItem('upbuchePrice', upbuchePrice);
    let bucheLVL = 0;
    localStorage.setItem('bucheLVL', bucheLVL);
    
    let upminePrice = 50000;
    localStorage.setItem('upminePrice', upminePrice);
    let mineLVL = 0;
    localStorage.setItem('mineLVL', mineLVL);
    
    let upusinePrice = 400000;
    localStorage.setItem('upusinePrice', upusinePrice);
    let usineLVL = 0;
    localStorage.setItem('usineLVL', usineLVL);
    
    let uppetrolePrice = 3000000;
    localStorage.setItem('uppetrolePrice', uppetrolePrice);
    let petroleLVL = 0;
    localStorage.setItem('petroleLVL', petroleLVL);
// }


d3.select(".param div").on("click",function(){
    localStorage.clear();
})



let game = true;

//tableaux
let joueur = [];


let fumes = [{x: 210,
    y: 50,
    stop: false
}]




console.log("ENTRAINEMENT");

window.addEventListener('touchstart', function() {
    d3.select(".cursor").style("display","none");
});


d3.select(".game").on("mousemove", function(e){
    console.log("z")
    let pointer = d3.pointer(e);
    d3.select(".cursor").style("top",pointer[1]+"px").style("left",pointer[0]+"px");
})

//On dessine notre jeu


    //infos sur le score 
d3.select(".clicker_container")
    .append("div")
    .attr("class","infos")
    
d3.select(".infos")
    .append("div")
    .attr("class","money")
    .html(`Argent: ${money}`) 
    .style("background-color","#00aaff")
    .style("padding","1vw")
    .style("font-size","2rem");
d3.select(".infos")
    .append("div")
    .attr("class","total")
    .html(`score: ${total}`) 
    .style("background-color","#00aaff")
    .style("padding","1vw")
    .style("font-size","2rem");

//création du joueur
svg.select(".Gclicker")
    .append("circle")
    .attr('fill', 'blue')
    .attr('class', 'clicker')
    .attr("transform", `translate(-50%,-50%)`)
    .attr("r", "25")
    .attr("cx", "50")
    .attr("cy", "50");



    d3.select(".i1")
    .append("div")
    .attr("class","gain")
    .html(`$ par click: ${nbr(gain)}`)






//dessin des projetils et ennemies
//fonction qui actualise le DOM, elle est souvent appellée pour dessiner les nouveaux ennemies et nouveaux projectils créés. 
// la fonction actualise également le score 
function update_DOM() {

    
    svg
        .select(".Gfume")
        .selectAll(".fume")
        .data(fumes)
        .enter()
        .append("circle")
        .attr("class", "fume")
        .attr("fill", "#55555555")
        .attr("cx", "0")
        .attr("cy", "0");
        if (total < 1000){
            d3.selectAll(".fume") 
            .attr("r", "1");
        } else if (total > 1000 && total < 10000) {
            d3.selectAll(".fume") 
            .attr("r", "2");
        }else if (total > 10000 && total < 100000) {
            d3.selectAll(".fume") 
            .attr("r", "3");
        }else if (total > 100000 && total < 4000000) {
            d3.selectAll(".fume") 
            .attr("r", "4");
        }else if (total > 4000000 && total < 1100000) {
            d3.selectAll(".fume") 
            .attr("r", "5");
        }else if (total > 11000000 && total < 30000000) {
            d3.selectAll(".fume") 
            .attr("r", "7");
        }else if (total > 30000000 && total < 100000000) {
            d3.selectAll(".fume") 
            .attr("r", "9");
        }else if (total > 100000000 && total < 200000000) {
            d3.selectAll(".fume") 
            .attr("r", "11");
        } else {
            d3.selectAll(".fume") 
            .attr("r", "15");
        }
       


        d3.select(".money")
    .html(`Argent: ${nbr(money)}$`);
    


    d3.select(".click")
                .html(`Robot clicker : <br> ${Math.floor((0.1 * clickLVL) *100)/100} clicks par seconde -> ${nbr(gain / (10 / clickLVL))} $/seconde`);
    

    

    if ( total >= 1500){
        d3.select(".total")
        .style("color","gold")
        .style("background-color","royalBlue")
    .html(`score: ${nbr(total)}$`);
    } else if (total >= 750) {
        d3.select(".total")
        .style("color","silver")
        .style("background-color","indigo")

    .html(`score: ${nbr(total)}$`);
    } else if ( total >= 250) {
        d3.select(".total")
        .style("color","maroon")
        .style("background-color","ivory")
    .html(`score: ${nbr(total)}$`);
    } else {
        d3.select(".total")
        .style("color","black")
        .style("background-color","teal")
    .html(`score: ${nbr(total)}$`);
    }

    d3.select(".upgain")
        .html(`Améliorer le gain de $ par click pour ${nbr(upgainPrice)}$`);


        if (clickLVL == 0){
            d3.select(".upclick")
        .html(`Acheter un robot clicker pour ${upclickPrice}$.`);

        }
        else if (clickLVL < 50){
            d3.select(".upclick")
        .html(`Améliorer le nombre de cliques par seconde du robot pour ${nbr(upclickPrice)}$.`);

        } else {
            d3.select(".upclick")
        .html(`Le robot clicker est qmélioré au MAX, niveau 50.`);

        }

        
        if(bucheLVL == 0){
            d3.select(".upbuche")
        .html(`Construire une cabane de bucheron pour ${nbr(upbuchePrice)}$.`);
        } else if (bucheLVL < 10){
            d3.select(".upbuche")
        .html(`Améliorer la cabane de bucheron au niveau ${bucheLVL+1} pour ${nbr(upbuchePrice)}$.`);

        } else {
            d3.select(".upbuche")
        .html(`Cabane de bucheron améliorée au MAX.`);

        }

        if(mineLVL == 0){
            d3.select(".upmine")
        .html(`Construire une mine de charbon pour ${nbr(upminePrice)}$.`);
        } else if (mineLVL < 10){
            d3.select(".upmine")
        .html(`Améliorer la mine de charbon au niveau ${mineLVL+1} pour ${nbr(upminePrice)}$.`);

        } else {
            d3.select(".upmine")
        .html(`Mine de charbon améliorée au MAX.`);

        }

        if(usineLVL == 0){
            d3.select(".upusine")
        .html(`Construire une usine de produits chimiques pour ${nbr(upusinePrice)}$.`);
        } else if (usineLVL < 10){
            d3.select(".upusine")
        .html(`Améliorer la usine de produits chimiques au niveau ${usineLVL+1} pour ${nbr(upusinePrice)}$.`);

        } else {
            d3.select(".upusine")
        .html(`Usine de produits chimiques améliorée au MAX.`);

        }

        if(petroleLVL == 0){
            d3.select(".uppetrole")
        .html(`Construire une raffinerie petrolière pour ${nbr(uppetrolePrice)}$.`);
        } else if (petroleLVL < 10){
            d3.select(".uppetrole")
        .html(`Améliorer une raffinerie petrolière au niveau ${petroleLVL+1} pour ${nbr(uppetrolePrice)}$.`);

        } else {
            d3.select(".uppetrole")
        .html(`Raffinerie petrolière améliorée au MAX.`);

        }
    

    


    

    updateTransforms();

    // console.log("update DOM")


}
update_DOM();

d3.select(".clicker")
    .on("click", function () {
        addClick(gain,true);
        d3.select(".clicker").transition().duration(100).ease(d3.easeCubic).style("transform","scale(0.9)").transition().duration(100).ease(d3.easeCubic).style("transform","scale(1)")
    });



function addClick(g,bool){
    money += g;
    total += g;
    // console.log("CLIQUEEEE")

    if (bool == true){
        pushFumes(1);
    }
    

    update_DOM();
}

function pushFumes(i){

    if (document.visibilityState === 'visible') {
        if (fumes.length < 40){
            if (i < 1){
                randomNumber = Math.random();
                if (randomNumber < i){
                    let random = Math.floor((Math.random() * 85) + 5);
                    fumes.push({
                        x: random,
                        y: 105,  
                        
                    });
                }

            } else if (i < 10){
                for (let index = i; index > 0; index--) {
                    let random = Math.floor((Math.random() * 85) + 5);
                    fumes.push({
                        x: random,
                        y: 105,  
                        
                    }); 
                }
            }
        } 
} 
    update_DOM();
    
}

d3.select(".upgain")
    .on("click", function () {
        upgain();
    });

function upgain(){
    if (money >= upgainPrice){
        gain = gain * 2;
    money -= upgainPrice;
        if (gain <= 80){
            upgainPrice = upgainPrice * 10;
        } else {
            upgainPrice = upgainPrice * 2;
        }

        d3.select(".gain")
            .html(`$ par click: ${nbr(gain)}`)


            gainLVL++;
    if (gainLVL == 2){
        d3.select(".cursor").style("background-image","url('wood.png')");
    }else if (gainLVL == 3){
        d3.select(".cursor").style("background-image","url('silex.png')");
    }else if (gainLVL == 4){
        d3.select(".cursor").style("background-image","url('stone.png')");
    }else if (gainLVL == 5){
        d3.select(".cursor").style("background-image","url('bronze.png')");
    }else if (gainLVL == 6){
        d3.select(".cursor").style("background-image","url('silver.png')");
    }else if (gainLVL == 7){
        d3.select(".cursor").style("background-image","url('gold.png')");
    }else if (gainLVL == 8){
        d3.select(".cursor").style("background-image","url('cristal1.png')");
    }else if (gainLVL == 9){
        d3.select(".cursor").style("background-image","url('cristal2.png')");
    }else if (gainLVL == 10){
        d3.select(".cursor").style("background-image","url('cristal3.png')");
    }else if (gainLVL == 11){
        d3.select(".cursor").style("background-image","url('cristal4.png')");
    }else if (gainLVL == 12){
        d3.select(".cursor").style("background-image","url('cristal5.png')");
    }
    
    } else if (money < upgainPrice) {
        console.log("PAS DE THUNES")
    }
    
    update_DOM();
}


d3.select(".upclick")
.on("click", function () {
    if (clickLVL < 50){
        upclick();
    }

});


d3.select(".upbuche")
.on("click", function () {
    if (bucheLVL < 10){
        upbuche();
    }

});

d3.select(".upmine")
.on("click", function () {
    if (mineLVL < 10){
        upmine();
    }

    
});

d3.select(".upusine")
.on("click", function () {
    if (usineLVL < 10){
        upusine();
    }

});

d3.select(".uppetrole")
.on("click", function () {
    if (petroleLVL < 10){
        uppetrole();
    }

});

function upclick(){
    if (money >= upclickPrice){
        clickLVL += 1;
        money -= upclickPrice;
        upclickPrice = Math.floor(upclickPrice * 1.5);
        
        if (clickLVL == 1){
            d3.select(".i1")
            .append("div")
            .attr("class","click")
            .html(`Click niveau:${clickLVL} -> ${gain / (10 / clickLVL)} $/seconde`);
        } else if (clickLVL > 1 && clickLVL < 50) {
            d3.select(".click")
                .html(`Click niveau:${clickLVL} -> ${gain / (10 / clickLVL)} $/seconde`);
        } else if (clickLVL == 50){
            d3.select(".click")
                .html(`MAX`);
        }
        clearInterval(clickInter);
        if (clickLVL != 0){
            clickInter = setInterval(clickthunes, 1000);
        } 
        
        // ${gain / (10 / clickLVL)}

    } else if (money < upclickPrice) {
        console.log("PAS DE THUNES")
    }
    update_DOM();
}

let clickInter;

function clickthunes(){
    addClick(gain / (10 / clickLVL),true)
}




function upbuche(){
    if (money >= upbuchePrice){
        bucheLVL += 1;
        money -= upbuchePrice;
        upbuchePrice = upbuchePrice * 2;
        if (bucheLVL == 1){
            d3.select(".i2")
            .append("div")
            .attr("class","buche")
            .html(`Cabane de bûcheron: <br> Niveau ${bucheLVL}.`);

        } else if (bucheLVL > 1 && bucheLVL < 10) {
            d3.select(".buche")
                .html(`Cabane de bûcheron: <br> Niveau ${bucheLVL}.`);
        } else if (bucheLVL == 10){
            d3.select(".buche")
                .html(`Cabane de bûcheron: <br> Niveau MAX.`);
        }
        clearInterval(bucheInter);
        bucheInter = setInterval(buchethunes, 10000);

        if (bucheLVL > 0){
            if (bucheLVL < 4){
                document.querySelector(".buche").innerHTML += `<br>${250 * bucheLVL}$ toutes les 10s.`
                document.querySelector(".buche").innerHTML += `<br>(soit ${(250 * bucheLVL)/10}$ par seconde).`
                addClick(250 * bucheLVL,false);
                
           
            } else if (bucheLVL < 7) {
                document.querySelector(".buche").innerHTML += `<br>${500 * bucheLVL}$ toutes les 10s.`
                document.querySelector(".buche").innerHTML += `<br>(soit ${(500 * bucheLVL)/10}$ par seconde).`
                addClick(500 * bucheLVL,false);
           
            } else {
                addClick(750 * bucheLVL,false);
                document.querySelector(".buche").innerHTML += `<br>${750 * bucheLVL}$ toutes les 10s.`
                document.querySelector(".buche").innerHTML += `<br>(soit ${(750 * bucheLVL)/10}$ par seconde).`
            
            }
    
    } else if (money < upbuchePrice) {
        console.log("PAS DE THUNES")
    }

    
        
        
    }
    update_DOM();
}

let bucheInter = setInterval(buchethunes, 10000);

function buchethunes(){
    if (bucheLVL > 0){
        if (bucheLVL < 4){
            addClick(250 * bucheLVL,false);
            
        // console.log("buche")
        } else if (bucheLVL < 7) {
            addClick(500 * bucheLVL,false);
        // console.log("buche")
        } else {
            addClick(750 * bucheLVL,false);
        // console.log("buche")
        }

        pushFumes(bucheLVL);
        
    }
}


function upmine(){
    if (money >= upminePrice){
        mineLVL += 1;
        money -= upminePrice;
        upminePrice = upminePrice * 2;
        if (mineLVL == 1){
            d3.select(".i2")
            .append("div")
            .attr("class","mine")
            .html(`Mine de charbon: <br> niveau ${mineLVL}.`)
        } else if (mineLVL > 1 && mineLVL < 10) {
            d3.select(".mine")
                .html(`Mine de charbon: <br> niveau ${mineLVL}.`);
        } else if (mineLVL == 10){
            d3.select(".mine")
                .html(`Mine de charbon: <br> niveau MAX.`);
        }
        clearInterval(mineInter);
        mineInter = setInterval(minethunes, 5000);

        if (mineLVL > 0){
            if (mineLVL < 4){
                addClick(3000 * mineLVL,false);
                document.querySelector(".mine").innerHTML += `<br>${3000 * mineLVL}$ toutes les 5s.`
                document.querySelector(".mine").innerHTML += `<br>(soit ${(3000 * mineLVL)/5}$ par seconde).`
            console.log("mine")
            } else if (mineLVL < 7) {
                addClick(4000 * mineLVL,false);
                document.querySelector(".mine").innerHTML += `<br>${4000 * mineLVL}$ toutes les 5s.`
                document.querySelector(".mine").innerHTML += `<br>(soit ${(4000 * mineLVL)/5}$ par seconde).`
            console.log("mine")
            } else {
                addClick(5500 * mineLVL,false);
                document.querySelector(".mine").innerHTML += `<br>${5500 * mineLVL}$ toutes les 5s.`
                document.querySelector(".mine").innerHTML += `<br>(soit ${(5500 * mineLVL)/5}$ par seconde).`
            console.log("mine")
            }
            
        }

    } else if (money < upminePrice) {
        console.log("PAS DE THUNES")
    }
    update_DOM();
}

let mineInter = setInterval(minethunes, 5000);

function minethunes(){
    if (mineLVL > 0){
        if (mineLVL < 4){
            addClick(3000 * mineLVL,false);
        // console.log("mine")
        } else if (mineLVL < 7) {
            addClick(4000 * mineLVL,false);
        // console.log("mine")
        } else {
            addClick(5500 * mineLVL,false);
        // console.log("mine")
        }
        
        pushFumes(mineLVL*2);
    }
}



function upusine(){
    if (money >= upusinePrice){
        usineLVL += 1;
        money -= upusinePrice;
        upusinePrice = upusinePrice * 2;
        let usineInter = setInterval(usinethunes, 500);
        clearInterval(usineInter);
        
        if (usineLVL == 1){
            d3.select(".i2")
            .append("div")
            .attr("class","usine")
            d3.select(".usine").html(`Usine de produits chimiques: <br> niveau ${usineLVL}`)
            usineInter = setInterval(usinethunes, 500);
        } else if (usineLVL > 1 && usineLVL < 5) {
            d3.select(".usine").html(`Usine de produits chimiques: <br> niveau ${usineLVL}`)
            
            usineInter = setInterval(usinethunes, 450);
        } else if (usineLVL > 5 && usineLVL < 10) {
            d3.select(".usine").html(`Usine de produits chimiques: <br> niveau ${usineLVL}`)
            
                usineInter = setInterval(usinethunes, 400);
        
        } else if (usineLVL == 10){
            d3.select(".usine").html(`Usine de produits chimiques: <br> niveau MAX`)
            
                usineInter = setInterval(usinethunes, 350);
        }
        
        if (usineLVL > 0){
            if (usineLVL < 2){
                addClick(250 * usineLVL,false);
                // d3.select(".usine")
                // .html(`${usineLVL}`);
                document.querySelector(".usine").innerHTML += `<br>${Math.floor((1500 * usineLVL)*2)}$ toutes les secondes.`
            console.log("usine")

            } else if (usineLVL < 5) {
                addClick(250 * usineLVL,false);
                // d3.select(".usine")
                // .html(`${usineLVL}`);
                document.querySelector(".usine").innerHTML += `<br>${Math.floor((1500 * usineLVL)*2.22222)}$ toutes les secondes.`
            console.log("usine")

            } else if (usineLVL < 7) {
                addClick(500 * usineLVL,false);
                // d3.select(".usine")
                // .html(`${usineLVL}`);
                document.querySelector(".usine").innerHTML += `<br>${Math.floor((1750 * usineLVL)*2.5)}$ toutes les secondes.`
            console.log("usine")
            } else if (usineLVL < 10) {
                addClick(750 * usineLVL,false);
                // d3.select(".usine")
                // .html(`${usineLVL}`);
                document.querySelector(".usine").innerHTML += `<br>${Math.floor((2000 * usineLVL)*2.5)}$ toutes les secondes.`
            console.log("usine")
            } else {
                addClick(750 * usineLVL,false);
                // d3.select(".usine")
                // .html(`${usineLVL}`);
                document.querySelector(".usine").innerHTML += `<br>${Math.floor((2000 * usineLVL)*2.85)}$ toutes les secondes.`
            console.log("usine")
            }
    
            
            
        }
        
    } else if (money < upusinePrice) {
        console.log("PAS DE THUNES")
    }
    update_DOM();
}



function usinethunes(){
    if (usineLVL > 0){
        if (usineLVL < 4){
            addClick(1500 * usineLVL,false);
        // console.log("usine")
        } else if (usineLVL < 7) {
            addClick(1750 * usineLVL,false);
        // console.log("usine")
        } else {
            addClick(2000 * usineLVL,false);
        // console.log("usine")
        }

        pushFumes((0.35 + (usineLVL/50)));
        // pushFumes(0.1);
        
    }
}

function uppetrole(){
    if (money >= uppetrolePrice){
        petroleLVL += 1;
        money -= uppetrolePrice;
        uppetrolePrice = uppetrolePrice * 2;
        let petroleInter = setInterval(petrolethunes, 250);
        clearInterval(petroleInter);
        if (petroleLVL == 1){
            d3.select(".i2")
            .append("div")
            .attr("class","petrole")
            // .html(`${petroleLVL}`)
            d3.select(".petrole").html(`Raffinerie petrolière: <br> niveau ${petroleLVL}`);
            petroleInter = setInterval(petrolethunes, 500);
        } else if (petroleLVL > 1 && petroleLVL < 5) {
            // d3.select(".petrole")
            //     .html(`${petroleLVL}`);
                petroleInter = setInterval(petrolethunes, 450);
                d3.select(".petrole").html(`Raffinerie petrolière: <br> niveau ${petroleLVL}`);

        } else if (petroleLVL > 5 && petroleLVL < 10) {
            // d3.select(".petrole")
            //     .html(`${petroleLVL}`);
                petroleInter = setInterval(petrolethunes, 400);
                d3.select(".petrole").html(`Raffinerie petrolière: <br> niveau ${petroleLVL}`);
        } else if (petroleLVL == 10){
            // d3.select(".petrole")
            //     .html(`MAX`);
                petroleInter = setInterval(petrolethunes, 320);
                d3.select(".petrole").html(`Raffinerie petrolière: <br> niveau ${petroleLVL}`);
        }

        if (petroleLVL > 0){
            if (petroleLVL < 4){
                addClick(5000 * petroleLVL,false);
                document.querySelector(".petrole").innerHTML += `<br>${(5000 *petroleLVL)*4}$ toutes les secondes.`
            console.log("petrole")
            } else if (petroleLVL < 7) {
                addClick(9000 * petroleLVL,false);
                document.querySelector(".petrole").innerHTML += `<br>${(9000 *petroleLVL)*4}$ toutes les secondes.`
            console.log("petrole")
            } else {
                addClick(20000 * petroleLVL,false);
                document.querySelector(".petrole").innerHTML += `<br>${(20000 *petroleLVL)*4}$ toutes les secondes.`
            console.log("petrole")
            }
            
        }
        
        
    } else if (money < uppetrolePrice) {
        console.log("PAS DE THUNES")
    }
    update_DOM();
}



function petrolethunes(){
    if (petroleLVL > 0){
        if (petroleLVL < 4){
            addClick(5000 * petroleLVL,false);
        // console.log("petrole")
        } else if (petroleLVL < 7) {
            addClick(9000 * petroleLVL,false);
        // console.log("petrole")
        } else {
            addClick(20000 * petroleLVL,false);
        // console.log("petrole")
        }
        
    }
    pushFumes((0.45 + (petroleLVL/50)));
}

//Fonction appellée souvent pour actualier la position des dessins d'ennemies et projectils en fonction de leurs nouvelles coordonnées dans le tableau.
function updateTransforms() {
    // console.log("update transforms")

   
    svg
        .selectAll(".fume")
        .attr("transform", d => `translate(${d.x}, ${d.y})`);

}



function nbr(x) {
    var parts = x.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return parts.join(",");
    }


function mouvementfume() {


    fumes.forEach(d=>{        
         
            d.y += -0.5;
        
        //on test si un fume à touché la zone du joueur
    
        updateTransforms();
        // console.log("pas touche")

    });

    fumes = fumes.filter(d => (d.y > -10));

 
    
}




//suppression des images qui n'ont pas de correspondance dans le tableau





setInterval(mouvementfume, 5);










