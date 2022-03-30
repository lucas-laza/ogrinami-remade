
/*********************** VARIABLES JEU *****************************/
let svg = d3.select("svg");
let pacman = d3.select("#arcade");
let mainlayer = svg.append("g")







let rect = d3.select("#zone_du_joueur"); 
var joueur = d3.select("#joueur")
var joueur = d3.select("#joueur"); 
var pacman_x; 
var pacman_y; 
var score = 100; 
var paused = false;



svg.append("use")
    .attr("id", "perso")
    .attr("href", "#joueur")
    .style("z-index", 2)

function positionPerso(e) {
    let pointer = d3.pointer(e);
    d3.select("#perso")
        .attr("x", pointer[0])
        .attr("y", pointer[1])
    pacman_x = pointer[0]
    pacman_y = pointer[1]
}

rect.on("mousemove", function (e) {
    positionPerso(e);
    joueur = [{ x: pacman_x, y: pacman_y }];
})  


let tir_pacman = []; 

function tirPacman() {
    if (paused != true) {
        tir_pacman.push({ x: pacman_x - 1, y: pacman_y - 4.5, vx: -1, vy: 0 })
    }
    createFruits();
}

function createFruits() {
    let lien = svg
        .selectAll(".tir_pacman")
        .data(tir_pacman);

    lien.enter()
        .append("use")
        .attr("class", "tir_pacman")
        .attr("href", "#tir_joueur");

    lien.exit()
        .remove();
    positionAttacks();
}

function positionAttacks() {
    svg.selectAll(".tir_pacman")
        .attr("transform", d => `translate(${d.x},${d.y})`);
}

function speedAttacks() {
    if (paused != true) {
        tir_pacman.forEach(d => {
            
            d.x += d.vx;
        })
    }

   
    if (deleteTab(tir_pacman, attacksPacman =>
        deleteTab(ennemis, fantome => distance(attacksPacman, fantome) < 8))) {  
        createFantome();
     
        document.querySelector('#points').innerHTML = score;
        score += 100;

    } else {
      
        positionAttacks();
    }
}

setInterval(tirPacman, 250);
setInterval(speedAttacks, 10);

let vie = 3; 

setInterval(function () {

    if (ennemis.every(endFantome));

    else {
        ennemis = ennemis.filter(endFantome);
        vie--;
    }

    if (vie == 2) {
        d3.select(".vie3").remove();
    }
    else if (vie == 1) {
        d3.select(".vie2").remove()
    }
    else if (vie == 0) {
        vie = -1;
        d3.select(".vie1").remove();
        setTimeout(() => { d3.select('#fin').style('display', 'flex'); paused = true; d3.select('#joueur'); }, 0);
    }
}, 20);

setInterval(spawnFantome, 1500);
setInterval(movementFantome, 40);


let ennemis = []; 


function spawnFantome() {
    if (paused != true) {
        ennemis.push({ x: -18, y: entierAlea(10, 80), vx: 1, vy: 0 })
        createFantome();
    }
}

function createFantome() {
    let lien2 = svg
        .selectAll(".ennemi")
        .data(ennemis);

    lien2.enter()
        .append("use")
        .attr("class", "ennemi")
        .attr("href", "#ennemis");
 

    lien2.exit()
        .remove();
    moveFantome();
}



function endFantome(d) {
    return d.x < 90;
}

function moveFantome() {
    svg.selectAll(".ennemi")
        .attr("transform", d => `translate(${d.x},${d.y})`);
}

function movementFantome() {
    if (paused != true) {
        ennemis.forEach(d => {
           
            d.x += d.vx;
        })
    }
    moveFantome();
}




function entierAlea(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function angle(x, y) {
    return Math.atan2(y, x) * 180 / Math.PI;
}
function distance(a, b) {
    let dx = a.x - b.x;
    let dy = (a.y - b.y) * 2;
    return Math.sqrt(dx * dx + dy * dy);
}


function deleteTab(tableau, critere) {

    let suppression = false;
    for (let i = tableau.length - 1; i >= 0; i--) {
        if (critere(tableau[i])) {
            tableau.splice(i, 1);
            suppression = true;
        }
    }
    return suppression;
}



let tir_fantome = []; 


function tirFantome() {
    if (paused != true) {
        ennemis.forEach(function (e) {
            tir_fantome.push({ x: e.x - 5, y: e.y - 3.5, vx: 1, vy: 0 })

        })

        createBalls();
    }
}

function createBalls() {
    let lien = svg
        .selectAll(".tirennemis")
        .data(tir_fantome);

    lien.enter()
        .append("use")
        .attr("class", "tirennemis")
        .attr("href", "#tir_ennemi");

    lien.exit()
        .remove();
    positionAttacksFantome();
}

function positionAttacksFantome() {
    svg.selectAll(".tirennemis")
        .attr("transform", d => `translate(${d.x},${d.y})`);
}

function speedAttacksFantome() {
    if (paused != true) {
        tir_fantome.forEach(d => {
           
            d.x += d.vx;
        })
    }


    if (deleteTab(tir_fantome, fantomeattacks =>
        deleteTab(joueur, fantome => distance(fantomeattacks, fantome) < 5))) { 
        createBalls();
        vie--;

    } else {
   
        positionAttacksFantome();
    }
}

setInterval(tirFantome, entierAlea(3000, 4000));
setInterval(speedAttacksFantome, entierAlea(28, 32));

