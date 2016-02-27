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
      .attr("src",function(d) { return "assets/img/" + d.imglink + ".png"; })
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





function animationTrigger (){
  var n = 1000;

  var whiteblue = d3.interpolateRgb("#eee", "steelblue"),
      blueorange = d3.interpolateRgb("steelblue", "orange"),
      orangewhite = d3.interpolateRgb("orange", "#eee");

  // var container = d3.select("#clip");



  d3.selectAll("#clip")
    .data(d3.range(n))
    .enter().append("div")
    .attr("class","animation")
    .transition()
      .delay(function(d, i) { return i + Math.random() * n / 4; })
      .ease(d3.easeLinear)
      .on("start", function repeat() {
          d3.active(this)
              .styleTween("background-color", function() { return whiteblue; })
            .transition()
              .delay(1000)
              .styleTween("background-color", function() { return blueorange; })
            .transition()
              .delay(1000)
              .styleTween("background-color", function() { return orangewhite; })
            .transition()
              .delay(n)
              .on("start", repeat);
        });
  }






jQuery(document).ready(function($){
      $(function(){
            $(".element").typed({
                  strings: ["code", "report", "write", "draw", "design", "build"],
                  typeSpeed: 10,
                  loop: true
            });
      });
});

animationTrigger()
