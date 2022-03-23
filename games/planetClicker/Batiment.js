class Batiment {

    oui = 1;
    

    constructor(name,className,upPrice,LVL,interTime,decay,gain){
        this.name = name;
        this.className = className;
        this.upPrice = upPrice;
        this.LVL = LVL;
        this.interTime = interTime;
        this.decay = decay;
        this.gain = gain;

        // this.inter = setInterval(this.thunes, this.interTime);
        // clearInterval(this.inter);
    }

    upGain(){
        if ((money >= this.upPrice) && (this.LVL < 10)){
            this.LVL += 1;
           money =  Math.floor(money - this.upPrice);
            console.log(money + " " + this.upPrice)
            this.upPrice = Math.floor(this.upPrice * 3);

            if (this.LVL == 1){
                document.querySelector(".i2").innerHTML += `<div class="${this.className}"></div>`;
                document.querySelector(`.${this.className}`).innerHTML = `${this.name}: <br> Niveau ${this.LVL}.`;
            } else if ((this.LVL > 1) && (this.LVL < 10)) {
                document.querySelector(`.${this.className}`).innerHTML = `${this.name}: <br> Niveau ${this.LVL}.`;
            } else if (this.LVL == 10){
                document.querySelector(`.${this.className}`).innerHTML = `${this.name}: <br> Niveau MAX.`;
                if (this.className == "usine"){
                    document.querySelector(`.${this.className}`).innerHTML = `<a href='https://www.youtube.com/watch?v=vuFFYObr8ZU' target='_blank'>${this.className}</a>: <br> Niveau MAX.`;
                }
            }

            if (this.className == "buche"){
                clearInterval(bucheInter);
            } else if (this.className == "mine"){
                clearInterval(mineInter);
            } else if (this.className == "usine"){
                clearInterval(usineInter);
            } else if (this.className == "petrole"){
                clearInterval(petroleInter);
            }
            

            if (this.LVL > 0){
                
                if (this.LVL < 2){
                   // 
                    
                }else if (this.LVL < 6) {
                    if ((this.LVL == 2) && (this.decay == true)){
                        this.interTime = Math.floor(this.interTime * 0.9)
                    }
                    this.gain = Math.floor(this.gain * 2);
                    
                } else if (this.LVL < 10) {
                    if ((this.LVL == 6) && (this.decay == true)){
                        this.interTime = Math.floor(this.interTime * 0.9)
                    }
                    this.gain = Math.floor(this.gain * 2);
                    
                } else {
                    if (this.decay == true){
                        this.interTime = Math.floor(this.interTime * 0.8)
                    }
                    
                }
                // addClick(this.gain * this.LVL,false);
                
                //résolution de problème d'interval en "sortant" la fonction de la classe => ce n'est pas très propre mais cela fonctionne.
                if (this.className == "buche"){
                    bucheInter = setInterval(thunes, buche.interTime,buche);
                } else if (this.className == "mine"){
                    mineInter = setInterval(thunes, mine.interTime,mine);
                } else if (this.className == "usine"){
                    usineInter = setInterval(thunes, usine.interTime,usine);
                } else if (this.className == "petrole"){
                    petroleInter = setInterval(thunes, petrole.interTime,petrole);
                }
                document.querySelector(`.${this.className}`).innerHTML += `<br>${nbr(Math.floor((this.gain * this.LVL)*(1000/this.interTime)))}$ toutes les secondes.`;

               
                   
            }
        } else if ((money < this.upPrice) && (this.LVL < 10)){
            pasThunes();
        }
    }

    thunesOLD(){

        //cette fonction ne fonctionne pas dans un interval. Il a fallu la sortir de la classe. => voir Scipt.js

        // addClick(this.gain * this.LVL,false);
        // console.log(`${this.name} à ajouté ${this.gain * this.LVL}$`);
    }

}