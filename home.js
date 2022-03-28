if (sessionStorage.getItem('ogrinami-popup-p') != undefined){
    document.querySelector(".leftText.parents").style.display = "none";
    document.querySelector(".leftText.enfants").style.display = "grid";
}

if (sessionStorage.getItem('ogrinami-popup-c') != undefined){
    document.querySelector(".grinouilleModale").style.display = "none";
}



document.querySelector(".pAccept").addEventListener("click", function(){
    document.querySelector(".leftText.parents").style.display = "none";
    document.querySelector(".leftText.enfants").style.display = "grid";
})

document.querySelector(".pAcceptAgain").addEventListener("click", function(){
    
    sessionStorage.setItem('ogrinami-popup-p', true);


    document.querySelector(".leftText.parents").style.display = "none";
    document.querySelector(".leftText.enfants").style.display = "grid";
})

document.querySelector(".pMore").addEventListener("click", function(){
    location.href = "about.php";
})

document.querySelector(".cAccept").addEventListener("click", function(){
    document.querySelector(".grinouilleModale").style.display = "none";
})

document.querySelector(".cAcceptAgain").addEventListener("click", function(){
    
    sessionStorage.setItem('ogrinami-popup-c', true);


    document.querySelector(".grinouilleModale").style.display = "none";
})

document.querySelector(".scrollSections").addEventListener("click",function(){
    let sectionY = document.querySelector("section.rubriques .titre").offsetTop;
    console.log(sectionY);
    scrollTo(0,sectionY*0.9);

})