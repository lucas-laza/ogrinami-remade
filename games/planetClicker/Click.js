class Click {
    LVL = 1;
    upgainPrice = 100;
    gain = 10;


    constructor(LVL,upPrice){
        this.LVL = LVL;
        this.upgainPrice = upPrice;
    }

    upgain(){
        if (money >= this.upgainPrice){
            this.gain = this.gain * 2;
        money -= this.upgainPrice;
            if (this.gain <= 80){
                this.upgainPrice = this.upgainPrice * 10;
            } else {
                this.upgainPrice = this.upgainPrice * 2;
            }
    
            d3.select(".gain")
                .html(`$ par click: ${nbr(this.gain)}`)
    
    
                this.LVL ++;
        if (this.LVL == 2){
            d3.select(".cursor").style("background-image","url('images/pointers/wood.png')");
        }else if (this.LVL == 3){
            d3.select(".cursor").style("background-image","url('images/pointers/silex.png')");
        }else if (this.LVL == 4){
            d3.select(".cursor").style("background-image","url('images/pointers/stone.png')");
        }else if (this.LVL == 5){
            d3.select(".cursor").style("background-image","url('images/pointers/bronze.png')");
        }else if (this.LVL == 6){
            d3.select(".cursor").style("background-image","url('images/pointers/silver.png')");
        }else if (this.LVL == 7){
            d3.select(".cursor").style("background-image","url('images/pointers/gold.png')");
        }else if (this.LVL == 8){
            d3.select(".cursor").style("background-image","url('images/pointers/cristal1.png')");
        }else if (this.LVL == 9){
            d3.select(".cursor").style("background-image","url('images/pointers/cristal2.png')");
        }else if (this.LVL == 10){
            d3.select(".cursor").style("background-image","url('images/pointers/cristal3.png')");
        }else if (this.LVL == 11){
            d3.select(".cursor").style("background-image","url('images/pointers/cristal4.png')");
        }else if (this.LVL == 12){
            d3.select(".cursor").style("background-image","url('images/pointers/cristal5.png')");
        }
        
        } else if (money < this.upgainPrice) {
            console.log("PAS DE THUNES")
            pasThunes();
        }
        
        update_DOM();
    }

    upclick(){
        if (money >= this.upgainPrice){
            this.LVL += 1;
            money -= this.upgainPrice;
            this.upgainPrice = Math.floor(this.upgainPrice * 1.5);
            
            if (this.LVL == 1){
                d3.select(".i1")
                .append("div")
                .attr("class","click")
                .html(`Click niveau:${this.LVL} -> ${this.gain / (10 / this.LVL)} $/seconde`);
            } else if (this.LVL > 1 && this.LVL < 50) {
                d3.select(".click")
                    .html(`Click niveau:${this.LVL} -> ${this.gain / (10 / this.LVL)} $/seconde`);
            } else if (this.LVL == 50){
                d3.select(".click")
                    .html(`MAX`);
            }
            clearInterval(clickInter);
            if (this.LVL != 0){
                clickInter = setInterval(clickthunes, 1000);
            } 
            
            // ${gain / (10 / clickLVL)}
    
        } else if (money < this.upgainPrice) {
            console.log("PAS DE THUNES");
            pasThunes();
        }
        update_DOM();
    }
}