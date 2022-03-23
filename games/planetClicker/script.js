// // import "./Batiment";

let money = 0;
let total = 0;
// gain = 10;

let mute = false;
let victory = false;

let changeInterval = setInterval(changes,100000);
clearInterval(changeInterval);

let buche = new Batiment("Cabane de bûcheron","buche",500,0,10000,false,250);
let mine = new Batiment("Mine de charbon","mine",5000,0,5000,false,3000);
let usine = new Batiment("Usine de produits chimiques","usine",40000,0,500,true,400);
let petrole = new Batiment("Raffinerie petrolière","petrole",1500000,0,500,true,5000);

let bucheInter = setInterval(thunes, 10000,buche);
let mineInter = setInterval(thunes, 10000,mine);
let usineInter = setInterval(thunes, 10000,usine);
let petroleInter =setInterval(thunes, 10000,petrole);

clearInterval(bucheInter);

clearInterval(mineInter);

clearInterval(usineInter);

clearInterval(petroleInter);


let click = new Click(1,100);
let robot = new Click(0,200);

let clickInter;

setInterval(mouvementfume, 5); 

let fumee = [{
    x:210,
    y:50
}]

let allBat = [buche,mine,usine,petrole];

update_DOM();


window.addEventListener('touchstart', function() {
    d3.select(".cursor").style("display","none");
});


d3.select("body").on("mousemove", function(e){
    // console.log("z")
    
    let pointer = d3.pointer(e);
    d3.select(".cursor").style("display","grid");
    d3.select(".cursor").style("top",pointer[1]+"px").style("left",pointer[0]+"px");
})

allBat.forEach(element => {
    // console.log(element);

    document.querySelector(`.up${element.className}`).addEventListener("click", function(){
        element.upGain();
        update_DOM();
    })
});

d3.select(".clicker")
    .on("click", function () {
        addClick(click.gain,true);
        d3.select(".clicker").transition().duration(100).ease(d3.easeCubic).style("transform","scale(0.9)").transition().duration(100).ease(d3.easeCubic).style("transform","scale(1)")
});

document.querySelector(".upgain").addEventListener("click",function(){
    click.upgain();
    update_DOM();
})

document.querySelector(".upclick").addEventListener("click",function(){
    robot.upclick();
    update_DOM();
})


document.querySelectorAll(".closeInfo").forEach(e => {
    e.addEventListener("click",function() {
        document.querySelector(".showInfo .play").style.display = "none";
        document.querySelector(".infoModale").style.display = "none";
    })
});

document.querySelector(".victory .btn").addEventListener("click",function() {
        document.querySelector(".victoryModale").style.display = "none";
    
});

document.querySelector(".pollutionPopup .btn").addEventListener("click",function() {
    document.querySelector(".pollutionModale").style.display = "none";

});

document.querySelector(".closeInfo.play").addEventListener("click",function(){
    
    changeInterval = setInterval(changes, 47700);
    if (mute == false){
        audio.play();
    }
})

document.querySelector(".mute").addEventListener("click",function(){
    muteDemute();
})
    

document.querySelector(".infos .linkInfo").addEventListener("click", function(){
    document.querySelector(".infoModale").style.display = "grid";
    document.querySelector(".showInfo .x").style.display = "grid";
})


document.querySelector(".reset div").addEventListener("click", function(){
    location.reload();
})

// document.querySelector(".usine").addEventListener("click", function(){
//     window.open('https://www.youtube.com/watch?v=vuFFYObr8ZU', '_blank')
// })

function addClick(g,bool){
    money += g;
    total += g;
    if (bool == true){
        pushFumee(1);
    }
    update_DOM();
}
function nbr(u) {
    var parts = u.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return parts.join(",");
}
function mouvementfume() {
    fumee.forEach(d=>{          
            d.y += -0.5;
        updateTransforms();
    });
    fumee = fumee.filter(d => (d.y > -10));
}
function pushFumee(i){

    if (document.visibilityState === 'visible') {
        if (fumee.length < 40){
            if (i < 1){
                randomNumber = Math.random();
                if (randomNumber < i){
                    let random = Math.floor((Math.random() * 85) + 5);
                    fumee.push({
                        x: random,
                        y: 105,  
                        
                    });
                }

            } else if (i < 10){
                for (let index = i; index > 0; index--) {
                    let random = Math.floor((Math.random() * 85) + 5);
                    fumee.push({
                        x: random,
                        y: 105,  
                        
                    }); 
                }
            }
        } 
    } 
    update_DOM();
}
function clickthunes(){
    addClick(click.gain / (10 / robot.LVL),true)
}

function thunes(bat){
   
        addClick(bat.gain * bat.LVL,false);
        console.log(`${bat.name} à ajouté ${bat.gain * bat.LVL}$`);

}

function muteDemute(){
    if (mute == false){
        mute = true;
        console.log("Music muted");
        audio.pause;
        changes();

        document.querySelector(".mute").innerHTML = "Activer la musique ?";
    } else {
        mute = false;
        console.log("Music unmuted");
        audio.play;
        changes();

        document.querySelector(".mute").innerHTML = "Mettre la musique en pause ?";
    }
}

function pasThunes(){
    let memo = "<h2>Boutique</h2>";
    document.querySelector(".boutique").innerHTML = "<h2 style='color:red'>Pas assez d'argent !</h2>";

    setTimeout(() => {
        document.querySelector(".boutique").innerHTML = memo;
    }, 1000);

}


function affichePollu(terre){
    if (terre == 2){
        document.querySelector(".pollutionModale").style.display = "grid";
        document.querySelector(".pollutionPopup span").innerHTML = "10%";
        document.querySelector(".pollutionPopup p").innerHTML = "On a coupé beaucoup d'arbres. Des déchets sont entreposés en plein air.";
    }else if (terre == 3){
        document.querySelector(".pollutionModale").style.display = "grid";
        document.querySelector(".pollutionPopup span").innerHTML = "25%";
        document.querySelector(".pollutionPopup p").innerHTML = "Les productions augmenent beaucoup. Il est de plus en plus difficile de respirer.";
        
    }else if (terre == 4){
        document.querySelector(".pollutionModale").style.display = "grid";
        document.querySelector(".pollutionPopup span").innerHTML = "50%";
        document.querySelector(".pollutionPopup p").innerHTML = "Les forêts brûlent... Pourquoi il y autant de bouteilles en plastique dans l'océan ? Les terres noircissent...";
        
    }else if (terre == 5){
        document.querySelector(".pollutionModale").style.display = "grid";
        document.querySelector(".pollutionPopup span").innerHTML = "75%";
        document.querySelector(".pollutionPopup p").innerHTML = "Les produits chimiques sont deversés dans les océans... Les poissons meurent... Un continent de plastique se forme dans l'océan... Pourquoi, les nuages sont-ils verts ???";
        
    }else if (terre == 6){
        document.querySelector(".pollutionModale").style.display = "grid";
        document.querySelector(".pollutionPopup span").innerHTML = "90%";
        document.querySelector(".pollutionPopup p").innerHTML = "Les terres sont assechées et remplies de pétrole... Il devient difficile de s'alimenter... L'air est tellement pollué qu'il faut un masque à gaz pour respirer...";
        
    }
}