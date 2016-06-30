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
      // .classed("imglink", true)
      .attr("class",function(d){return d.fav + " imglink"})

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

// function animationTrigger (){
//   var n = 1200;

//   var whiteblue = d3.interpolateRgb("#eee", "#B21F26"),
//       blueorange = d3.interpolateRgb("#B21F26", "orange"),
//       orangewhite = d3.interpolateRgb("orange", "#eee");

//   var container = d3.select("#test").append("svg")



//   container
//     .data(d3.range(n))
//     .enter().append("rect")
//     .attr("class","animation")
//     .attr("z-index", -1000)
//     .transition()
//       .delay(function(d, i) { return i + Math.random() * n / 4; })
//       .ease(d3.easeLinear)
//       .on("start", function repeat() {
//           d3.active(this)
//               .styleTween("background-color", function() { return whiteblue; })
//             .transition()
//               .delay(1000)
//               .styleTween("background-color", function() { return blueorange; })
//             .transition()
//               .delay(1000)
//               .styleTween("background-color", function() { return orangewhite; })
//             .transition()
//               .delay(n)
//               .on("start", repeat);
//         });
//   }






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


