


d3.tsv("data.tsv",function(portfolio) {

  var selected_project_container = d3.select("#clip");

  var thumbnail = selected_project_container.selectAll(".story")
      .data(portfolio)
      .enter()
      .append("div")
      .classed("story",true)


  var link = thumbnail.append("a")
      .classed("url grid-item",true)
      .attr("target","_blank")
      .attr("href",function(d) { return d.url; });

  var inner = link.append("div")
    .attr("class","inner")


  var imgContainer = inner.append("div")
    .attr("class","img-container")


  // imgContainer.append("span")
  //   .text(function(d){return d.pub})
  //   .attr("class","pub")

  imgContainer.append("img")
      .attr("src",function(d) { return "img/" + d.slug + ".png"; })
      // .classed("grid-item", true)

  var nameContainer = inner.append("div")
    .attr("class","name-container")

  nameContainer.append("div")
      .classed("note",true)
      .html(function(d){return "<span class='pub'>" + d.pub + " <br></span><span class='name'>" + d.name + "</span>"})



$(document).ready(function () {
    var $elem = $('.grid');


  $elem.imagesLoaded(function () {
    $elem.masonry();


    $elem.masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: 180,
      gutter: 15
    });



    });


});

});



