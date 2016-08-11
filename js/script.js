d3.tsv("assets/portfolio.tsv",function(portfolio) {

  var container = d3.select("#clip");

  var thumbnail = container.selectAll(".story")
      .data(portfolio)
      .enter()
      .append("div")
      .classed("story",true)

  var link = thumbnail.append("a")
      .classed("url",true)
      .attr("target","_blank")
      .attr("href",function(d) { return d.url; });

  link.append("img")
      .attr("src",function(d) { return "assets/img/" + d.imglink + ".png"; })
      .attr("class",function(d){return d.fav + " imglink"})

  link.append("a")
      .classed("work-label",true)
      .text(function(d) { return  d.name; });

  thumbnail.append("p")
      .classed("pub",true)
      .text(function(d){return d.pub})

  thumbnail.append("p")
      .classed("note",true)
      .text(function(d){if(d.partner){return "With " + d.partner}})
});

jQuery(document).ready(function($){
      $(function(){
            $(".element").typed({
                  strings: ["code", "report", "write", "draw", "design", "build"],
                  typeSpeed: 10,
                  loop: true
            });

            $('#personalFav').click(function(){
               $(this).addClass('togglebtnPink')
               $('.TRUE').addClass('colorFilterOff')
               $('#showAll').removeClass('togglebtnPink')
            });

            $('#showAll').click(function(){
               $(this).addClass('togglebtnPink')
               $('.TRUE').removeClass('colorFilterOff')
                $('#personalFav').removeClass('togglebtnPink')
            })
      });
});


