
let vies = 3;

 

window.addEventListener('load', function() {
    // console.log("load")
    
    for (let i = 1; i <= 7; i++ ){
        
        for (let j = 1; j <= 7; j++ ){
            document.querySelector(".gameArea").innerHTML += `<div class='case y${i} x${j}'></div>`;
        }
        
    }

    let cases = document.querySelectorAll('.case');
    

    paysage = [{
        "id": 1,
        "lieu": "nul part",
        "credit": "David Vives",
        "differences":  [
    
                         1,0,0,0,0,0,0,
                         0,0,0,0,0,0,0,
                         0,0,0,0,0,0,0,
                         0,0,2,0,0,0,3,
                         0,0,0,0,0,0,0,
                         0,0,0,0,0,4,0,
                         5,0,0,0,0,0,0
        ],
        "nbDiff": 3,
        "cases":[
            {
                "n":1,
                "photos":[
                    {
                    "lien": "img/paysage1/1-1.png"
                    },
                    {
                    "lien": "img/paysage1/1-2.png" 
                    }
                ]
            },
            {
                "n":2,
                "photos":[
                    {
                    "lien": "img/paysage1/2-1.png"
                    },
                ]
            },
            {
                "n":3,
                "photos":[
                    {
                    "lien": "img/paysage1/3-1.png"
                    },
                ]
            },
            {
                "n":4,
                "photos":[
                    {
                    "lien": "img/paysage1/4-1.png"
                    },
                    {
                    "lien": "img/paysage1/4-2.png" 
                    }
                ]
            },
            {
                "n":5,
                "photos":[
                    {
                    "lien": "img/paysage1/5-1.png"
                    },
                ]
            },
            
    
    ]
    
    }];

    document.querySelector('.win .downloadImage').innerHTML = `<a href="img/paysage${paysage[0].id}/imageDifferences.png" download>Télécharger le paysage !</a>`;


    
    let differences = paysage[0].nbDiff;
    let tab = paysage[0].differences;

    let n = 0;
    let isDiff = false;

    console.log('tab' + tab + 'tab')
    
    let caseN = 0;

    

    for (let diff = paysage[0].nbDiff; diff > 0;){
        
        cases.forEach(element => {
            if (tab[n] != 0){
                isDiff = true;
                caseN = tab[n];
            }
            
            n++;
            
            if (n >= tab.length){
                n = 0;
            }
            if (isDiff == true){

                let random = Math.floor(Math.random()*100);
                if (random >= 90){
                    if (diff > 0){
                        if (!element.classList.contains('diff')){
                            // let url = paysage[caseN].find(findUrl);
                           
                            element.style.backgroundImage = `url("${choseUrl(selectUrl(findCase(paysage[0].cases,caseN)))}")`
                            element.classList.add('diff');
                            diff--;
                        }
                        
                    }
                    
                }
                isDiff = false;
            }
            
        });
        
    }


    cases.forEach(e => {
        e.addEventListener("click", function(){
           
            if (e.classList.contains('diff')){
                differences -= 1;
                e.classList.remove('diff');
                e.style.backgroundColor = '';
                e.style.backgroundImage = '';
            } else {
                vies -= 1;
            }

            updateDom();
        })
    });

    updateDom();
    function updateDom(){
        document.querySelector(".titre .diffRest").innerHTML = `${differences} differences restantes`;
        document.querySelector(".titre .vieRest").innerHTML = `${vies} vies restantes`;

        if (vies <= 0){
            modale(0)
        }
        if (differences <= 0){
            modale(1);
        }
    }


    function modale(purpose){
        document.querySelector(".modale").style.display = "grid";

        if (purpose == 0){
            document.querySelector('.modale .gameOver').style.display = "grid";
        } else if (purpose == 1) {
            document.querySelector('.modale .win').style.display = "grid";
       
        }

    }

    let randomU;

    
    // let tab = [];
}); 

// paysage.cases



function selectUrl(tab){
    let returnTab = [];

    let tab2 = tab[0].photos;
    console.log(tab2)

    tab2.forEach(e => {
        returnTab.push(e.lien);
    });

    console.log(returnTab)
    return returnTab;
}

function choseUrl(tabu){
    let end = null;
    while(1){
        tabu.forEach(e => {
            randomU = Math.random();

            if (randomU >= 0.98){
                end = e;
            }
        })

        if (end != null){
            console.log(end)
            return end;
            
        }
    }
    
}



function findCase(where,num){
    return [where.find(element => element.n == num)];

}

