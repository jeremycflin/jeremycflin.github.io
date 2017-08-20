


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


  imgContainer.append("span")
    .text(function(d){return d.pub})
    .attr("class","pub")

  imgContainer.append("img")
      .attr("src",function(d) { return "img/" + d.slug + ".png"; })
      // .classed("grid-item", true)

  var nameContainer = inner.append("div")
    .attr("class","name-container")

  nameContainer.append("p")
      .classed("note",true)
      .text(function(d){return d.name})



  var elem = document.querySelector('.grid');
  var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 180,
  gutter: 15

});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});

// d3.select('body')
//   .style("background", "linear-gradient(0deg, #30cfd0, #330867)")
//   .style("background-size", "cover")




});

// $( document ).ready(function() {
//       $('.grid').masonry({
//     // options
//     itemSelector: '.grid-item',
//     columnWidth: 200
//   });
// });





