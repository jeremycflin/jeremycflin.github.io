d3.tsv("assets/portfolio.tsv",function(portfolio) {

  var selected_project_container = d3.select("#clip");

  var thumbnail = selected_project_container.selectAll(".story")
      .data(portfolio.filter(function(d){
        if(d.fav == "TRUE"){
          return d
        }
    
      }))
      .enter()
      .append("div")
      .classed("story",true)


  var link = thumbnail.append("a")
      .classed("url",true)
      .attr("target","_blank")
      .attr("href",function(d) { return d.url; });

  var inner = link.append("div")
    .attr("class","inner-wrap")
    // .style("background-image", function(d) { return "url('assets/img/" + d.imglink + ".png')"; })
    // .style("background-image", function(){return "url('css/nfl/" + d["team"] +".svg')"})

  inner.append("p")
    .classed("category",true)
    .text(function(d) { return  d.cat; });
    

  inner.append("img")
      .attr("src",function(d) { return "assets/img/" + d.imglink + ".png"; })
      .attr("class",function(d){return d.fav + " imglink"})

  thumbnail.append("a")
      .classed("work-label",true)
      .text(function(d) { return  d.name; });

  thumbnail.append("p")
      .classed("note",true)
      .text(function(d){if(d.partner){return d.pub + ", with " + d.partner }
        else{ return d.pub}
    })

  var others_container = d3.select("#others");

  var others_thumbnail = others_container.selectAll(".story")
      .data(portfolio.filter(function(d){
        if(d.fav == "FALSE"){
          return d
        }
    
      }))
      .enter()
      .append("div")
      .classed("other-story",true)

  var others_link = others_thumbnail.append("a")
      .classed("url",true)
      .attr("target","_blank")
      .attr("href",function(d) { return d.url; })


  var others_inner = others_link.append("div")
    .attr("class","others-inner-wrap")

  others_inner.append("p")
    .classed("category",true)
    .text(function(d) { return  d.cat; });

  others_inner.append("p")
    .classed("others_pub",true)
    .text(function(d) { return  d.pub; });

  others_inner.append("img")
      .attr("src",function(d) { return "assets/img/" + d.imglink + ".png"; })
      .attr("class",function(d){return d.fav + " others_imglink"})



});





