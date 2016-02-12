d3.tsv("assets/portfolio.tsv",function(portfolio) {
  window.portfolio = portfolio;

  var container = d3.select("#clip");

  var thumbnail = container.selectAll(".story")
      .data(portfolio)
    .enter().append("div")
      .classed("story",true)

  var link = thumbnail.append("a")
      .classed("url",true)
      .attr("target","_blank")
      .attr("href",function(d) { return d.url; });


  link.append("img")
      // .attr("src", "assets/img/lazy.png")
      .attr("src",function(d) { return "assets/img/" + d.imglink + ".png"; })
      // .attr("data-ratio","0.6666")
      .classed("imglink", true);

  link.append("a")
      .classed("work-label",true)
      .text(function(d) { return d.name; });

  link.append("p")
      .classed("pub",true)
      .text(function(d){return d.pub})

  link.append("p")
      .classed("note",true)
      .text(function(d){return d.partner})
});


jQuery(document).ready(function($){
      $(function(){
            $(".element").typed({
                  strings: ["code", "report", "write", "draw", "design", "build"],
                  typeSpeed: 10,
                  loop: true
            });
      });

      $('.lazy').laziestloader();



});
