let terre = 1;
let audio = new Audio(`sounds/lets_go_2.mp3`);
function changes(){
    console.log(".play");
    audio.pause();
    if ((total >= 15000) && (terre == 1)){
        terre++
        document.querySelector("svg").style.backgroundColor = "#351668";
        document.querySelector(".clicker").setAttribute("href",`images/terre${terre}.png`);
        document.querySelector(".pollu span").innerHTML = "10%";
        document.querySelector(".pollu").style.backgroundColor = "Turquoise";

        affichePollu(terre);
        
    } else if ((total >= 50000) && (terre == 2)){
        terre++
        document.querySelector(".clicker").setAttribute("href",`images/terre${terre}.png`);
        document.querySelector("svg").style.backgroundColor = "#27124b";
        document.querySelector(".pollu span").innerHTML = "25%";
        document.querySelector(".pollu").style.backgroundColor = "DarkTurquoise"

        affichePollu(terre);
    } else if ((total >= 1000000) && (terre == 3)){
        terre++
        document.querySelector(".clicker").setAttribute("href",`images/terre${terre}.png`); 
        document.querySelector(".pollu span").innerHTML = "50%";
        document.querySelector(".pollu").style.backgroundColor = "YellowGreen"

        clearInterval(changeInterval);
        changeInterval = setInterval(changes,50879);

        affichePollu(terre);
    } else if ((total >= 20000000) && (terre == 4)){
        terre++
        document.querySelector("svg").style.backgroundColor = "#1f0d3e";
        document.querySelector(".clicker").setAttribute("href",`images/terre${terre}.png`); 
        document.querySelector(".pollu span").innerHTML = "75%";
        document.querySelector(".pollu").style.backgroundColor = "GreenYellow";

        clearInterval(changeInterval);
        changeInterval = setInterval(changes,54472);

        affichePollu(terre);
    } else if ((total >= 200000000) && (terre == 5)){
        terre++
        document.querySelector(".clicker").setAttribute("href",`images/terre${terre}.png`); 
        document.querySelector(".pollu span").innerHTML = "90%";
        document.querySelector(".pollu").style.backgroundColor = "DarkSeaGreen"

        clearInterval(changeInterval);
        changeInterval = setInterval(changes,58641);

        affichePollu(terre);
    } else if ((total >= 1000000000) && (terre == 6)){
        terre++
        document.querySelector("svg").style.backgroundColor = "#0d031e";
        document.querySelector(".clicker").setAttribute("href",`images/terre${terre}.png`); 
        document.querySelector(".pollu span").innerHTML = "3000%";
        document.querySelector(".pollu").style.backgroundColor = "DimGrey"

        clearInterval(changeInterval);
        changeInterval = setInterval(changes,63476);

        victory = true;
        document.querySelector(".victoryModale").style.display = "grid"
    }

    if (mute == false){
        audio = new Audio(`sounds/lets_go_${terre+1}.mp3`);
        audio.play();
    }



    


   

   
}
