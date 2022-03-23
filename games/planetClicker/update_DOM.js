

function update_DOM() {

    
    d3.select("svg")
        .select(".Gfume")
        .selectAll(".fume")
        .data(fumee)
        .enter()
        .append("circle")
        .attr("class", "fume")
        .attr("fill", "#88888833")
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
                .html(`Robot clicker : <br> ${Math.floor((0.1 * robot.LVL) *100)/100} clicks par seconde -> ${nbr(click.gain / (10 / robot.LVL))} $/seconde`);
    

    
    if ( total >= 1000000000){
        d3.select(".total")
        .style("color","#00022a")
        .style("background-color","gold")
    .html(`score: ${nbr(total)}$`);
    }
    else if ( total >= 500000000){
        d3.select(".total")
        .style("color","gold")
        .style("background-color","royalBlue")
    .html(`score: ${nbr(total)}$`);
    } else if (total >= 1000000) {
        d3.select(".total")
        .style("color","silver")
        .style("background-color","indigo")

    .html(`score: ${nbr(total)}$`);
    } else if ( total >= 50000) {
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
        .html(`Améliorer le gain de $ par click pour ${nbr(click.upgainPrice)}$`);


        if (click.LVL == 0){
            d3.select(".upclick")
        .html(`Acheter un robot clicker pour ${robot.upgainPrice}$.`);

        }
        else if (click.LVL < 50){
            d3.select(".upclick")
        .html(`Améliorer le nombre de cliques par seconde du robot pour ${nbr(robot.upgainPrice)}$.`);

        } else {
            d3.select(".upclick")
        .html(`Le robot clicker est qmélioré au MAX, niveau 50.`);

        }

        
        allBat.forEach(element => {
            if(element.LVL == 0){
                d3.select(`.up${element.className}`).html(`Construire une ${element.name} pour ${nbr(element.upPrice)}$`)
            } else if (element.LVL < 10){
                d3.select(`.up${element.className}`).html(`Améliorer la ${element.name} au niveau ${element.LVL+1} pour ${nbr(element.upPrice)}$`)
            } else {
                d3.select(`.up${element.className}`).html(`${element.name} améliorée au MAX.`)
            }
        });

        

        
    


    

    updateTransforms();

    // console.log("update DOM")


}


function updateTransforms() {
    // console.log("update transforms")

   
    d3.select("svg")
        .selectAll(".fume")
        .attr("transform", d => `translate(${d.x}, ${d.y})`);

}